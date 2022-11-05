import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash, Kabupaten, Kecamatan, Kelurahan, Dusun, Main } from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name='Main' component={Main} options={{ headerShown: false }} />
      <Stack.Screen name='Kabupaten' component={Kabupaten} />
      <Stack.Screen name='Kecamatan' component={Kecamatan} />
      <Stack.Screen name='Kelurahan' component={Kelurahan} />
      <Stack.Screen name='Dusun' component={Dusun} />
    </Stack.Navigator>
  );
};

export default Router;