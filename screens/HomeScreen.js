import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
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
import Cell from "../components/CellHomeScreen";
import {LogInButton, SingUpButton} from '../components/SigningButtons'
import {actionSetMain} from '../reducer/actionCreators'

const URL =
  "https://s3.amazonaws.com/staginggooduncledigests/products_istcki0x000h28d97a9rv9jp.json";

export default function HomeScreen({navigation}) {

 
  const dispatch = useDispatch()
  const main = useSelector(state => state.mainReducer.main) 

  useEffect(() => {
    fetch(URL)
      .then(resp => resp.json())
      .then(data => {

        const mains = data.digestData.mains;
        dispatch(actionSetMain(mains))

      });
  }, []);

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
          data={main}
          renderItem={({ item, index }) => <Cell item={item} key={index} navigation={navigation}/>}
        />
      </ScrollView>

      <View style={styles.containerButtons}>
        <LogInButton title="log in" navigation={navigation}/>
        <SingUpButton title="Sign up" navigation={navigation}/>
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

  containerButtons: {
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
    // backgroundColor: 'rgba(52, 52, 52, 0)',
    backgroundColor: "#fbfbfb",
    paddingVertical: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
});
