import React from 'react';

import {NavigationContainer} from '@react-navigation/native'
import AuthNavigation from "./AuthNavigation";

const AppNavContainer = () => {
    return (
        <NavigationContainer>
            <AuthNavigation> </AuthNavigation>
        </NavigationContainer>
    )
}

export default AppNavContainer;