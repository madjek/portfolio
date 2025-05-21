import { create } from 'zustand';

interface NavigationState {
  currentRoute: string;
  setRoute: (route: string) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  currentRoute: '/',
  setRoute: (route) => set({ currentRoute: route }),
}));
