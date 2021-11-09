import React from 'react';
import { FunctionComponent } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export const HttpProvider: FunctionComponent = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
