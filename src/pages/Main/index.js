import React, { useState, useEffect, Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Surakarta from '../Surakarta';
import Karanganyar from '../Karanganyar';
// import Animated from 'react-native-reanimated';
// import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Main extends Component {
  state = {
    isLoading: true,
    dataSource: null,
    tableHead: ['Kabupaten/Kota', 'Jumlah Warga'],
    data: [
      {
        kab_kota: "SURAKARTA",
        jumlahWarga: 37
      },
      {
        kab_kota: "KARANGANYAR",
        jumlahWarga: 32
      }
    ]
  }
  render() {
    const dataKota = this.state.data.map((val, key) => {
      return (
        <View key={key}>
          <TouchableOpacity onPress={() => {
            if (val.kab_kota === "SURAKARTA") {
              this.props.navigation.navigate('Surakarta')
            } else {
              this.props.navigation.navigate('Karanganyar')
            }
          }}>
            <View style={{ paddingVertical: 15 }}>
              <Text style={{ color: 'black', textAlign: 'center' }}>{val.kab_kota}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    })

    const dataWarga = this.state.data.map((val, key) => {
      return (
        <View key={key}>
          <Text style={{ color: 'black', textAlign: 'center' }}>{val.jumlahWarga} Orang</Text>
        </View>
      )
    })
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <Image
            style={{ width: 200, height: 35 }}
            source={require('../../assets/img/logo-rakyat.png')}
          />
        </View>
        <ScrollView style={styles.body}>
          <View style={{ marginTop: '30%', marginHorizontal: 30 }}>
            <Table>
              <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text} />
              <Table borderStyle={{ borderWidth: 1 }} style={{ flexDirection: 'row', backgroundColor: '#e5e7eb' }}>
                <Col
                  data={dataKota}
                />
                <Col
                  data={dataWarga}
                />
              </Table>
            </Table>
          </View>
        </ScrollView>
      </View>
    )

  }
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  body: { backgroundColor: 'white', flex: 1, marginTop: 1 },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', },
  table: { borderWidth: 1, borderColor: 'black' },
  head: { height: 40, backgroundColor: '#2dd4bf', borderWidth: 2, borderBottomWidth: .5, borderTopStartRadius: 20, borderTopEndRadius: 20 },
  text: { textAlign: 'center', color: 'black' },
  item: { flexDirection: 'row' },
});