import React ,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import DolarCot from '../services/CotDolar';


export default function Dolar() {
  const [inputReal, setInputReal] = useState();
  const [dolar, setDolar] = useState();
  const [result, setResult] = useState();

  DolarCot.getValue().then(v => {
    setDolar(parseFloat(v.bid).toFixed(2));
  });

  useEffect(() => {
    if (inputReal === "" || isNaN(inputReal)) {
      setResult('US$ 0.00');
    }
  }, [inputReal])

  function convert() {
    if (inputReal == 0 || inputReal == '' || inputReal == null) {
      alert('É preciso informar o valor em real!');
    }
    if (inputReal != 0 || inputReal != '' || inputReal != null ) {
      setResult('US$ ' + (parseFloat(inputReal).toFixed(2) * dolar).toFixed(2));
    }
  }

  const convertSymbol = <Ionicons style={{marginLeft: 8, marginRight: 5}} name='md-swap-vertical-outline' size={25} color={'#5F6BC3'}/> ;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.containerCotDolar}>
          <Text style={styles.containerCotDolarText}>Cotação do Atual do Dolar</Text>
          <Text style={styles.containerCotDolarText}>US$ {dolar}</Text>
        </View>
        <View style={styles.boxPrinpal}>
          <TextInput
          keyboardType="numeric"
          style={styles.InputDolar}
          placeholder='Digite o valor em R$ Real'
          value={inputReal}
          onChangeText={n => setInputReal(n)}
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
  InputDolar: {
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
  containerCotDolar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40
  },
  containerCotDolarText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#8DA2D7'
  }
});
