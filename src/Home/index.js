import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function Home({navigation}) {
    function Dolar() {
        return navigation.navigate("Dolar")
    }
    function Euro() {
        return navigation.navigate("Euro")
    } 

    const convert = <Ionicons style={{marginLeft: 8, marginRight: 5}} name='md-swap-horizontal-sharp' size={25} color={'#fff'}/>;
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.containerTxt}>Escolha a opção de conversão:</Text>
        <View style={styles.boxPrinpal}>
            <TouchableOpacity onPress={Dolar} style={styles.btnConverte}><Text style={styles.btnConverteText}>R$ Real {convert} $ Dolar</Text></TouchableOpacity>
            <TouchableOpacity onPress={Euro} style={styles.btnConverte}><Text style={styles.btnConverteText}>R$ Real {convert} € Euro</Text></TouchableOpacity>
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
  },
  boxPrinpal: {
    backgroundColor: '#5F6BC3',
    padding: 10,
    width: '90%',
    borderRadius: 15,
    alignItems: 'center'
  },
  btnConverte: {
      backgroundColor: '#00BAD5',
      padding: 10,
      width: 280,
      borderRadius: 10,
      marginBottom: 25,
      marginTop: 25
  },
  btnConverteText: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#fff'
  },
  containerTxt: {
      fontSize: 20,
      marginBottom: 20
  }
});
