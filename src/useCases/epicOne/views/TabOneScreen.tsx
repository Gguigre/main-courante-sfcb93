import * as React from 'react';
import { StyleSheet } from 'react-native';

import { EditScreenInfo } from '../../../shared/views/EditScreenInfo';
import { Text, View } from '../../../shared/views/Themed';
import { i18n } from '../../../app/i18n/i18n';

export const TabOneScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t('tabOne.title')}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
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
