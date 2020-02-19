// import React from 'react'
// import App from './App'
import { Provider } from 'react-redux'
import {createStore, combineReducers} from 'redux'
import {userReducer, orderReducer, mainReducer} from './reducer/reducers'

const store = createStore(
    combineReducers({userReducer, orderReducer, mainReducer})
)

store.subscribe(()=> {
    console.log("store updated!", store.getState())
})

// export default function ReduxConfig(){

//     return (
//         <Provider store={store}>
//             <App/>
//         </Provider>
//     )
// }






















import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { _retrieveData } from './fetch/fetch'
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Navigation Controllers
import BottomTabNavigator from './navigation/BottomTabNavigator';
import SigningNavigator from './navigation/SigningNavigator'
import useLinking from './navigation/useLinking';

// Navigation Stacks
const RootStack = createStackNavigator();
const MainStack = createStackNavigator();
const LandStack = createStackNavigator();


export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // AsyncStorage
        _retrieveData()
        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {

    return (
      <Provider store={store}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}

          <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
            <RootStack.Navigator initialRouteName="Land">

              <RootStack.Screen 
                name="Register" 
                component={LandStackScreen} 
                options={{headerShown: false}}
              />

              <RootStack.Screen 
                name="Main"
                component={MainStackScreen}
                options={{headerShown: false}}
              />

            </RootStack.Navigator>
          </NavigationContainer>
        </View>
      
      </Provider>
    );
  }
}

//Pages related to signing process Navigation Controller 
function LandStackScreen(){
  return (
    <LandStack.Navigator>
      <LandStack.Screen 
        name="Nav" 
        component={SigningNavigator} 
        options={{headerShown: false}}
      />
    </LandStack.Navigator>
  )
}
//Pages related to app's main functionality Tab Controller
function MainStackScreen(){
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Tab" component={BottomTabNavigator} />
    </MainStack.Navigator>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
