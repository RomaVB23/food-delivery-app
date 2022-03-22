import React from 'react';
import {StyleSheet, Text} from 'react-native';

const TitleInput = ({text}) => {
  return <Text style={styles.textStyle}>{text}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 12,
    // color: '#868686',
    color: "#22A45D",
    fontWeight: '700',
    textTransform: 'uppercase',
    marginHorizontal: 18,
    fontFamily: 'Avenir-Book',
  },
});

export default TitleInput;
