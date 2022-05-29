import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
// import { View } from 'react-native';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import CartScreen from '../screens/CartScreen';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        showLabel: false,
        headerShown: false,
        activeTintColor: COLORS.primary,
      }}
    >
      <Tab.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name='home-filled' color={color} size={28} />
          ),
        }}
      />

      <Tab.Screen
        name='Cart'
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name='shopping-cart' color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
