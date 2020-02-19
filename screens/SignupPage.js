import React, { useState } from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import {_storeData} from '../fetch/fetch'

export default function SignupPage(){

    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    // const [send, setSend] = useState(false)

    const readyToSend = () => {
        if (password.length > 6 && phone.length === 10) return true
        return false
    }

    const  postingUser =  (userPhone) => {
        _storeData(userPhone) 
        
    }

    return (
        <View style={styles.container}>
        <View>
            <Text>
             10-digit phone number and minimum 6-character password
            </Text>
        </View>
        
            <ScrollView style={styles.textFields}>
                <TextInput style={styles.input}
                    placeholder="Phone Number"
                    returnKeyType="next"
                    onSubmitEditing={()=> passwordInput.focus()}
                    keyboardType="number-pad"
                    autoCorrect={false}
                    value={phone}
                    onChangeText={text =>{ 
                        if (text.length > 10) return
                        setPhone(text)
                    }}
                />
                <TextInput style={styles.input}
                    placeholder="Password"
                    returnKeyType="go"
                    secureTextEntry
                    keyboardType="default"
                    value={password}
                    onChangeText={text => setPassword(text) }
                />
                <TouchableOpacity 
                    onPress={()=> {
                        if (readyToSend()) postingUser(phone)
                    }} 
                    style={[styles.buttonContainer, readyToSend() && styles.buttonSend]}
                >
                    <Text style={styles.buttonText}>SIGN UP</Text>
                </TouchableOpacity>
            </ScrollView>

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    input: {
        paddingLeft: 20,
        borderRadius: 5,
        height: 60,
        fontSize: 25,
        backgroundColor: '#f1f1f1',
        marginBottom: 20,
        marginHorizontal: 20
    },
    buttonContainer: {
        height: 50,
        borderRadius: 50,
        backgroundColor: '#d3d3d3',
        justifyContent: 'center',
        // marginBottom: 200
    },
    buttonSend: {
        backgroundColor: "#05db6a"
    },
    buttonText: {
        textAlign: 'center',
        color: "#fff",
        fontSize: 20
        
    }
})