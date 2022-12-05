import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class Surakarta extends Component {
  state = {
    isLoading: true,
    dataSource: null,
    tableHead: ['Kecamatan', 'Jumlah Warga'],
    data: [
      {
        kec: "Colomadu",
        jumlahWarga: 10
      },
      {
        kec: "Gondangrejo",
        jumlahWarga: 10
      },
      {
        kec: "Jaten",
        jumlahWarga: 4
      },
      {
        kec: "Jatipuro",
        jumlahWarga: 2
      },
      {
        kec: "Jatiyoso",
        jumlahWarga: 1
      },
      {
        kec: "Karanganyar",
        jumlahWarga: 2
      },
      {
        kec: "Kebakkramat",
        jumlahWarga: 2
      },
      {
        kec: "Matesih",
        jumlahWarga: 1
      }
    ]
  }
  render() {
    const dataKec = this.state.data.map((val, key) => {
      return (
        <View key={key}>
          <TouchableOpacity>
            <View style={{ paddingVertical: 15 }}>
              <Text style={{ color: 'black', textAlign: 'center' }}>{val.kec}</Text>
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
                  data={dataKec}
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