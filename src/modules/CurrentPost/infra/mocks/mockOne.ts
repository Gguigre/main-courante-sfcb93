import nock from 'nock';
import { apiEndpoint } from '../../../../app/getEnvironnement';
import one from './json/one.json';

export const mockOne = (): void => {
  nock(apiEndpoint).get('').reply(200, one);
};
