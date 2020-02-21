import React, { useState, useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { useNavigation } from '@react-navigation/native';

export const SingUpButton = ({title}) => {

  const navigation = useNavigation()
    return (
      <TouchableOpacity onPress={()=> navigation.navigate('Signup')} style={[styles.signupButton, styles.button]}>
        <Text style={[styles.signupText, styles.buttonText]}>{title.toUpperCase()}</Text>
      </TouchableOpacity>
    );
};

export const LogInButton = ({title}) => {
  const navigation = useNavigation()
    return (
      <TouchableOpacity onPress={()=> navigation.navigate('Login')} style={[styles.loginButton, styles.button]}>
        <Text style={[styles.loginText, styles.buttonText]}>{title.toUpperCase()}</Text>
      </TouchableOpacity>
    );
};

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
        borderColor: "#05db6a",
      },
      signupButton: {
        backgroundColor: "#05db6a",
      },
      buttonText: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: 'bold'
      },
      signupText: {
        color: "#ecf0f1"
      },
      loginText: {
        color: "#05db6a"
      }
})