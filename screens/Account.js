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
import {_deleteData} from '../fetch/fetch'
import {Auth} from 'aws-amplify'

export default function Account() {
  const navigation = useNavigation()

  const handleLogOut = () => {

    try {
      Auth.signOut()

      //remove items from global state
      _deleteData()
      navigation.navigate("Land")

    } catch(error){

    }

  }

  return (
    <View style={styles.container}>
      <Button
        title="Press me"
        onPress={() => handleLogOut()}
        style={styles.logOutButton}
      />
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
