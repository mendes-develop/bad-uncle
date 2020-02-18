import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";

export default function Chat() {
  return (
    <View style={styles.container}>
      <Text>Chat</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
