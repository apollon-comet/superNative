import React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import HomeNavigator from "./HomNavigation";

const DrawerNavigator = () => {
    const DrawerStack = createDrawerNavigator();
    return (
        <DrawerStack.Navigator>
            <DrawerStack.Screen name="Home" component={HomeNavigator}> </DrawerStack.Screen>
        </DrawerStack.Navigator>
    )
}

export default DrawerNavigator;