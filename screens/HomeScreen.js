import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  SafeAreaView
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Cell from "../components/CellHomeScreen";
import { LogInButton, SingUpButton } from "../components/SigningButtons";
import { actionSetMain } from "../reducer/actionCreators";
import CheckoutLabel from "../components/CheckoutLabel";

const URL =
  "https://s3.amazonaws.com/staginggooduncledigests/products_istcki0x000h28d97a9rv9jp.json";

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const main = useSelector(state => state.mainReducer.main);
  const subtotal = useSelector(state => state.orderReducer.subtotal);

  useEffect(() => {
    fetch(URL)
      .then(resp => resp.json())
      .then(data => {
        const mains = data.digestData.mains.map(dish => {
          let foodOBJ = {
            name: dish.name,
            title: dish.title,
            ingredients: dish.ingredients,
            productPrice: dish.productOptions[0].price
          };
          return foodOBJ;
        });
        dispatch(actionSetMain(mains));
      });
  }, []);

  const headerFlatList = () => (
    <View style={styles.titleContainer}>
      <Text style={styles.titleLayout}>Build Your Own Bowl</Text>
      <Text>
        Select Your toppings. Served with your choice of protein & grains
      </Text>
    </View>
  );

  const checkoutLabel = () => (
    <TouchableOpacity
      onPress={()=> console.log("Navigating to cart...")}
    >
      <CheckoutLabel subtotal={subtotal} />
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <SafeAreaView
        style={[styles.container, styles.safeAreaContainer]}
        contentContainerStyle={styles.contentContainer}
      >
        <FlatList
          ListHeaderComponent={headerFlatList()}
          data={main}
          renderItem={({ item, index }) => <Cell item={item} key={index} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>

      {/*<View style={styles.containerButtons}>
      <LogInButton title="log in" />
      <SingUpButton title="Sign up" />
      </View>*/}
      {subtotal ? checkoutLabel() : null}
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
  safeAreaContainer: {
    // marginBottom: 100
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
