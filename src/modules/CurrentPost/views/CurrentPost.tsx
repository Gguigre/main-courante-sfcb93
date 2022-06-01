import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { RootStackParamList, RootTabParamList } from '../../../../types';
import { Text, View } from '../../../shared/views/Themed';

type Props = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList, 'CurrentPost'>,
  NativeStackNavigationProp<RootStackParamList>
>;

export const CurrentPostScreen: React.FunctionComponent<Props> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Poste en cours</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
