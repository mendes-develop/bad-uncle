import * as React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import CellCart from '../components/CellCart'
import {useSelector} from 'react-redux'

export default function Chat() {

  const cartItems = useSelector(state => state.orderReducer.orders)
  // const fakeArray =[1,2,3]

  // console.log(cartItems)

  return (
    <View style={styles.container}>
    
      {cartItems.length > 0 ? (
        <FlatList 
        data={cartItems}
        renderItem={({item, key}) => (<CellCart item={item}/>)}
        style={{flex:1}}
        />
        ) : (
          <Text>no items</Text>

      )}
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
