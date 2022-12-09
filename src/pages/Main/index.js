import React, {useState, useEffect, Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {DataTable} from 'react-native-paper';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';
import Surakarta from '../Surakarta';
import Karanganyar from '../Karanganyar';
// import Animated from 'react-native-reanimated';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import MapView, {Circle, PROVIDER_GOOGLE} from 'react-native-maps';

export default class Main extends Component {
  state = {
    isLoading: true,
    dataSource: null,
    tableHead: ['Kabupaten/Kota', 'Jumlah Warga'],
    data: [
      {
        kab_kota: 'SURAKARTA',
        jumlahWarga: 37,
      },
      {
        kab_kota: 'KARANGANYAR',
        jumlahWarga: 32,
      },
    ],
  };
  _setBounding = async () => {
    this._map.setMapBoundaries({
      northEast: {
        latitude: -7.539451,
        longitude: 110.9219,
      },
      southWest: {
        latitude: -7.57028,
        longitude: 110.762182,
      },
    });
  };
  render() {
    const dataKota = this.state.data.map((val, key) => {
      return (
        <View key={key}>
          <TouchableOpacity
            onPress={() => {
              if (val.kab_kota === 'SURAKARTA') {
                this.props.navigation.navigate('Surakarta');
              } else {
                this.props.navigation.navigate('Karanganyar');
              }
            }}>
            <View style={{paddingVertical: 15}}>
              <Text style={{color: 'black', textAlign: 'center'}}>
                {val.kab_kota}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    });

    const dataWarga = this.state.data.map((val, key) => {
      return (
        <View key={key}>
          <Text style={{color: 'black', textAlign: 'center'}}>
            {val.jumlahWarga} Orang
          </Text>
        </View>
      );
    });
    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <Image
            style={{width: 200, height: 35}}
            source={require('../../assets/img/logo-rakyat.png')}
          />
        </View>
        <ScrollView
          style={{height: '100%'}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.data}>
            <View
              style={{
                marginVertical: '10%',
                marginHorizontal: 30,
                borderWidth: 0,
              }}>
              <View style={{marginBottom: 5}}>
                <Text
                  style={{color: '#14b8a6', fontSize: 30, fontWeight: 'bold'}}>
                  DATA WILAYAH
                </Text>
              </View>
              <Table>
                <Row
                  data={this.state.tableHead}
                  style={styles.head}
                  textStyle={styles.text}
                />
                <Table
                  borderStyle={{borderWidth: 1}}
                  style={{flexDirection: 'row', backgroundColor: '#e5e7eb'}}>
                  <Col data={dataKota} />
                  <Col data={dataWarga} />
                </Table>
              </Table>
            </View>
            <View
              style={{
                borderWidth: 0,
                height: 500,
                marginHorizontal: 30,
                marginBottom: '10%',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
              <Text
                style={{color: '#14b8a6', fontSize: 30, fontWeight: 'bold'}}>
                EDU RAKYAT
              </Text>
              <View
                style={{
                  borderWidth: 0,
                  flexDirection: 'column',
                  marginBottom: 5,
                  padding: 8,
                  justifyContent: 'center',
                }}>
                <View style={{flexDirection: 'row', marginBottom: 5}}>
                  <TouchableOpacity
                    style={{
                      width: '50%',
                      height: 130,
                      backgroundColor: '#e2e8f0',
                      marginRight: 5,
                      borderTopLeftRadius: 120,
                      borderBottomRightRadius: 20,
                      flexDirection: 'column',
                      alignContent: 'center',
                      justifyContent: 'flex-end',
                      alignItems: 'flex-end',
                    }}
                    onPress={() => {
                      alert('COMING SOON, akan diisi artikel edukasi 😁');
                    }}>
                    <Image
                      source={require('../../assets/img/satu.png')}
                      style={{width: '75%', height: '75%', resizeMode: 'cover'}}
                    />
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: '400',
                        fontSize: 20,
                        marginTop: 5,
                        backgroundColor: '#5eead4',
                        borderRadius: 10,
                        width: '60%',
                      }}>
                      Keluarga
                    </Text>
                    <View style={{borderWidth: 0}}>
                      {/* <View style={{ borderRadius: 5, alignItems: 'center', width: '90%' }}>
                    </View> */}
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: '50%',
                      height: 130,
                      backgroundColor: '#e2e8f0',
                      borderTopRightRadius: 120,
                      borderBottomLeftRadius: 20,
                      flexDirection: 'column',
                      alignContent: 'center',
                      justifyContent: 'flex-end',
                      alignItems: 'flex-start',
                    }}
                    onPress={() => {
                      alert('COMING SOON, akan diisi artikel edukasi 😁');
                    }}>
                    <Image
                      source={require('../../assets/img/dua.png')}
                      style={{width: '75%', height: '75%', resizeMode: 'cover'}}
                    />
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: '400',
                        fontSize: 20,
                        backgroundColor: '#5eead4',
                        width: '50%',
                        borderRadius: 10,
                        marginTop: 5,
                      }}>
                      Remaja
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    style={{
                      width: '50%',
                      height: 130,
                      backgroundColor: '#e2e8f0',
                      marginRight: 5,
                      borderBottomLeftRadius: 120,
                      borderTopRightRadius: 20,
                      flexDirection: 'column',
                      alignContent: 'center',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-end',
                    }}
                    onPress={() => {
                      alert('COMING SOON, akan diisi artikel edukasi 😁');
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: '400',
                        fontSize: 20,
                        backgroundColor: '#5eead4',
                        width: '60%',
                        borderRadius: 10,
                        marginBottom: 3,
                        marginLeft: '50%',
                      }}>
                      Dewasa
                    </Text>
                    <Image
                      source={require('../../assets/img/tiga.png')}
                      style={{
                        width: '90%',
                        height: '75%',
                        resizeMode: 'cover',
                        justifyContent: 'flex-start',
                        marginLeft: '25%',
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: '50%',
                      height: 130,
                      backgroundColor: '#e2e8f0',
                      borderBottomRightRadius: 120,
                      borderTopLeftRadius: 20,
                      borderWidth: 0,
                    }}
                    onPress={() => {
                      alert('COMING SOON, akan diisi artikel edukasi 😁');
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: '400',
                        fontSize: 20,
                        backgroundColor: '#5eead4',
                        width: '50%',
                        borderRadius: 10,
                        marginBottom: 3,
                      }}>
                      Lansia
                    </Text>
                    <Image
                      source={require('../../assets/img/lansia.png')}
                      style={{
                        width: '85%',
                        height: '75%',
                        resizeMode: 'cover',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  data: {
    backgroundColor: 'white',
    marginTop: 5,
    marginHorizontal: 5,
    paddingBottom: 5,
  },
  table: {borderWidth: 1, borderColor: 'black'},
  head: {
    height: 40,
    backgroundColor: '#2dd4bf',
    borderWidth: 2,
    borderBottomWidth: 0.5,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  text: {textAlign: 'center', color: 'black'},
  item: {flexDirection: 'row'},
});
