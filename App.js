import React, { useState, useEffect, useContext, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LogBox } from 'react-native';

import firebase from './Firebase/fire';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import DrawerNavigator from './navigator/MainNavigator';
import { LanguageContext } from './LanguageContext';
import { NotificationsContext } from './NotificationsProvider';
import App from './services/NotificationServices';
import AsyncStorageHelper from './Helpers/AsyncStorage';

const Stack = createStackNavigator();

export default AppContainer = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const [context, setContext] = useState('en');
  const [notiContext, setNotiContext] = useState()

  // Handle user state changes
  function onAuthStateChanged(user) {

    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      <LanguageContext.Provider value={{ context, setContext }}>
        <NotificationsContext.Provider value={{ notiContext, setNotiContext }}>
          {
            user ?
              <Stack.Navigator initialRouteName="DrawerNavigator">
                <Stack.Screen options={{ headerShown: false }} name="DrawerNavigator" component={DrawerNavigator} />
              </Stack.Navigator>
              :
              <Stack.Navigator initialRouteName="Login" >
                <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                <Stack.Screen options={{ headerShown: false }} name="Signup" component={Signup} />
              </Stack.Navigator>
          }
        </NotificationsContext.Provider>
      </LanguageContext.Provider>
    </NavigationContainer>
  )
}