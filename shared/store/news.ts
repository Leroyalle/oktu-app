import { Post } from '@prisma/client';
import { create } from 'zustand';
import { Api } from '../services/api-client';
interface Store {
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
}

export const useNewsStore = create<Store>()((set) => ({
  items: [],
  totalPages: 1,
  page: 1,
  skip: 0,
  loading: true,
  error: false,
  setItems: (data, count) => {
    set((prev) => ({ items: [...prev.items, ...data], totalCount: count }));
  },
  setSkip: (length) => {
    set((prev) => ({ skip: prev.skip + length }));
  },
  fetchItems: async (params: string) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.post.getAll(params);
      set((prev) => ({
        items: data.posts,
        totalPages: data.totalPages,
        skip: prev.skip + 6,
      }));
    } catch (error) {
      set({ error: true });
      console.log('Error [FETCH_ITEMS]', error);
    } finally {
      set({ loading: false });
    }
  },
  resetStore: () => {
    // set({
    //   items: [],
    //   totalCount: 0,
    //   skip: 0,
    //   loading: true,
    //   error: false,
    // });
  },
}));
