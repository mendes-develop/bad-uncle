import React, {useState} from "react";
import {useDispatch} from 'react-redux'
import {actionAddOrder} from '../reducer/actionCreators'
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
import {useNavigation} from '@react-navigation/native';


export default function ItemDetail({ route }) {

  let fakeArray = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  const { item } = route.params
  const { name, ingredients, productPrice } = item;
  const price = (productPrice/100)

  const [loading, setLoading] = useState(false)
  let [itemQuantity, setItemQuantity] = useState(1);
  const navigation = useNavigation()

  const dispatch = useDispatch()

  const getTotal = () => (price * itemQuantity).toFixed(2)

  const settingMinus = () => {
    if ( itemQuantity <= 1) return
    setItemQuantity(itemQuantity-=1)
  }

  const addingToCart = (item) => {
    setLoading(true)

    console.log("adding to cart value:", getTotal())

    let order = {
      order: {
        item,
        itemQuantity,
      },
      subtotal: getTotal()
    }

    setTimeout( ()=> { 
      dispatch(actionAddOrder(order))
      setLoading(false)
      navigation.goBack()
    }, 3000)
    
  }

  const headerFlatList = () => (
    <React.Fragment>
      <Image
            style={styles.image}
            source={{
              uri:
                "data:image/jpeg;base64,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"
            }}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{name}</Text>
            <Text>{ingredients}</Text>

          </View>
          
          <View style={styles.addDishContainer}>
            <TouchableOpacity onPress={() => setItemQuantity(itemQuantity+=1)}>
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
  )

  const footerFlatList = () => (
    <React.Fragment>
      <Text style={styles.bottomText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Text>
    </React.Fragment>
  )

  return (
    <View style={styles.container}>
      <View style={styles.dismissContainer}>
        <DismissButton />
      </View>
      <SafeAreaView style={{flex:1}}>
        <FlatList
          data={fakeArray}
          renderItem={({ item, index }) => <Cell  item={item} key={item.id}/>}
          keyExtractor={(item, index) => item.id}
          ListHeaderComponent={headerFlatList()}
          ListFooterComponent={footerFlatList()}
        />
        
      </SafeAreaView>
      <TouchableOpacity 
        style={styles.addButtonContainer}
        onPress={()=> addingToCart(item)}
        disabled={loading}
        >
        <AddToCartButton total={getTotal()} loading={loading}/>
      </TouchableOpacity>
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
  titleContainer:{
    paddingHorizontal: 20,
    paddingTop: 20
  },
  title:{
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
  },
  addButtonContainer: {
    backgroundColor: "rgba(52, 52, 52, 0.0)"
  }
});
