import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Settings = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={{ width: 200, height: 35 }}
            source={require('../../assets/img/logo-rakyat.png')}
          />
        </View>
      </View>
      <View style={styles.container}>
        <Text style={{ color: 'black' }}>Halaman Settings ...</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 1,
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Settings;