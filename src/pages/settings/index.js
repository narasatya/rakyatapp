import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  LayoutAnimation,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { animasi } from '../animasi/animasi';

const Settings = () => {
  const [showContent, setShowContent] = useState(false);
  const animasiKlik = useRef(new Animated.Value(0)).current;

  const listItem = () => {
    const config = {
      duration: 300,
      toValue: showContent ? 0 : 1,
      useNativeDriver: true,
    };
    Animated.timing(animasiKlik, config).start();
    LayoutAnimation.configureNext(animasi);
    setShowContent(!showContent);
  };
  const arrowTransform = animasiKlik.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  });
  return (
    <View>
      <View style={styles.header}>
        <Image
          style={{width: 200, height: 35}}
          source={require('../../assets/img/logo-rakyat.png')}
        />
      </View>
      <View style={styles.body}>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: '#d1d5db',
            width: '100%',
            paddingTop: 10,
            overflow: 'hidden'
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{borderWidth: 0, paddingVertical: 10}}>
              <Text style={{color: '#14b8a6', fontWeight: '500', fontSize: 18}}>
                Profile
              </Text>
            </View>
            <TouchableOpacity
              style={{
                borderWidth: 0,
                justifyContent: 'center',
                backgroundColor: '#e5e7eb',
                paddingHorizontal: 10,
                borderRadius: 5,
                marginBottom: 5,
              }}
              onPress={() => listItem()}>
              <Animated.View style={{transform: [{rotateZ: arrowTransform}]}}>
                <Icon name="chevron-right" color={'#14b8a6'} size={15} />
              </Animated.View>
            </TouchableOpacity>
          </View>
          {showContent && (
            <View style={{flexDirection: 'row', marginBottom: 10}}>
              <Image
                source={require('../../assets/img/FotoNara.jpg')}
                style={{
                  width: 80,
                  height: 120,
                  borderRadius: 10,
                  marginRight: 20,
                }}
              />
              <View>
                <Text style={{fontSize: 24, color: 'black', fontWeight: '700'}}>
                  Nara Satya Anoraga
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    opacity: 0.8,
                    fontWeight: '400',
                  }}>
                  XII RPL B
                </Text>
                <Text style={{fontSize: 14, color: '#14b8a6', opacity: 0.6}}>
                  narasatya@smkn2-solo.net
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: 'black',
                    opacity: 0.8,
                    marginTop: 20,
                    fontStyle: 'italic',
                    fontWeight: '500',
                  }}>
                  " Semangat Sampai Kiamat "
                </Text>
              </View>
            </View>
          )}
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderColor: '#d1d5db',
            width: '100%',
            paddingTop: 10,
            overflow: 'hidden'
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{borderWidth: 0, paddingVertical: 10}}>
              <Text style={{color: '#14b8a6', fontWeight: '500', fontSize: 18}}>
                Tujuan
              </Text>
            </View>
            <TouchableOpacity
              style={{
                borderWidth: 0,
                justifyContent: 'center',
                backgroundColor: '#e5e7eb',
                paddingHorizontal: 10,
                borderRadius: 5,
                marginBottom: 5,
              }}
              onPress={() => listItem()}>
              <Animated.View style={{transform: [{rotateZ: arrowTransform}]}}>
                <Icon name="chevron-right" color={'#14b8a6'} size={15} />
              </Animated.View>
            </TouchableOpacity>
          </View>
          {showContent && (
            <View style={{flexDirection: 'column', marginBottom: 10}}>
                <Text style={{fontSize: 15, color: 'black', opacity: .5 }}>
                  Haloo...
                </Text>
                <Text style={{fontSize: 15, color: 'black', opacity: .5 }}>
                  Tujuan dibuatnya aplikasi RAKYAT ini adalah untuk mencatat penduduk Kota Surakarta dan Kabupaten Karanganyar yang sebagai uji coba saja dalam proses pengembangan android.
                </Text>
                <Text style={{fontSize: 15, color: 'black', opacity: .5 }}>
                  Sehingga masih banyak bug atau bagian yang belum selesai.
                </Text>
                <Text style={{fontSize: 15, color: 'black', opacity: .8 }}>
                  Terima kasih 🤩
                </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  body: {
    height: '100%',
    borderWidth: 0,
    backgroundColor: 'white',
    paddingHorizontal: 30,
    marginTop: 5,
    alignItems: 'center',
  },
});

export default Settings;
