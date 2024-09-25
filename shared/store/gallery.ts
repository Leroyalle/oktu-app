import { create } from 'zustand';
import { Api } from '../services/api-client';
import { ImageWithItems } from '@/@types/dataDTO';

interface Store {
  items: ImageWithItems[];
  totalCount: number;
  skip: number;
  loading: boolean;
  error: boolean;
  setSkip: (length: number) => void;
  setItems: (data: ImageWithItems[], count: number) => void;
  fetchItems: VoidFunction;
  resetStore: VoidFunction;
}

export const useGalleryStore = create<Store>()((set) => ({
  items: [],
  totalCount: 0,
  skip: 0,
  loading: true,
  error: false,

  setItems: (data, count) => {
    set((prev) => ({ items: [...prev.items, ...data], totalCount: count }));
  },
  setSkip: (length) => {
    set((prev) => ({ skip: prev.skip + length }));
  },
  fetchItems: async () => {
    try {
      set({ loading: true, error: false });
      const data = await Api.image.getAll('skip=0&take=6');
      set((prev) => ({
        items: data.images,
        totalCount: data.totalCount,
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
    set({
      items: [],
      totalCount: 0,
      skip: 0,
      loading: true,
      error: false,
    });
  },
}));
