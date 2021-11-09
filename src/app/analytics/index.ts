import * as FirebaseAnalytics from 'expo-firebase-analytics';

export const Analytics = {
  logEvent: (name: string, properties?: Record<string, string> | undefined) => {
    return FirebaseAnalytics.logEvent(name, properties);
  },
  setCurrentScreen: (screenName: string) => {
    return FirebaseAnalytics.setCurrentScreen(screenName);
  },
};
