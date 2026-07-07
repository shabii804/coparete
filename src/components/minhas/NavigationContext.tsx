'use client';
import { createContext, useContext } from 'react';

export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'products'
  | 'industries'
  | 'portfolio'
  | 'team'
  | 'blog'
  | 'contact';

interface NavContextValue {
  navigate: (page: PageId) => void;
  currentPage: PageId;
  openQuote: () => void;
}

const NavContext = createContext<NavContextValue>({
  navigate: () => {},
  currentPage: 'home',
  openQuote: () => {},
});

export function useNav() {
  return useContext(NavContext);
}

export const NavProvider = NavContext.Provider;
