import React, { useState, useEffect } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Cell from "../components/Cell";

const URL =
  "https://s3.amazonaws.com/staginggooduncledigests/products_istcki0x000h28d97a9rv9jp.json";

export default function HomeScreen() {
  useEffect(() => {
    fetch(URL)
      .then(resp => resp.json())
      .then(data => {
        console.log("New Fetch");
        // console.log(data.digestData.mains.length)
        // console.log(mains.length)
        const mains = data.digestData.mains;
        setBowls(mains);

        // for ( i=0 ; i < mains.length; i++) {
        //   console.log(mains[i].name)
        // }
      });
  }, []);

  const [bowls, setBowls] = useState([]);
  // const [chickenDips, setChickenDips] = useState([])
  // const [pasta, setPasta] = useState([])
  // const [plates, setPlates] = useState([])
  // const [salads, setSalads] = useState([])
  // const [sides, setSides] = useState([])
  // const [sweets, setSweets] = useState([])
  // const [drinks, setDrinks] = useState([])
  // const [snacks, setSnacks] = useState([])

  const singUpButton = (title) => {
    return (
      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.buttonText}>{title.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  };
  const logInButton = (title) => {
    return (
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>{title.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.titleLayout}>Build Your Own Bowl</Text>
          <Text>
            Select Your toppings. Served with your choice of protein & grains
          </Text>
        </View>
        <FlatList
          data={bowls}
          renderItem={({ item, index }) => <Cell item={item} key={index} />}
        />
      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        {logInButton("Log in")}
        {singUpButton("Sign up")}
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  titleContainer: {
    margin: 20
  },
  titleLayout: {
    fontSize: 20
  },
  contentContainer: {
    paddingTop: 0
  },

  //Alex Layout
  buttonText: {
    textAlign: "center",
    color: "#ecf0f1",
    fontSize: 15,
    fontWeight: 'bold'
  },
  loginButton: {
    height: 55,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#05db6a",
    paddingVertical: 10,
    paddingHorizontal: 70,
    justifyContent: "center"
  },
  signupButton: {
    height: 55,
    borderRadius: 30,
    backgroundColor: "#05db6a",
    paddingVertical: 10,
    paddingHorizontal: 70,
    justifyContent: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
});
