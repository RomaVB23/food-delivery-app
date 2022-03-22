import React from 'react';
import {StyleSheet, Text} from 'react-native';

const TextCategories = ({text}) => {
  return <Text style={styles.textStyle}>{text}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontWeight: '900',
    fontFamily: 'Avenir-Book',
  },
});

export default TextCategories;
