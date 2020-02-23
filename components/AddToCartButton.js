import * as React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View
} from "react-native";

export default function AddToCartButton({total, loading}){

  // let total = '$22.50'
  // console.log(loading)

    return (
      <View  style={[styles.button, loading ? styles.disableButton  : styles.activeButton ]}>
        <Text style={[styles.signupText, styles.buttonText]}>{loading ? 'Adding to Bag...' : `Add to Bag - $${total}`}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  button: {
    height: 55,
    borderRadius: 30,
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 50,
    marginHorizontal: 20,
    marginVertical: 5
  },
  activeButton: {
    backgroundColor: "#05db6a",
  },
  disableButton: {
    backgroundColor: "rgba(5, 219, 106, 0.6)"
  },
  buttonText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: 'bold',
    color: "#ecf0f1"
  },
    
})