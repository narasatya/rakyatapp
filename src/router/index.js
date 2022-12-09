import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash, Main, Settings, Surakarta, Karanganyar, Banjarsari, Banyuanyar, Jebres, Laweyan, PasarKliwon, Serengan, Colomadu, Gondangrejo, Jaten, Jatipuro, Jatiyoso, karanganyar, Kebakkramat, Matesih, Baturan, Gilingan, Kadipiro, Keprabon, Jagalan, jebres, KepatihanKulon } from '../pages';

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
      <Stack.Screen name='Kel.Jagalan' component={Jagalan} />
      <Stack.Screen name='Kel.Jebres' component={jebres} />
      <Stack.Screen name='Kel.KepatihanKulon' component={KepatihanKulon} />
      <Stack.Screen name='Kec.Laweyan' component={Laweyan} />
      <Stack.Screen name='Kec.PasarKliwon' component={PasarKliwon} />
      <Stack.Screen name='Kec.Serengan' component={Serengan} />
      <Stack.Screen name='Kel.Banyuanyar' component={Banyuanyar} />
      <Stack.Screen name='Kel.Gilingan' component={Gilingan} />
      <Stack.Screen name='Kel.Kadipiro' component={Kadipiro} />
      <Stack.Screen name='Kel.Keprabon' component={Keprabon} />
      <Stack.Screen name='Kec.Colomadu' component={Colomadu} />
      <Stack.Screen name='Kec.Gondangrejo' component={Gondangrejo} />
      <Stack.Screen name='Kec.Jaten' component={Jaten} />
      <Stack.Screen name='Kec.Jatipuro' component={Jatipuro} />
      <Stack.Screen name='Kec.Jatiyoso' component={Jatiyoso} />
      <Stack.Screen name='Kec.Karanganyar' component={karanganyar} />
      <Stack.Screen name='Kec.Kebakkramat' component={Kebakkramat} />
      <Stack.Screen name='Kec.Matesih' component={Matesih} />
      <Stack.Screen name='Kel.Baturan' component={Baturan} />
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