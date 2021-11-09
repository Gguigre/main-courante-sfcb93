import React, { FunctionComponent } from 'react';
import { render, RenderAPI } from '@testing-library/react-native';
import { QueryClient, QueryClientProvider } from 'react-query';

type WrapWithProvidersAndRenderParams<T> = {
  Component: FunctionComponent<T>;
  props: T;
};

export const wrapWithProvidersAndRender = <T,>({
  Component,
  props,
}: WrapWithProvidersAndRenderParams<T>): { component: RenderAPI } => {
  const queryClient = new QueryClient(); // queryClient is inside the wrapper to be have isolated tests

  /**
   * Removing react-query caching makes tests faster and avoid jest hanging
   * because of the timeouts created by react-query when having cache
   *
   * See https://github.com/tannerlinsley/react-query/issues/1847
   */
  queryClient.setDefaultOptions({
    queries: {
      cacheTime: 0,
    },
  });

  const WrappedComponent = (
    <QueryClientProvider client={queryClient}>
      <Component {...props} />
    </QueryClientProvider>
  );

  return { component: render(WrappedComponent) };
};
