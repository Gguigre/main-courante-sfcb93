import React from 'react';
import { View, Text, Pressable } from 'react-native';

type Props = {
  error: Error;
  resetError: () => void;
  componentStack: string | null;
};

export const ErrorFallbackScreen = ({ error, resetError }: Props) => {
  return (
    <View>
      <Text>{"Une erreur s'est produite"}</Text>
      {error && <Text>{error.message}</Text>}

      <Pressable onPress={resetError}>
        <Text>Relancer l'application</Text>
      </Pressable>
    </View>
  );
};
