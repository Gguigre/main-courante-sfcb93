import { useContext } from 'react';
import { CurrentPostContext } from './CurrentPostContext';

export const useCurrentPostContext = () => {
  return useContext(CurrentPostContext);
};
