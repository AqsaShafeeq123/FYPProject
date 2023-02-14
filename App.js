import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/components/Login';
import Navigation from './src/components/Navigation';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">

                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Navigation" component={Navigation} />
             
            </Stack.Navigator>


        </NavigationContainer>
    );
};

export default App;