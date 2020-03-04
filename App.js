// imports related to Redux
import { Provider } from 'react-redux'
import store from './reducer/reducers'
// store.subscribe(()=> {
//     console.log("store updated!", store.getState().orderReducer)
// })

import * as React from 'react';
import * as Font from 'expo-font';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// AsyncStorage Method to retrieve data
import { _retrieveData } from './fetch/fetch'

//Navigation Controllers
import BottomTabNavigator from './navigation/BottomTabNavigator';
import SigningNavigator from './navigation/SigningNavigator'
import useLinking from './navigation/useLinking';

// AWS Amplify and Configuration
import Amplify from 'aws-amplify'
import config from './config.json'

Amplify.configure({
  Auth: {
    mandatorySignId: false,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
    authenticationFlowType: config.cognito.AUTHENTICATION_FLOW_TYPE,
    mandatorySignIn: false

  }
})

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
                options={{headerShown: false, tabBarVisible: false}}
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
