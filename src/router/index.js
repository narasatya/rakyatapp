import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash, Main, Settings, Surakarta, Karanganyar, Banjarsari, Banyuanyar, Jebres, Laweyan, PasarKliwon, Serengan } from '../pages';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} /> */}
      <Stack.Screen name='Tab1' component={Tab1} options={{ headerShown: false }} />      
      <Stack.Screen name='Surakarta' component={Surakarta} />
      <Stack.Screen name='Karanganyar' component={Karanganyar} />
      <Stack.Screen name='Kec.Banjarsari' component={Banjarsari} />
      <Stack.Screen name='Kec.Jebres' component={Jebres} />
      <Stack.Screen name='Kec.Laweyan' component={Laweyan} />
      <Stack.Screen name='Kec.PasarKliwon' component={PasarKliwon} />
      <Stack.Screen name='Kec.Serengan' component={Serengan} />
      <Stack.Screen name='Kel.Banyuanyar' component={Banyuanyar} />
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