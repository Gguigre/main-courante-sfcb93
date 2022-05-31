import { adaptOne, OneDTO } from '../adapters/one';
import { fetchOne } from '../fetchers/one';

export const getOne = async () => {
  const rawData = await fetchOne<OneDTO[]>();
  const data = adaptOne(rawData);

  return data;
};
