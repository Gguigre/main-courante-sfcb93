import { useMemo, useReducer } from 'react';
import { CurrentPostState, PostType, CurrentPostAction } from './types';

export const useCurrentPost = () => {
  const currentPostReducer = (prevState: CurrentPostState, action: CurrentPostAction) => {
    switch (action.type) {
      case 'CREATE_POST':
        return {
          ...prevState,
          currentPost: action.payload,
        };
      case 'END_POST':
        return {
          ...prevState,
          currentPost: null,
        };
    }
  };

  const [state, dispatch] = useReducer(currentPostReducer, {
    currentPost: null,
  });

  const currentPostContext = useMemo(
    () => ({
      createPost: (post: PostType) => {
        dispatch({ type: 'CREATE_POST', payload: post });
      },
      endPost: () => {
        dispatch({ type: 'END_POST' });
      },
    }),
    [state]
  );

  return { currentPostContext };
};
