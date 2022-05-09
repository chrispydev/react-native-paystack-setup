import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import 'react-native-gesture-handler';
import reducer, { initialState } from './provider/reducer';
import { StateProvider, useStateValue } from './provider/StateProvider';
import Wrapper from './Wrapper';

const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Wrapper />
    </StateProvider>
  );
};

export default App;
