import React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from "react-native";
import Swipeout from 'react-native-swipeout';
import {useDispatch} from 'react-redux'
import {actionRemoveOrder} from '../reducer/actionCreators'

export default function CellCart({ item }) {

    const dispatch = useDispatch()

    let swipeBtns = [
        {
            text: "Delete",
            backgroundColor: "red",
            underlayColor: "black",
            onPress: () => {
                deletingItem(item);
            }
        }
    ];

  const deletingItem = (itemBeingDeleted) => {
      console.log("Deleting Item")
      dispatch(actionRemoveOrder(itemBeingDeleted))
  }

//   console.log("from cellcart", item);

  return (
      
        <Swipeout right={swipeBtns} autoClose={true} backgroundColor="transparent">
            <View style={styles.cellStyles}>
            <View style={styles.imageContainer}>
                <Image
                style={{ width: 50, height: 50 }}
                source={{
                    uri: "https://facebook.github.io/react-native/img/tiny_logo.png"
                }}
                />
            </View>
            <View style={styles.nameContainer}>
                <Text>{item.item.name}</Text>
                <Text>{item.itemQuantity}</Text>
            </View>
            <View style={styles.priceContainer}>
                <Text>{item.item.productPrice}</Text>
            </View>
            </View>
            </Swipeout>
      
  );
}

const styles = StyleSheet.create({
  cellStyles: {
    flexDirection: "row",
    borderColor: "#F3F3F3",
    borderBottomWidth: 1,
    padding: 5
  },
  imageContainer: {
    padding: 10,
    flex: 1
  },
  nameContainer: {
    justifyContent: "space-between",
    padding: 10,
    flex: 2
  },
  priceContainer: {
    padding: 10,
    flex: 1
  }
});
