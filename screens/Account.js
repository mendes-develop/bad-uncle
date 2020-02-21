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

export default function Account() {
  return (
    <View style={styles.container}>
      <Button
        title="Press me"
        onPress={() => Alert.alert("Simple Button pressed")}
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
