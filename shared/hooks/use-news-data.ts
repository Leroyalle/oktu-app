'use client';
import React from 'react';
import { useNewsStore } from '../store';
import { Post } from '@prisma/client';
import { useRouter, useSearchParams } from 'next/navigation';
import { QueryPagination } from '@/@types/searchParams';

interface ReturnProps {
  newsStore: {
    page: number;
    items: Post[];
    totalPages: number;
    loading: boolean;
    getPageUrl: (value: number) => void;
    error: boolean;
    fetchItems: (params: string) => void;
  };
  onChangePage: (value: 'plus' | 'minus') => void;
  tag: number;
  onChangeTag: (id: number) => void;
}

// FIXME: просто ужасный код, простите((
export const useNewsData = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<keyof QueryPagination, string>;
  const newsStore = useNewsStore();
  const router = useRouter();
  const isMounted = React.useRef(false);

  const perPage = searchParams.has('perPage') ? Number(searchParams.get('perPage')) : 12;
  const [tag, setTag] = React.useState(
    searchParams.has('tag') ? Number(searchParams.get('tag')) : 0,
  );

  React.useEffect(() => {
    newsStore.getPageUrl(Number(searchParams.get('page')));
    console.log(Number(searchParams.get('page')));
  }, []);

  const hasTag = tag === 0 ? '' : `&tag=${tag}`;

  const offset = (Number(searchParams.get('page')) - 1) * perPage;

  const onChangeTag = (id: number) => {
    newsStore.resetPage();
    setTag(id);
  };

  const onChangePage = (value: 'plus' | 'minus') => {
    console.log(value);
    value === 'plus' ? newsStore.setPage('plus') : newsStore.setPage('minus');
  };

  React.useEffect(() => {
    router.push(`?page=${newsStore.page}&perPage=${perPage}${hasTag}`);
  }, [newsStore.page, tag, searchParams]);

  React.useEffect(() => {
    try {
      if (isMounted.current) {
        if (newsStore.page <= newsStore.totalPages) {
          newsStore.fetchItems(`skip=${offset}&take=${perPage}${hasTag}`);
        }
      } else {
        newsStore.fetchItems(`skip=${offset}&take=${perPage}${hasTag}`);
        isMounted.current = true;
      }
    } catch (error) {
      throw error;
    }
  }, [newsStore.page, tag, searchParams]);

  return { newsStore, onChangePage, tag, onChangeTag };
};
