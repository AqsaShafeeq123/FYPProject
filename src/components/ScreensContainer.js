import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from '../components/Navigation';
import Login from './Login';

import ViewS from '../Screens/ViewS';

const Stack = createStackNavigator();
export default function stackss() {
    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName='Logins'>
                <Stack.Screen name='Logins' component={Login} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name='Tabs' component={MyTabs} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name='ViewS' component={ViewS} ></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};