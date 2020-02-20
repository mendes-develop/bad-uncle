import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function DismissButton() {
    const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {navigation.goBack()}}
      style={styles.buttonContainer}
    >
      <Text style={styles.textPlus}> x </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "white",
    height: 40,
    width: 40,
    borderColor: "black",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 2
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    marginLeft: 20,
    marginTop: 20,
    elevation: 8,
    position: "absolute",
  },
  textPlus: {
    fontWeight: "bold",
    fontSize: 20
  }
});
