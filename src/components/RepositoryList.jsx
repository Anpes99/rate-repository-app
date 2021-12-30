import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor:"#F5F5F5"
  },
});



const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = ({repositories}) => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      // other props
      renderItem={({ item }) => (
          <RepositoryItem item={item} />
      )}
    />
  );
};

export default RepositoryList;