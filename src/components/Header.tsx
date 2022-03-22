import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
// import {IconOutline} from '@ant-design/icons-react-native';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../../assets/back.svg';

interface IProps {
  title: string;
}

export default function Header({title}: IProps) {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackIcon width={30} height={30} />
      </TouchableOpacity>
      <Text style={styles.headerText}> {title} </Text>
      <View style={{width: 30, height: 30}} />
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
