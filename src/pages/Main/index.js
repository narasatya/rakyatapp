import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';

const Main = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          {/* <Icon name="bars" size={20} color="black" solid /> */}
          <Image
            style={{ width: 200, height: 35 }}
            source={require('../../assets/img/logo-rakyat.png')}
          />
          {/* <Icon name="ellipsis-v" size={20} color="black" solid /> */}
        </View>
      </View>
      <View style={styles.container}>
        <Text style={{ color: 'black' }}>Body</Text>
      </View>
      <View style={styles.container}>
        <Text style={{ color: 'black' }}>Footer</Text>
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
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Main;