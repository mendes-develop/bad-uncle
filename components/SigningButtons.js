import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SingUpButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Signup")}
      style={[styles.signupButton, styles.button]}
    >
      <Text style={[styles.signupText, styles.buttonText]}>SIGN UP</Text>
    </TouchableOpacity>
  );
};

const LogInButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Login")}
      style={[styles.loginButton, styles.button]}
    >
      <Text style={[styles.loginText, styles.buttonText]}>LOG IN</Text>

    </TouchableOpacity>
  );
};

export default SigningButtons = () => (
  <View style={styles.containerButtons}>
    <LogInButton />
    <SingUpButton />
  </View>
);

const styles = StyleSheet.create({
  button: {
    height: 55,
    borderRadius: 30,
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 70,
    marginHorizontal: 5
  },
  loginButton: {
    borderWidth: 2,
    borderColor: "#05db6a"
  },
  signupButton: {
    backgroundColor: "#05db6a"
  },
  buttonText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold"
  },
  signupText: {
    color: "#ecf0f1"
  },
  loginText: {
    color: "#05db6a"
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10
  },
  // containerButtons: {
  //   position: "absolute",
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   ...Platform.select({
  //     ios: {
  //       shadowColor: "black",
  //       shadowOffset: { width: 0, height: -3 },
  //       shadowOpacity: 0.1,
  //       shadowRadius: 3
  //     },
  //     android: {
  //       elevation: 20
  //     }
  //   }),
  //   alignItems: "center",
  //   // backgroundColor: 'rgba(52, 52, 52, 0)',
  //   backgroundColor: "#fbfbfb",
  //   paddingVertical: 20,
  //   flex: 1,
  //   flexDirection: "row",
  //   justifyContent: "space-evenly"
  // }
});
