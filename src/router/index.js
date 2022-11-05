import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Main, Splash } from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Splash' component={Splash} />
      <Stack.Screen name='Main' component={Main} />
    </Stack.Navigator>
  );
};

export default Router;