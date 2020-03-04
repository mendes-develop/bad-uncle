import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function CheckoutLabel ({subtotal}){

  return (
    <View style={styles.totalContainer}>
      <Text style={styles.text}>
        Your total is: <Text style={styles.price}>${(subtotal/100).toFixed(2)}</Text>
      </Text>
    </View>
  ); 
}

const styles = StyleSheet.create({
  totalContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center', 
  },
  text: {
    backgroundColor: 'black',
    textAlign: 'center',
    width: '100%',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
    padding: 20
  },
  price: {
    color: '#05db6a'
  }
});
