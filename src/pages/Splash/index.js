import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Tab1');
    }, 3000)
  })
  return (
    <View style={styles.utama}>
      <Image
        style={styles.image}
        source={require('../../assets/img/logo-rakyat.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  utama: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 400,
  },
});

export default Splash;