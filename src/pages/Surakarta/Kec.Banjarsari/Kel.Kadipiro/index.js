import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class Kadipiro extends Component {
  state = {
    isLoading: true,
    dataSource: null,
    tableHead: ['Nama', 'Jenis Kelamin', 'Tanggal Lahir', 'Alamat'],
    data: [
      {
        nama: "Deni ",
        jk: "Laki-laki",
        lahir: "19 Juli 1994",
        duk_dus: "Jl. Gunungkawi No.21"
        },
        {
        nama: "Harnita",
        jk: "Perempuan",
        lahir: "28 September 2002",
        duk_dus: "Jl. Senapan Gg. Utomo No.2"
        }
    ]
  }
  render() {
    const n = this.state.data.map((val, key) => {
      return (
        <View key={key}>
          <View style={{ paddingVertical: 15 }}>
            <Text style={{ color: 'black', textAlign: 'center' }}>{val.nama}</Text>
          </View>
        </View>
      )
    })

    const j = this.state.data.map((val, key) => {
      return (
        <View key={key}>
          <Text style={{ color: 'black', textAlign: 'center' }}>{val.jk}</Text>
        </View>
      )
    })

    const l = this.state.data.map((val, key) => {
      return (
        <View key={key}>
          <Text style={{ color: 'black', textAlign: 'center' }}>{val.lahir}</Text>
        </View>
      )
    })

    const d = this.state.data.map((val, key) => {
      return (
        <View key={key}>
          <Text style={{ color: 'black', textAlign: 'center' }}>{val.duk_dus}</Text>
        </View>
      )
    })

    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.body} horizontal={true}>
          <View style={{ marginTop: '10%', marginHorizontal: 30 }}>
            <Table style={{ flexDirection: 'column' }}>
              <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text} />
              <Table borderStyle={{ borderWidth: 1 }} style={{ flexDirection: 'row', backgroundColor: '#e5e7eb', width: 500 }}>
                <TableWrapper style={{ flex: 1, flexDirection: 'row' }}>
                <Col
                  data={n}
                />
                <Col
                  data={j}
                />
                <Col
                  data={l}
                />
                <Col
                  data={d}
                />
                </TableWrapper>
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
  head: { height: 40, backgroundColor: '#2dd4bf', borderWidth: 2, borderBottomWidth: .5, borderTopStartRadius: 20, borderTopEndRadius: 20, flexDirection: 'row' },
  text: { color: 'black', fontWeight: 'bold', paddingLeft: 38 },
  item: { flexDirection: 'row' },
})