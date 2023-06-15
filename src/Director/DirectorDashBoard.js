import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import screens

import Home from '../Director/Home';
import ShortReport from '../Director/ShortReport';
import ActivityShortReport from '../Director/ActivityShortReport';

import { appcolor } from '../components/Colorss';





const Tab = createBottomTabNavigator();

export default DirectorDashboard = ({ navigation }) => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarHideOnKeyboard: false,

                tabBarStyle: {
                    position: 'absolute',
                    height: 5,

                    elevation: 10,
                    bottom: 15,
                    left: 0,
                    right: 0,
                    borderRadius: 0,
                    elevation: 0,

                    backgroundColor: appcolor.primarycolor,
                    height: 60,
                    marginBottom: -25
                },

                tabBarLabelStyle: { fontSize: 12, bottom: 9, fontWeight: 'bold' },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';

                    }


                    if (route.name === 'ShortReport') {
                        iconName = focused ? 'file-tray-full-sharp' : 'file-tray-full-outline';
                    }

                    if (route.name === 'ActivityShortReport') {
                        iconName = focused ? 'file-tray-full-sharp' : 'file-tray-full-outline';
                    }


                    // You can return any component that you like here!
                    return (
                        <Ionicons
                            name={iconName}
                            size={28}
                            color={color}
                            style={{
                                width: 30,
                                height: 36,
                            }}
                        />
                    );
                },
                tabBarActiveTintColor: '#000080',
                tabBarInactiveTintColor: 'black',
            })}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,


                }}></Tab.Screen>


            <Tab.Screen
                name="ShortReport"
                component={ShortReport}
                options={{
                    headerShown: false,
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                    headerStyle: {
                        backgroundColor: appcolor.primarycolor,
                    },
                }}
            />

            <Tab.Screen
                name="ActivityShortReport"
                component={ActivityShortReport}
                options={{
                    headerShown: false,
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                    headerStyle: {
                        backgroundColor: appcolor.primarycolor,
                    },
                }}
            />

        </Tab.Navigator>



    );
};



