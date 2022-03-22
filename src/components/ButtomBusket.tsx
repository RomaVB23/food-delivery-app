import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import IconAnimated from './IconAnimated';
import {emptyCart} from '../reducers/basketReducer';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';

const ButtonBusket = ({text, style}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const products = useSelector(state => state.cart.products);
  const p = products.map(
    product => `\n   ${product.name} \n   кол-во: ${product.quantity}\n`,
  );
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={[styles.centeredView, style]}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalBlock}>
          <View style={styles.modalView}>
            <IconAnimated style={styles.svg} />
            <Text style={styles.modalTitle}>Спасибо за Ваш заказ</Text>
            <Text style={styles.modalText}>
              Но на данный момент это техническая демка{'\n'}
              Если вы хотите свзаться со мной{'\n'}
              То еще раз напишите в меню корзины:{'\n'}
              Где адрес достаки - "связь"  {'\n'}
              Где номер телефона, ваш телеграм аккаунт{'\n'}{'\n'}
              И я вам обязательно отвечу</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textCloseButton}>Закрыть окно</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => {
          if (products.length > 0)
            axios.post(
              `https://v1.nocodeapi.com/romavb/telegram/QtjsrGxajiPLjVMl`,
              {
                Кому: user.name,
                Телефон: user.phone,
                Адрес: user.address,
                Заказ: p.join(','),
                'Сумма заказа': text,
              },
            );
          dispatch(emptyCart());
        }}
        onPressIn={() => {
          if (products.length > 0) setModalVisible(true);
        }}>
        <Text style={styles.textStyle}>
          Оформить заказ{'\n'} На сумму: {text} руб.
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    alignItems: 'center',
  },
  modalBlock: {
    marginTop: 120,
    position: 'relative',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 8,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#22A45D',
    paddingHorizontal: 50,
    paddingVertical: 10,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 20,
  },
  modalTitle: {
    marginBottom: 24,
    textAlign: 'center',
    fontSize: 20,
  },
  modalText: {
    marginBottom: 30,
    textAlign: 'center',
    color: '#868686',
    fontSize: 16,
  },
  textCloseButton: {
    // color: '#22A45D',
    color: '#ffffff',
    fontSize: 16,
  },
  svg: {
    position: 'absolute',
    top: -45,
  },
  buttonClose: {
    backgroundColor: '#22A45D',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
});

export default ButtonBusket;
