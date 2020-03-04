import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  View,
  Alert
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import { useNavigation } from "@react-navigation/native";
import { _deleteData } from "../fetch/fetch";
import { Auth } from "aws-amplify";
import { actionAddUserID, actionChangeLogged } from "../reducer/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import SigningButtons from "../components/SigningButtons";

export default function Account() {
  const navigation = useNavigation();
  const isLogged = useSelector(state => state.userReducer.isLogged);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    try {
      Auth.signOut();

      //remove items from global state
      // _deleteData()
      dispatch(actionAddUserID(""));
      dispatch(actionChangeLogged(false));
      navigation.navigate("Land");
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <View style={styles.container}>
      {isLogged ? (
        <Button
          title="Log out"
          onPress={() => handleLogOut()}
          style={styles.logOutButton}
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
    backgroundColor: "#fff"
  },
  logOutButton: {
    color: "#05db6a"
  }
});
