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
import { Swipeable } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { actionRemoveOrder } from "../reducer/actionCreators";

export default function CellCart({ item }) {
  const dispatch = useDispatch();

  const RightAction = () => (
    <TouchableOpacity
      style={styles.rightAction}
      onPress={() => deletingItem()}
    >
      <Text style={styles.actionText}>Delete</Text>
    </TouchableOpacity>
  );

  const deletingItem = () => {
    console.log(item);
    let orderTotal = item.item.productPrice * item.itemQuantity

    let order = {
      order: item,
      subtotal : orderTotal
    }
    dispatch(actionRemoveOrder(order))
  };

  //   console.log("from cellcart", item);

  return (
    <Swipeable renderRightActions={RightAction}>
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
          <Text>{`$${(item.item.productPrice/100).toFixed(2)}`}</Text>
        </View>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  cellStyles: {
    flexDirection: "row",
    borderColor: "#F3F3F3",
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff"
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
  },
  rightAction: {
    backgroundColor: "#dd2c00",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  actionText: {
    color: "#fff",
    fontWeight: "600",
    padding: 20
  }
});
