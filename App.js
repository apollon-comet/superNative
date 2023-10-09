import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppNavContainer from "./src/navigations";

function HomeScreen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
        </View>
    );
}

function DetailsScreen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Details Screen</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

function App() {
    return (
        // <NavigationContainer>
        //     <Stack.Navigator initialRouteName="Home">
        //         {/*<Stack.Screen name="Home" component={HomeScreen} options={{title: 'Overview'}}/>*/}
        //         <Stack.Screen name="Details" component={DetailsScreen}/>
        //     </Stack.Navigator>
        // </NavigationContainer>
        <AppNavContainer>

        </AppNavContainer>
    );
}

export default App;
