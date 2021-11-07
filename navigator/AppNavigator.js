import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard2 from '../Screens/Dashboard2'

const Stack = createStackNavigator();

export default AppNavigator = () => (
    <Stack.Navigator
        screenOptions = {{
            headerShown: null
        }}
    >     
        <Stack.Screen 
            name="Dashbaord2" 
            component= {Dashboard2}
        />                    
    </Stack.Navigator> 
)