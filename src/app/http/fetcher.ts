import wretch from 'wretch';
import { getEnvironment } from '../getEnvironnement';

const apiEndpoint = getEnvironment().apiEndpoint;

export const fetchApi = wretch()
  .url(apiEndpoint)
  .resolve(_ =>
    _.forbidden(() => console.warn('Forbidden'))
      .notFound(error => {
        console.warn('Not found', error);
      })
      .unauthorized(error => {
        console.warn('Unauthorized', error);
      })
  );
