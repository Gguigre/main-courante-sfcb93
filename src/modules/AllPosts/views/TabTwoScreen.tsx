import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { RootStackParamList, RootTabParamList } from '../../../../types';

import { EditScreenInfo } from '../../../shared/views/EditScreenInfo';
import { Text, View } from '../../../shared/views/Themed';

type Props = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList, 'TabTwo'>,
  NativeStackNavigationProp<RootStackParamList>
>;

export const TabTwoScreen: React.FunctionComponent<Props> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
