import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export function ButtonPlus() {
  return (
    <TouchableOpacity style={[styles.buttonContainer, styles.buttonPlus]}>
      <Text style={styles.textPlus}> + </Text>
    </TouchableOpacity>
  );
}

export function ButtonMinus() {
  return (
    <TouchableOpacity style={[styles.buttonContainer, styles.buttonMinus]}>
      <Text style={styles.textMinus}>-</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 30,
    width: 30,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    margin: 15
  },
  buttonPlus: {
    backgroundColor: "#05db6a",
    borderColor: "#05db6a"
  },
  buttonMinus: {
    borderColor: "#f1f1f1"
  },
  textPlus: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  },
  textMinus: {
    color: "#f1f1f1",
    fontWeight: "bold",
    fontSize: 20
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 20
  }
});
