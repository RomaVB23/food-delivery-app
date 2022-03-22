import React, {useMemo} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TextInput,
  FlatList,
  View,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {changeAddress, changeName, changePhone} from '../reducers/userReducer';
//
import {emptyCart} from '../reducers/basketReducer';
//
import TitleInput from '../components/TitleInput';
import ButtonBusket from '../components/ButtomBusket';
import ItemInBasket from '../components/ItemInBasket';
import HeaderBusket from '../components/HeaderBusket';

const Busket = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.user.name);
  const phone = useSelector(state => state.user.phone);
  const address = useSelector(state => state.user.address);
  const products = useSelector(state => state.cart.products);

  const getProductsCost = products => {
    let allCost = 0;
    products.forEach(product => {
      allCost += product.price * product.quantity;
    });
    return allCost;
  };

  const busketSum = useMemo(() => getProductsCost(products), [products]);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBusket title="Корзина" />

      <FlatList
        data={products}
        renderItem={({item}) => {
          return <ItemInBasket product={item} />;
        }}
        ListFooterComponent={
          <>
            <View style={styles.inputContainer}>
              <TitleInput text="имя пользователя" />
              <TextInput
                style={styles.input}
                onChangeText={text => dispatch(changeName(text))}
                value={name}
                placeholder=" например: Иван Иванов"
              />

              <TitleInput text="номер телефона" />
              <TextInput
                style={styles.input}
                onChangeText={text => dispatch(changePhone(text))}
                value={phone}
                placeholder=" например: +7 900 123 45 67"
                keyboardType="phone-pad"
              />

              <TitleInput text="адрес доставки" />
              <TextInput
                style={styles.input}
                onChangeText={text => dispatch(changeAddress(text))}
                value={address}
                placeholder=" например: ул.Красносельская д.1 кв.2"
              />
            </View>
            <ButtonBusket
              style={{marginTop: 20}}
              // onPress={() => dispatch(emptyCart())}
              text={busketSum}
            />
          </>
        }
        // numColumns={2}
        // columnWrapperStyle={styles.columnWrapperStyle}
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
  inputContainer: {
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#F3F2F2',
    fontSize: 16,
    marginTop: 8,
    marginBottom: 24,
    marginHorizontal: 15,
    fontFamily: 'Avenir-Book',
    fontWeight: '400',
  },
});

export default Busket;
