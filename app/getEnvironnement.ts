import * as Updates from 'expo-updates';

type Env = {
  envName: string;
  apiEndpoint: string;
  apiKey: string;
};

export const getEnvironment = (): Env => {
  if (Updates.releaseChannel.startsWith('prod')) {
    return { envName: 'PRODUCTION', apiEndpoint: '', apiKey: 'ddd' }; // prod env settings
  } else if (Updates.releaseChannel.startsWith('staging')) {
    return { envName: 'STAGING', apiEndpoint: '', apiKey: 'ddd' }; // stage env settings
  } else {
    // assume any other release channel is development
    return { envName: 'DEVELOPMENT', apiEndpoint: '', apiKey: 'ddd' }; // dev env settings
  }
};
