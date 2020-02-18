import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen'
import Orders from '../screens/Orders';
import Chat from '../screens/Chat';
import Account from '../screens/Account';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {

  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // title: 'Get Started',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
      <BottomTab.Screen
      name="Orders"
      component={Orders}
      options={{
        // title: 'Resources',
        tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-list-box" />,
      }}
      />
      <BottomTab.Screen
      name="Chat"
      component={Chat}
      options={{
        // title: 'Resources',
        tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-chatboxes" />,
      }}
      />
      <BottomTab.Screen
        name="Account"
        component={Account}
        options={{
          // title: 'Resources',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Meal Drinks & Snacks';
    case 'Orders':
      return 'Orders';
    case 'Chat':
      return 'Chat';
    case 'Links':
      return 'Links to learn more';
    case 'Account':
        return 'Account';
      }
}
