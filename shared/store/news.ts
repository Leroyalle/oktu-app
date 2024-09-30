import { Post } from '@prisma/client';
import { create } from 'zustand';
import { Api } from '../services/api-client';
interface Store {
  items: Post[];
  page: number;
  setPage: (value: 'plus' | 'minus') => void;
  totalPages: number;
  loading: boolean;
  error: boolean;
  fetchItems: (params: string) => void;
  getPageUrl: (value: number) => void;
  resetPage: VoidFunction;
}

export const useNewsStore = create<Store>()((set) => ({
  items: [],
  page: 1,
  setPage: (value) => {
    set((prev) => ({
      page: value === 'plus' ? prev.page + 1 : prev.page - 1,
    }));
  },
  getPageUrl: (value: number) => {
    set({ page: value });
  },
  resetPage: () => {
    set({ page: 1 });
  },

  // getItem: (key): string => {
  //   const searchParams = new URLSearchParams(location.hash.slice(1));
  //   const storedValue = searchParams.get(key) ?? '';
  //   set({ page: JSON.parse(storedValue) });
  // },

  totalPages: 1,
  loading: true,
  error: false,
  fetchItems: async (params: string) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.post.getAll(params);
      set((prev) => ({
        items: data.posts,
        totalPages: data.totalPages,
      }));
    } catch (error) {
      set({ error: true });
      console.log('Error [FETCH_ITEMS]', error);
    } finally {
      set({ loading: false });
    }
  },
}));
