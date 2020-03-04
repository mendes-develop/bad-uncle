import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionAddOrder } from "../reducer/actionCreators";
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
import Cell from "../components/CellItemDetail";
import { ButtonPlus, ButtonMinus } from "../components/PlusMinusButton";
import DismissButton from "../components/DismissButton";
import AddToCartButton from "../components/AddToCartButton";
import { useNavigation } from "@react-navigation/native";
import config from "../config.json";
import SigningButtons from "../components/SigningButtons";

export default function ItemDetail({ route }) {
  let fakeArray = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item"
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item"
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item"
    }
  ];

  const { item } = route.params;
  const { name, ingredients, productPrice } = item;
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const isLogged = useSelector(state => state.userReducer.isLogged);
  let [itemQuantity, setItemQuantity] = useState(1);

  const dispatch = useDispatch();

  const getTotal = () => productPrice * itemQuantity;

  const formatPrice = () => {
    return (getTotal() / 100).toFixed(2);
  };

  const settingMinus = () => {
    if (itemQuantity <= 1) return;
    setItemQuantity((itemQuantity -= 1));
  };

  const addingToCart = item => {
    setLoading(true);

    // console.log("adding to cart value:", getTotal());

    let order = {
      order: {
        item,
        itemQuantity
      },
      subtotal: getTotal()
    };

    setTimeout(() => {
      dispatch(actionAddOrder(order));
      setLoading(false);
      navigation.goBack();
    }, 2000);
  };

  const headerFlatList = () => (
    <React.Fragment>
      <Image
        style={styles.image}
        source={{
          uri: config.imageURL
        }}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text>{ingredients}</Text>
      </View>

      <View style={styles.addDishContainer}>
        <TouchableOpacity onPress={() => setItemQuantity((itemQuantity += 1))}>
          <ButtonPlus />
        </TouchableOpacity>

        <Text>{itemQuantity}</Text>

        <TouchableOpacity onPress={() => settingMinus()}>
          <ButtonMinus />
        </TouchableOpacity>
      </View>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Protein and grains</Text>
      </View>
    </React.Fragment>
  );

  const footerFlatList = () => (
    <React.Fragment>
      <Text style={styles.bottomText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </React.Fragment>
  );

  return (
    <View style={styles.container}>
      <View style={styles.dismissContainer}>
        <DismissButton />
      </View>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={fakeArray}
          renderItem={({ item, index }) => <Cell item={item} key={item.id} />}
          keyExtractor={(item, index) => `${item.id}`}
          ListHeaderComponent={headerFlatList()}
          ListFooterComponent={footerFlatList()}
        />
      </SafeAreaView>
      {isLogged ? (
        <AddToCartButton
          total={formatPrice()}
          loading={loading}
          addingToCart={addingToCart}
          item={item}
        />
      ) : (
        <SigningButtons />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  bottomText: {
    textAlign: "center",
    paddingTop: 30,
    paddingHorizontal: 20,
    fontSize: 20
  },
  image: {
    right: 0,
    left: 0,
    top: 0,
    height: 200
  },
  titleContainer: {
    paddingHorizontal: 20,
    paddingTop: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: 25
  },
  dismissContainer: {
    backgroundColor: "rgba(52, 52, 52, 0)",
    zIndex: 99
  },
  addDishContainer: {
    // borderWidth: 1,
    // borderColor: 'black',
    padding: 20,
    flexDirection: "row"
  },
  subtitleContainer: {
    backgroundColor: "#f1f1f1",
    padding: 15
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 15
  }
});
