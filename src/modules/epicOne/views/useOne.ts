import { useQuery } from 'react-query';
import { getOne } from '../infra/connectors/one';

export const useOne = () => {
  return useQuery('one', getOne);
};
