import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash, Kecamatan, Kelurahan, Dusun, Main, Settings } from '../pages';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name='Tab1' component={Tab1} options={{ headerShown: false }} />      
      <Stack.Screen name='Kecamatan' component={Kecamatan} />
      <Stack.Screen name='Kelurahan' component={Kelurahan} />
      <Stack.Screen name='Dusun' component={Dusun} />
    </Stack.Navigator>
  );
};

export default Router;

export function Tab1() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={Main} options={{
        headerShown: false,
        tabBarLabel: '',
        tabBarIcon: ({ color }) => (
          <Icon name="home" color={color} size={25} />
        ),
        tabBarActiveTintColor: '#2dd4bf',
      }} />
      <Tab.Screen name="Settings" component={Settings} options={{
        headerShown: false,
        tabBarLabel: '',
        tabBarIcon: ({ color }) => (
          <Icon name="cog" color={color} size={25} />
        ),
        tabBarActiveTintColor: '#2dd4bf',
      }} />
    </Tab.Navigator>
  )
}