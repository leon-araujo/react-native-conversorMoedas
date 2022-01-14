import { StyleSheet, Text, View } from 'react-native';

export default function Dolar() {
  return (
    <View style={styles.container}>
      <Text>Dolar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
