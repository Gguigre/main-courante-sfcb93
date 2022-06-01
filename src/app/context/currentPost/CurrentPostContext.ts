import { createContext } from 'react';
import { CurrentPostState } from './types';

export const CurrentPostContext = createContext<{
  currentPost: CurrentPostState;
}>({
  currentPost: {
    currentPost: null,
  },
});
