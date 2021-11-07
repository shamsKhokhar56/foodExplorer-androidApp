import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

const AppContainer = () => {

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function onAuthStateChange(user){
        setUser(user);
        if (initializing) setInitializing(false)
    }

    if (initializing) return null;
    
    return (
        <NavigationContainer>
            {/* {user ? <AppNavigator/> : <AuthNavigator/>} */}
            <AuthNavigator />
        </NavigationContainer>
    )
}

export default AppContainer;
