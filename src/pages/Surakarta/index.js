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
        kec: "Banjarsari",
        jumlahWarga: 20
      },
      {
        kec: "Jebres",
        jumlahWarga: 10
      },
      {
        kec: "Laweyan",
        jumlahWarga: 3
      },
      {
        kec: "Pasar Kliwon",
        jumlahWarga: 2
      },
      {
        kec: "Serengan",
        jumlahWarga: 2
      }
    ]
  }
  render() {
    const dataKec = this.state.data.map((val, key) => {
      return (
        <View key={key}>
          <TouchableOpacity onPress={() => {
            if (val.kec === "Banjarsari") {
              this.props.navigation.navigate('Kec.Banjarsari')
            } else if (val.kec === "Jebres") {
              this.props.navigation.navigate('Kec.Jebres')
            } else if (val.kec === "Laweyan") {
              this.props.navigation.navigate('Kec.Laweyan')
            } else if (val.kec === "Pasar Kliwon") {
              this.props.navigation.navigate('Kec.PasarKliwon')
            } else if (val.kec === "Serengan") {
              this.props.navigation.navigate('Kec.Serengan')
            }
          }}>
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
        <View style={{ marginHorizontal: 30 }}>
          <Text style={{ color: 'black', opacity: .6 }}>Catatan pengembang: Hanya Kecamatan Banjarsari dan Jebres saja yang sebagai uji coba.</Text>
          </View>
          <View style={{ marginVertical: '20%', marginHorizontal: 30 }}>
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