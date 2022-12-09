import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class Colomadu extends Component {
  state = {
    isLoading: true,
    dataSource: null,
    tableHead: ['Kelurahan', 'Jumlah Warga'],
    data: [
      {
        des_kel: "Baturan",
        jumlahWarga: 1
      },
      {
        des_kel: "Blulukan",
        jumlahWarga: 1
      },
      {
        des_kel: "Bolon",
        jumlahWarga: 1
      },
      {
        des_kel: "Gajahan",
        jumlahWarga: 1
      },
      {
        des_kel: "Gawanan",
        jumlahWarga: 1
      },
      {
        des_kel: "Klodran",
        jumlahWarga: 1
      },
      {
        des_kel: "Malangjiwan",
        jumlahWarga: 1
      },
      {
        des_kel: "Ngasem",
        jumlahWarga: 1
      },
      {
        des_kel: "Paulan",
        jumlahWarga: 1
      },
      {
        des_kel: "Tohudan",
        jumlahWarga: 1
      }
    ]
  }
  render() {
    const dataKel = this.state.data.map((val, key) => {
      return (
        <View key={key}>
          <TouchableOpacity onPress={() => {
            if (val.des_kel === "Baturan") {
              this.props.navigation.navigate('Kel.Baturan')
            } else {
              alert('Sabar yaa, masih dalam tahap pengembangan 😁')
            }
          }}>
            <View style={{ paddingVertical: 15 }}>
              <Text style={{ color: 'black', textAlign: 'center' }}>{val.des_kel}</Text>
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
        <ScrollView style={styles.body}>
          <View style={{ marginTop: '30%', marginHorizontal: 30 }}>
            <Table>
              <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text} />
              <Table borderStyle={{ borderWidth: 1 }} style={{ flexDirection: 'row', backgroundColor: '#e5e7eb' }}>
                <Col
                  data={dataKel}
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
  body: { backgroundColor: 'white', flex: 1, marginTop: 1 },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', },
  table: { borderWidth: 1, borderColor: 'black' },
  head: { height: 40, backgroundColor: '#2dd4bf', borderWidth: 2, borderBottomWidth: .5, borderTopStartRadius: 20, borderTopEndRadius: 20 },
  text: { textAlign: 'center', color: 'black' },
  item: { flexDirection: 'row' },
})