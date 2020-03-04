import * as React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import CellCart from '../components/CellCart'
import {useSelector} from 'react-redux'

export default function Chat() {

  const cartItems = useSelector(state => state.orderReducer.orders)
  const isLogged = useSelector(state => state.userReducer.isLogged)

  console.log(cartItems)

const loadItems = () => (

  cartItems.length > 0 ? (
    <FlatList 
    data={cartItems}
    renderItem={({item, key}) => (<CellCart item={item} key={key}/>)}
    style={{flex:1}}
    />
    ) : (
      <Text style={styles.text}>no items</Text>

  )
)

  return (
    <View style={styles.container}>
    
      {isLogged ? loadItems() : <Text style={styles.text}>Log or create an account to see your items</Text>}
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  text: {
    textAlign: 'center',
    padding: 20,
    fontWeight: 'bold',
    fontSize: 15

  }
});
