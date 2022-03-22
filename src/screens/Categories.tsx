import React from 'react';
import {
  FlatList,
  StyleSheet,
  StatusBar,
  ImageBackground,
  SafeAreaView,
  View,
  TouchableOpacity,
} from 'react-native';
// Components
import TextCategories from '../components/TextCategories';
// API
import categories from '../api/categories.json';
// types
import {Category} from '../types/category';
import {Inavigation} from '../types/iNavigation';

const Item = ({
  item,
  navigation,
}: {
  item: Category;
  navigation: Inavigation;
}) => (
  <TouchableOpacity
    onPress={() =>
      navigation.navigate('Menu', {
        categories: item,
      })
    }>
    <ImageBackground style={styles.categoriesImage} source={{uri: item.url}}>
      <View style={styles.containerOpacity} />
      <TextCategories text={item.name} />
    </ImageBackground>
  </TouchableOpacity>
);

const Categories = ({navigation}: {navigation: Inavigation}) => {
  const renderItem = ({item}: {item: Category}) => (
    <Item item={item} navigation={navigation} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
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
  categoriesImage: {
    backgroundColor: 'black',
    width: 160,
    height: 160,
    borderRadius: 10,
    paddingHorizontal: 32,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  containerOpacity: {
    backgroundColor: '#000000',
    width: 160,
    height: 160,
    opacity: 0.496,
    justifyContent: 'center',
    position: 'absolute',
  },
  columnWrapperStyle: {
    justifyContent: 'space-evenly',
    marginBottom: 16,
  },
});

export default Categories;
