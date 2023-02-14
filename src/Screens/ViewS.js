import { Text, SafeAreaView, View, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { appcolor } from '../components/Colorss';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// import screens
import Teacher from '../Screens/Teacher';
import Recording from './Recording';
import DVR from '../Screens/Dvr';


const Tab = createMaterialTopTabNavigator();

export default MyTabs = ({ navigation }) => {
    return (
        <Tab.Navigator
            initialRouteName="Teacher"
            screenOptions={{
                tabBarActiveTintColor: 'black',
                tabBarLabelStyle: { fontSize: 10, fontWeight: 'bold' },
                tabBarStyle: {
                    backgroundColor: appcolor.primarycolor,
                    height: 60,



                },
            }}
        >
            <Tab.Screen
                name="Teacher"
                component={Teacher}
                options={{
                    tabBarLabel: 'Teacher',
                    tabBarIcon: () => {
                        return <Ionicons
                            name={'person'} size={24} solid color='black' />;
                    },

                }}
            />
            <Tab.Screen
                name="Recording"
                component={Recording}
                options={{
                    tabBarLabel: 'Recording',
                    tabBarIcon: () => {
                        return <MaterialIcons
                            name={'video-collection'} size={24} solid color='black' />;
                    },

                }}
            />
            <Tab.Screen
                name="DVR"
                component={DVR}
                options={{
                    tabBarLabel: 'DVR',
                    tabBarIcon: () => {
                        return <MaterialIcons
                            name={'dvr'} size={24} solid color='black' />;
                    },

                }}
            />

        </Tab.Navigator>

    );
};
