import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, FlatList } from 'react-native';
import Animated from 'react-native-reanimated';
const { Value } = Animated;
// import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Main() {
  const [data, setData] = useState([])

  const getDataFromApiAsync = async () => {
    try {
      let response = await fetch('http://192.168.42.56:3000/dataWargaKabKota')
      let json = await response.json()
      setData(json.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getDataFromApiAsync()
  }, [])

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text style={{ color: 'black' }} >{item.kab_kota} : {item.jumlahWarga} Orang</Text>
      </View>
    )
  }

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Image
          style={{ width: 200, height: 35 }}
          source={require('../../assets/img/logo-rakyat.png')}
        />
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id_warga}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
});