import { create } from "zustand";

interface CategoriesState {
  categories: string[];
  setCategories: (categories: string[]) => void;
}

export const useCategoriesStore = create<CategoriesState>()((set) => ({
  categories: [],
  setCategories: (categories) => set({ categories }),
}));
