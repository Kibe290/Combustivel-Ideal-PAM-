import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Combustível Ideal, seu app que te ajuda a escolher o melhor preço </Text>
      <StatusBar style="auto" />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt
});
// oq 