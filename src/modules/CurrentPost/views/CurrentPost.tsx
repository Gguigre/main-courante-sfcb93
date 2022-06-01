import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as React from 'react';
import { Button, StyleSheet } from 'react-native';
import { RootStackParamList, RootTabParamList } from '../../../../types';
import { Text, View } from '../../../shared/views/Themed';
import { useCurrentPostScreen } from './useCurrentPostScreen';

type Props = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList, 'CurrentPost'>,
  NativeStackNavigationProp<RootStackParamList>
>;

export const CurrentPostScreen: React.FunctionComponent<Props> = () => {
  const { currentPost, createPost } = useCurrentPostScreen();

  return (
    <View style={styles.container}>
      {currentPost === null ? (
        <View style={styles.noPostContainer}>
          <Text>Aucun poste de secours en cours</Text>
          <Button title="Créer un poste" onPress={createPost} />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  noPostContainer: { alignSelf: 'center', flex: 1, justifyContent: 'center' },
});
