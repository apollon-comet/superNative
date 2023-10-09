import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View} from "react-native";

const Contacts = () => {
    return (
        <View>
            <Text>Hi from contacts</Text>
        </View>
    )
}

const ContactDetail = () => {
    return (
        <View>
            <Text>Hi from Contact Details</Text>
        </View>
    )
}

const CreateContact = () => {
    return (
        <View>
            <Text>Hi from Create Contact</Text>
        </View>
    )
}

const Settings = () => {
    return (
        <View>
            <Text>Hi from Settings</Text>
        </View>
    )
}


const HomeNavigator = () => {
    const HomeStack = createNativeStackNavigator();
    return (
        <HomeStack.Navigator initialRouteName="Contact">
            <HomeStack.Screen name="Contact" component={Contacts}> </HomeStack.Screen>
            <HomeStack.Screen name="Contact Detail" component={ContactDetail}> </HomeStack.Screen>
            <HomeStack.Screen name="Create Contact" component={CreateContact}> </HomeStack.Screen>
            <HomeStack.Screen name="Settings" component={Settings}> </HomeStack.Screen>
        </HomeStack.Navigator>
    )
}

export default HomeNavigator;