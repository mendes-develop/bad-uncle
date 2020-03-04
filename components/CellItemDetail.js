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
import { ButtonPlus, ButtonMinus } from "./PlusMinusButton";
import config from "../config.json";

export default function CellItemDetail({ item }) {
  // console.log(item)
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <ButtonPlus />
        <Text>0</Text>
        <ButtonMinus />
      </View>
      <View style={styles.textContainer}>
        <Text>Brown Rice</Text>
        <Text>+ $2.00</Text>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: config.imageURL
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#F3F3F3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: "row"
    // borderRadius: 5
    // justifyContent: 'space-evenly'
  },
  buttonsContainer: {
    flex: 1
  },
  textContainer: {
    flex: 3
  },
  imageContainer: {
    flex: 2
    // borderWidth: 2
  },
  image: {
    right: 0,
    left: 0,
    top: 0,
    height: 100
  }
});
