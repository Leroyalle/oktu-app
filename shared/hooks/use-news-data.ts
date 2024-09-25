import React from 'react';
import { useNewsStore } from '../store';
import { Post } from '@prisma/client';
import { useInView } from 'react-intersection-observer';
import { Api } from '../services/api-client';

interface ReturnProps {
  newsStore: {
    items: Post[];
    totalCount: number;
    skip: number;
    loading: boolean;
    error: boolean;
    setItems: (data: Post[], count: number) => void;
    setSkip: (length: number) => void;
    fetchItems: VoidFunction;
    resetStore: VoidFunction;
  };
  ref: (node?: Element | null) => void;
}

export const useNewsData = (): ReturnProps => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const newsStore = useNewsStore();

  React.useEffect(() => {
    newsStore.fetchItems();
    return () => newsStore.resetStore();
  }, []);

  React.useEffect(() => {
    if (inView && newsStore.items.length < newsStore.totalCount) {
      (async function () {
        try {
          const data = await Api.post.getAll(`skip=${newsStore.skip}&take=6`);
          newsStore.setItems(data.posts, data.totalCount);
          newsStore.setSkip(6);
        } catch (error) {
          console.log('Error [MORE-NEWS_GET]', error);
          throw error;
        }
      })();
    }
  }, [inView]);

  return {
    newsStore,
    ref,
  };
};
