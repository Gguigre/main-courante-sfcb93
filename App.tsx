import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useCachedResources } from './src/app/useCachedResources';
import { Navigation } from './src/app/navigation';
import { useColorScheme } from './src/app/useColorScheme';
import { HttpProvider } from './src/app/http/HttpProvider';

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <HttpProvider>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </HttpProvider>
    );
  }
};

export default App;
