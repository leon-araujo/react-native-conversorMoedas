import React ,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import EuroCot from '../services/CotEuro';

export default function Euro() {
  const [inputReal, setInputReal] = useState();
  const [euro, setEuro] = useState();
  const [result, setResult] = useState();

  EuroCot.getValue().then(v => {
    setEuro(parseFloat(v.bid).toFixed(2));
  });

  useEffect(() => {
    if (inputReal === "" || isNaN(inputReal)) {
      setResult('€ 0.00');
    }
  }, [inputReal])

  function convert() {
    if (inputReal == 0 || inputReal == '' || inputReal == null) {
      alert('É preciso informar o valor em real!');
    }
    if (inputReal != 0 || inputReal != '' || inputReal != null ) {
      setResult('€ ' + (parseFloat(inputReal).toFixed(2) * euro).toFixed(2));
;    }
  }

  const convertSymbol = <Ionicons style={{marginLeft: 8, marginRight: 5}} name='md-swap-vertical-outline' size={25} color={'#5F6BC3'}/> ;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.containerCotEuro}>
          <Text style={styles.containerCotEuroText}>Cotação do Atual do Euro</Text>
          <Text style={styles.containerCotEuroText}>€ {euro}</Text>
        </View>
        <View style={styles.boxPrinpal}>
          <TextInput
          keyboardType="numeric"
          style={styles.InputEuro}
          placeholder='Digite o valor em R$ Real'
          value={inputReal}
          onChangeText={n => setInputReal(n)}
          onPressIn={() => setInputReal(0)}
          ></TextInput>
          <View style={styles.containerBtn}>
            <TouchableOpacity onPress={convert}><Text style={styles.TextBtn}>{convertSymbol} Converter</Text></TouchableOpacity>
          </View>
          <Text style={styles.result}>{result}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', 
  },
  boxPrinpal: {
    backgroundColor: '#5F6BC3',
    paddingTop: 30,
    paddingBottom: 30,
    width: '90%',
    borderRadius: 15,
    alignItems: 'center',
  },
  InputEuro: {
    backgroundColor: '#ddd',
    color: '#000',
    padding: 5,
    borderRadius: 15,
    width: 270,
    textAlign: 'center',
    fontSize: 20,
    height: 50
  },
  result: {
    backgroundColor: '#ddd',
    color: '#414656',
    padding: 5,
    borderRadius: 15,
    width: 270,
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 40,
    fontWeight: 'bold'
  },
  containerBtn: {
    marginTop: 35,
    marginBottom: 35 
  },
  TextBtn: {
    backgroundColor: '#E4F0FF',
    color: '#5F6BC3',
    padding: 5,
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 25,
    width: 150,
    textAlign: 'center',
    lineHeight: 35
  },
  containerCotEuro: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40
  },
  containerCotEuroText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#8DA2D7'
  }
});
