import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import reducer, { initialState } from './provider/reducer';
import { StateProvider, useStateValue } from './provider/StateProvider';
import BottomNavigator from './views/navigation/BottomNavigator';
import DetailsScreen from './views/screens/DetailsScreen';
import OnBoardScreen from './views/screens/OnBoardScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PaymentScreen from './views/screens/PaymentsScreen';
import HomeScreen from './views/screens/HomeScreen';

const Stack = createNativeStackNavigator();
export default function Wrapper() {
  const [{ basket }] = useStateValue();

  useEffect(() => {
    const _retrieveData = async () => {
      try {
        const jsonValue = JSON.stringify(basket);
        const value = await AsyncStorage.setItem('basket', jsonValue);
        console.log(`This ${jsonValue}`);
      } catch (error) {
        console.log(error);
      }
    };

    return () => {
      _retrieveData;
    };
  }, [basket]);

  return (
    <NavigationContainer>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='BoardScreen' component={OnBoardScreen} />
          <Stack.Screen name='HomeScreen' component={HomeScreen} />
          <Stack.Screen name='Home' component={BottomNavigator} />
          <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
          <Stack.Screen name='payment' component={PaymentScreen} />
        </Stack.Navigator>
      </StateProvider>
    </NavigationContainer>
  );
}
