import React from 'react'
import LandScreen from '../screens/LandScreen'
import LoginPage from '../screens/LoginPage'
import SignupPage from '../screens/SignupPage'

import { createStackNavigator } from '@react-navigation/stack';

const SigningNav = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Land';

export default function SigningNavNavigator(){

    return(
        <SigningNav.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
            <SigningNav.Screen
                name="Land"
                component={LandScreen}
                options={{headerShown: false}}
            />
            <SigningNav.Screen
                name="Login"
                component={LoginPage}
                
            />
            <SigningNav.Screen
                name="Signup"
                component={SignupPage}
                
            />
        </SigningNav.Navigator>
    )
}