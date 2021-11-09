import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Text, View } from '../../../shared/views/Themed';
import { i18n } from '../../../app/i18n/i18n';
import { useOne } from './useOne';
import { colors } from '../../../../constants/Colors';

export const TabOneScreen = () => {
  const { data } = useOne();

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text>{`${item.name}: ${item.email}`}</Text>
        </View>
      )}
      ListHeaderComponent={() => <Text style={styles.title}>{i18n.t('tabOne.title')}</Text>}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  card: {
    borderRadius: 10,
    backgroundColor: colors.light.tint,
    padding: 12,
    marginBottom: 12,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
