import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../../assets/back.svg';
import {useDispatch} from 'react-redux';
//
import {emptyCart} from '../reducers/basketReducer';
interface IProps {
  title: string;
}

export default function HeaderBusket({title}: IProps) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackIcon width={30} height={30} />
      </TouchableOpacity>
      <Text style={styles.headerText}> {title} </Text>
      <TouchableOpacity onPress={() => dispatch(emptyCart())}>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            fontWeight: '400',
            fontFamily: 'Avenir-Book',
          }}>
          Очистить
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerText: {
    fontSize: 20,
    fontWeight: '800',
    color: 'black',
    fontFamily: 'Avenir-Book',
  },
});
