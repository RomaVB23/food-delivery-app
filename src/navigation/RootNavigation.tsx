import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens
import Basket from '../screens/Busket';
import Categories from '../screens/Categories';
import Menu from '../screens/Menu';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        options={{headerShown: false}}
        component={Categories}
      />
      <Stack.Screen
        name="Menu"
        options={{headerShown: false}}
        component={Menu}
      />
    </Stack.Navigator>
  );
};

export default function RootNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Меню"
        options={{
          headerShown: false,
          tabBarIconStyle: {display: 'none'},
          tabBarLabelStyle: {
            fontWeight: '900',
            fontSize: 16,
            fontFamily: 'Avenir-Book',
          },
        }}
        component={StackNavigator}
      />
      <Tab.Screen
        name="Корзина"
        options={{
          headerShown: false,
          tabBarIconStyle: {display: 'none'},
          tabBarLabelStyle: {
            fontWeight: '900',
            fontSize: 16,
            fontFamily: 'Avenir-Book',
          },
        }}
        component={Basket}
      />
    </Tab.Navigator>
  );
}
