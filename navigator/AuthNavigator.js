import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';


const Stack = createStackNavigator();

export default AuthNavigator = () => {
    return (

        <Stack.Navigator
            screenOptions={{
                headerShown: null
            }}
            initialRouteName="Login"
        >
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="Signup"
                component={Signup}
            />
            {/* <Stack.Screen 
            name="ForgetPassword" 
            component= {ForgetPassword}
            />          
            <Stack.Screen
            name="OtpSignUp" 
            component= {OtpSignUp}
        />  */}
        </Stack.Navigator>
    )
}