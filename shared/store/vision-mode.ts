import { create } from 'zustand';

interface Store {
  isVisionMode: boolean;
  setIsVisionMode: () => void;
  getStateOfStorage: (value: string | null) => void;
}

export const useVisionModeStore = create<Store>()((set) => ({
  isVisionMode: false,
  getStateOfStorage: (value: string | null) => {
    set({ isVisionMode: value === 'true' || false });
  },
  setIsVisionMode: () => {
    set((prev) => ({
      isVisionMode: !prev.isVisionMode,
    }));
  },
}));
