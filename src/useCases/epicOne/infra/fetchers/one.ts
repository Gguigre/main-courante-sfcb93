import { fetchApi } from '../../../../app/http/fetcher';

export const fetchOne = <T>(): Promise<T> => {
  return fetchApi.url('').get().json();
};
