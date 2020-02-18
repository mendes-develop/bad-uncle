import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

const Orders = () => {
    return (
        <View style={styles.container}>
        <Text>Orders</Text>
        </View>
    )
}



export default Orders

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    }
})