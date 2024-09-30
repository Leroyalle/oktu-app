'use client';
import React from 'react';
import { useNewsStore } from '../store';
import { Post } from '@prisma/client';
import { useRouter, useSearchParams } from 'next/navigation';

interface ReturnProps {
  newsStore: {
    items: Post[];
    totalPages: number;
    page: number;
    skip: number;
    loading: boolean;
    error: boolean;
    setItems: (data: Post[], count: number) => void;
    setSkip: (length: number) => void;
    fetchItems: (params: string) => void;
    resetStore: VoidFunction;
  };
  onChangePage: (value: 'plus' | 'minus') => void;
  page: number;
}

export const useNewsData = (): ReturnProps => {
  const searchParams = useSearchParams();
  const newsStore = useNewsStore();
  const router = useRouter();
  const isMounted = React.useRef(false);

  const [page, setPage] = React.useState(
    searchParams.has('page') ? Number(searchParams.get('page')) : 1,
  );

  const perPage = searchParams.has('perPage') ? Number(searchParams.get('perPage')) : 12;
  const offset = (page - 1) * perPage;

  const onChangePage = (value: 'plus' | 'minus') => {
    value === 'plus' ? setPage((prev) => prev + 1) : setPage((prev) => prev - 1);
  };

  React.useEffect(() => {
    router.push(`?page=${page}&perPage=${perPage}`);
  }, [page]);

  React.useEffect(() => {
    try {
      if (isMounted.current) {
        if (page <= newsStore.totalPages) {
          newsStore.fetchItems(`skip=${offset}&take=${perPage}`);
        }
      } else {
        newsStore.fetchItems(`skip=${offset}&take=${perPage}`);
        isMounted.current = true;
      }
    } catch (error) {
      throw error;
    }
  }, [page]);

  return { newsStore, onChangePage, page };
};
