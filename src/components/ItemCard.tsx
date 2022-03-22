import React from 'react';
import {Text, View, StyleSheet, Image, TouchableHighlight} from 'react-native';
import {Product} from '../types/product';
import ButtonMenu from './ButtonMenu';
import {useDispatch} from 'react-redux';
import {addToCart} from '../reducers/basketReducer';
import {useNavigation} from '@react-navigation/native';

interface IProps {
  product: Product;
}

export default function ItemCard({product}: IProps) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const addProductToCart = () => {
    dispatch(addToCart(product));
    navigation.navigate('Корзина');
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.picture}>
        {/* <Image style={styles.picture} source={{uri: products[0].url}} /> */}
        <Image
          style={{width: 160, height: 140, borderRadius: 8}}
          source={{uri: product.url}}
        />
      </TouchableHighlight>
      <View style={styles.textContainer}>
        <Text style={styles.label}> {product.name} </Text>
        {/* <Text style={{color: '#010F07', fontSize: 16}}>
          {' '}
          {product.price} р{' '}
        </Text> */}
      </View>
      <ButtonMenu onPress={addProductToCart} text={product.price} />
    </View>
  );
}
const styles = StyleSheet.create({
  picture: {
    width: 160,
    hight: 140,
    borderRadius: 8,
  },
  container: {
    width: 160,
    height: 225,
    marginHorizontal: 21,
    marginVertical: 9,
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
    fontWeight: '800',
    color: '#010F07',
    textAlign: 'center',
    fontFamily: 'Avenir-Book',
  },
  textContainer: {
    height: 45,
    justifyContent: 'space-between',
  },
});
