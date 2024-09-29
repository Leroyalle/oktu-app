'use client';
import React from 'react';
import { useNewsStore } from '../store';
import { Post } from '@prisma/client';
import { Api } from '../services/api-client';
import { useRouter, useSearchParams } from 'next/navigation';

interface ReturnProps {
  items: Post[];
  totalPages: number;
  skip: number;
  loading: boolean;
  error: boolean;
  setItems: (data: Post[], count: number) => void;
  setSkip: (length: number) => void;
  fetchItems: VoidFunction;
  resetStore: VoidFunction;
}

export const useNewsData = () => {
  const searchParams = useSearchParams();
  const newsStore = useNewsStore();
  const router = useRouter();
  const isMounted = React.useRef(false);

  const [page, setPage] = React.useState(
    searchParams.has('page') ? Number(searchParams.get('page')) : 1,
  );

  const perPage = searchParams.has('perPage') ? Number(searchParams.get('perPage')) : 6;
  const offset = (page - 1) * perPage;

  const onChangePage = (value: 'plus' | 'minus') => {
    value === 'plus' ? setPage((prev) => prev + 1) : setPage((prev) => prev - 1);
  };
  const [disabled, setDisabled] = React.useState(page >= newsStore.totalPages);
  console.log(disabled);
  React.useEffect(() => {
    console.log(page);
    router.push(`?page=${page}&perPage=${perPage}`);
  }, [page]);

  React.useEffect(() => {
    try {
      if (isMounted.current) {
        if (page <= newsStore.totalPages) {
          newsStore.fetchItems(`skip=${offset}&take=${perPage}`);
          setDisabled(false);
        } else {
          setDisabled(true);
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
