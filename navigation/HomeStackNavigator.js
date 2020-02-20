import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import ItemDetail from '../screens/ItemDetail'

import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function HomeStackNavigator({navigation, route}){

    // navigation.setOptions({ headerTitle: "Alex" });
    // console.log(route.state?.routes[route.state.index]?.name)

    // navigation.setOptions = {
    //     title: 'Great',
    //   };

    // HomeStack.navigationOptions = ({ navigation }) => {
    //     let tabBarVisible = true;
    //     if (navigation.state.index > 0 && navigation.state.routes[1].routeName === "ItemDetail") {
    //       tabBarVisible = false;
    //     }
    //   console.log("Options")
    //     return {
    //       tabBarVisible,
    //     };
    //   };

    return(
        <HomeStack.Navigator initialRouteName={INITIAL_ROUTE_NAME} >
            <HomeStack.Screen
                name="Home"
                component={HomeScreen}
                options={{headerShown: false}}
            />
            <HomeStack.Screen
                name="ItemDetail"
                component={ItemDetail}
                options={{headerShown: false}}
                
            />
        </HomeStack.Navigator>
    )
}