import * as Updates from 'expo-updates';

type Env = {
  envName: string;
  apiEndpoint: string;
  apiKey: string;
};

export const getEnvironment = (): Env => {
  if (Updates.releaseChannel.startsWith('prod')) {
    return {
      envName: 'PRODUCTION',
      apiEndpoint: 'https://jsonplaceholder.typicode.com/users',
      apiKey: 'ddd',
    }; // prod env settings
  } else if (Updates.releaseChannel.startsWith('staging')) {
    return {
      envName: 'STAGING',
      apiEndpoint: 'https://jsonplaceholder.typicode.com/users',
      apiKey: 'ddd',
    }; // stage env settings
  } else {
    // assume any other release channel is development
    return {
      envName: 'DEVELOPMENT',
      apiEndpoint: 'https://jsonplaceholder.typicode.com/users',
      apiKey: 'ddd',
    }; // dev env settings
  }
};

export const apiEndpoint = getEnvironment().apiEndpoint;
