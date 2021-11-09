import React, { FunctionComponent } from 'react';
import * as Sentry from 'sentry-expo';
import { ErrorFallbackScreen } from './ErrorFallbackScreen';

const DSN = ''; // YOUR DSN HERE

if (DSN) {
  Sentry.init({
    dsn: DSN,
    // enableInExpoDevelopment: true,
    // debug: true, // Sentry will try to print out useful debugging information if something goes wrong with sending an event. Set this to `false` in production.
  });
}

export const ErrorBoundary: FunctionComponent = ({ children }) => {
  return (
    <Sentry.Native.ErrorBoundary fallback={ErrorFallbackScreen}>
      {children}
    </Sentry.Native.ErrorBoundary>
  );
};
