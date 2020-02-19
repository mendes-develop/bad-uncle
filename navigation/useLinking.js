import { useLinking } from '@react-navigation/native';
import { Linking } from 'expo';

export default function(containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl('/')],
    config: {
      Nav: {
        path: 'nav',
        screens: {
          Land: 'land',
          Login: 'login',
          Signup: 'signup'
        }
      },
      Tab: {
        path: 'tab',
        screens: {
          Home: 'home',
          Orders: 'orders',
          Chat: 'chat',
          Account: 'account',
        },
      },
    },
  });
}
