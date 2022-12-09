import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class Banjarsari extends Component {
  state = {
    isLoading: true,
    dataSource: null,
    tableHead: ['Kelurahan', 'Jumlah Warga'],
    data: [
      {
        des_kel: "Banyuanyar",
        jumlahWarga: 2
      },
      {
        des_kel: "Gilingan",
        jumlahWarga: 2
      },
      {
        des_kel: "Kadipiro",
        jumlahWarga: 2
      },
      {
        des_kel: "Keprabon",
        jumlahWarga: 2
      },
      {
        des_kel: "Kestalan",
        jumlahWarga: 2
      },
      {
        des_kel: "Ketelan",
        jumlahWarga: 2
      },
      {
        des_kel: "Manahan",
        jumlahWarga: 2
      },
      {
        des_kel: "Mangkubumen",
        jumlahWarga: 1
      },
      {
        des_kel: "Nusukan",
        jumlahWarga: 1
      },
      {
        des_kel: "Punggawan",
        jumlahWarga: 1
      },
      {
        des_kel: "Setabelan",
        jumlahWarga: 1
      },
      {
        des_kel: "Sumber",
        jumlahWarga: 1
      },
      {
        des_kel: "Timuran",
        jumlahWarga: 1
      }
    ]
  }
  render() {
    const dataKel = this.state.data.map((val, key) => {
      return (
        <View key={key}>
          <TouchableOpacity onPress={() => {
            if (val.des_kel === "Banyuanyar") {
              this.props.navigation.navigate('Kel.Banyuanyar')
            } else if (val.des_kel === "Gilingan") {
              this.props.navigation.navigate('Kel.Gilingan')
            } else if (val.des_kel === "Kadipiro") {
              this.props.navigation.navigate('Kel.Kadipiro')
            }
             else if (val.des_kel === "Keprabon") {
              this.props.navigation.navigate('Kel.Keprabon')
            } else {
              alert('Sabar yaa, masih dalam tahap pengembangan 😁')
            }
            //  else if (val.des_kel === "Kestalan") {
            //   this.props.navigation.navigate('Kel.Kestalan')
            // }
            //  else if (val.des_kel === "Ketelan") {
            //   this.props.navigation.navigate('Kel.Ketelan')
            // }
            //  else if (val.des_kel === "Manahan") {
            //   this.props.navigation.navigate('Kel.Manahan')
            // }
            //  else if (val.des_kel === "Mangkubumen") {
            //   this.props.navigation.navigate('Kel.Mangkubumen')
            // }
            //  else if (val.des_kel === "Nusukan") {
            //   this.props.navigation.navigate('Kel.Nusukan')
            // }
            //  else if (val.des_kel === "Punggawan") {
            //   this.props.navigation.navigate('Kel.Punggawan')
            // }
            //  else if (val.des_kel === "Setabelan") {
            //   this.props.navigation.navigate('Kel.Setabelan')
            // }
            //  else if (val.des_kel === "Sumber") {
            //   this.props.navigation.navigate('Kel.Sumber')
            // }
            //  else if (val.des_kel === "Timuran") {
            //   this.props.navigation.navigate('Kel.Timuran')
            // }
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
          <View style={{ marginHorizontal: 30 }}>
          <Text style={{ color: 'black', opacity: .6 }}>Catatan pengembang: Hanya Kelurahan Banyuanyar, Gilingan, Kadipiro, dan Keprabon saja yang sebagai uji coba.</Text>
          </View>
          <View style={{ marginVertical: '20%', marginHorizontal: 30 }}>
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