import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import config from '../config.json'


export default function Cell({item}){

    const navigation = useNavigation()
    const { name, productPrice } = item 

    const formatPrice = () => {
        const amount = (productPrice/100).toFixed(2) 
        return `$ ${amount}`
    }

    return (
        <React.Fragment>
            
            <TouchableOpacity 
                style={styles.container} 
                onPress={()=> navigation.push("ItemDetail", {item})}>
                <Image
                    style={styles.image}
                    source={{uri: config.imageURL}}
                />  
            <View style={styles.itemTitle}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.price}>{formatPrice()}</Text>
                </View>
                
            </TouchableOpacity>
            
        
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#F3F3F3",
        marginBottom: 10,
        marginHorizontal: 20,
        height: 100,
        flex: 1, 
        flexDirection: 'row',
        borderRadius: 5
        // justifyContent: 'space-evenly'
    },
    image: {
        width: 120,
        bottom: 0,
        left: 0,
        top: 0
    },
    itemTitle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 15,
        marginTop: 10,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    price: {
        marginBottom: 10,
        marginLeft: 10
    }

})