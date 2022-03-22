import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const ButtonMenu = ({onPress, text}) => {
  return (
    <View style={styles.buttomMenu_View}>
      <TouchableOpacity
        style={styles.buttonMenu_TouchableHighlight}
        onPress={onPress}>
        <Text style={styles.buttonMenu_Text}>{text} руб.</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttomMenu_View: {
    alignItems: 'center',
  },
  buttonMenu_Text: {
    fontSize: 18,
    fontWeight: '300',
    color: 'white',
    fontFamily: 'Avenir-Book',
  },
  buttonMenu_TouchableHighlight: {
    height: 35,
    width: 155,
    backgroundColor: '#22A45D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default ButtonMenu;
