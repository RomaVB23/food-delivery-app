import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableHighlight} from 'react-native';
import {addOneMore, delOneMore} from '../reducers/basketReducer';
import {useSelector, useDispatch} from 'react-redux';

export default function ItemInBasket({product}) {
  // const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.picture}>
        <Image
          style={{width: 110, height: 110, borderRadius: 8}}
          source={{uri: product.url}}
        />
      </TouchableHighlight>

      <View style={styles.descriptionArea}>
        <Text style={styles.header}> {product.name} </Text>
        <View style={styles.pricearea}>
          <View style={{flexDirection: 'row'}}>
            <TouchableHighlight
              style={styles.buttonMinus}
              onPress={() => dispatch(delOneMore(product))}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableHighlight>

            <View style={styles.counter}>
              <Text style={styles.buttonText}>{product.quantity}</Text>
            </View>

            <TouchableHighlight
              style={styles.buttonPlus}
              onPress={() => dispatch(addOneMore(product))}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableHighlight>

            <Text
              style={{
                color: '#010F07',
                fontSize: 16,
                marginLeft: 20,
                fontFamily: 'Avenir-Book',
                fontWeight: '700',
              }}>
              {' '}
              {product.price * product.quantity} р{' '}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  picture: {
    width: '30%',
    hight: 110,
    borderRadius: 8,
  },
  container: {
    width: '100%',
    marginVertical: 21,
    paddingHorizontal: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  header: {
    fontSize: 18,
    fontWeight: '800',
    color: '#010F07',
    marginTop: 10,
    fontFamily: 'Avenir-Book',
  },
  description: {
    fontSize: 16,
    color: '#010F07',
    marginTop: 10,
    alignItems: 'stretch',
    fontFamily: 'Avenir-Book',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    fontFamily: 'Avenir-Book',
  },
  descriptionArea: {
    width: '70%',
    flex: 1,
    marginLeft: 15,
    alignItems: 'center',
    //justifyContent: 'space-evenly'
  },
  buttonPlus: {
    height: 25,
    width: 35,
    backgroundColor: '#22A45D',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  buttonMinus: {
    height: 25,
    width: 25,
    backgroundColor: '#22A45D',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  counter: {
    height: 25,
    width: 20,
    backgroundColor: '#22A45D',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  pricearea: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
});
