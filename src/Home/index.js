import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, SafeAreaView, Modal } from 'react-native';

export default function Home({navigation}) {
    function Dolar() {
        return navigation.navigate("Dolar")
    }
    function Euro() {
        return navigation.navigate("Euro")
    } 
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.containerTxt}>Escolha a opção de conversão:</Text>
        <View style={styles.boxPrinpal}>
            <TouchableOpacity onPress={Dolar} style={styles.btnConverte}><Text style={styles.btnConverteText}>$ Dolar</Text></TouchableOpacity>
            <TouchableOpacity onPress={Euro} style={styles.btnConverte}><Text style={styles.btnConverteText}>€ Euro</Text></TouchableOpacity>
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
      width: 180,
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
