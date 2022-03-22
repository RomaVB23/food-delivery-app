import React from 'react';
import {FlatList, StyleSheet, StatusBar, SafeAreaView} from 'react-native';

import ItemCard from '../components/ItemCard';
import Header from '../components/Header';
import products from '../api/products.json';
import {Product} from '../types/product';
import {Irote} from '../types/iNavigation';

const Menu = ({route}: Irote) => {
  const renderItem = ({item}: {item: Product}) => <ItemCard product={item} />;
  // const categoryName = route?.params?.categoryName;
  // const categoryId = route?.params?.categoryId;
  const {categories} = route?.params;
  const {id, name} = categories;
  const filteredProducts = products.filter(item => item.category === id);
  return (
    <SafeAreaView style={styles.container}>
      <Header title={name} />
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapperStyle}
        keyExtractor={item => `${item.id}`}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  columnWrapperStyle: {
    justifyContent: 'space-evenly',
    marginBottom: 16,
  },
});

export default Menu;
