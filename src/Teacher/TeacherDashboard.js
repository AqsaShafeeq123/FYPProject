import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import screens

import HOME from '../Teacher/HOME';
import ATTENDANCE from '../Teacher/ATTENDANCE';
import CHR from '../Teacher/CHR';
import NOTIFICATION from '../Teacher/NOTIFICATION';

import { appcolor } from '../components/Colorss';





const Tab = createBottomTabNavigator();

export default TeacherDashboard = ({ navigation }) => {
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

                    if (route.name === 'HOME') {
                        iconName = focused ? 'home' : 'home-outline';

                    }

                    if (route.name === 'ATTENDANCE') {
                        iconName = focused ? 'ios-list-circle-sharp' : 'ios-list-circle-outline';
                    }

                    if (route.name === 'CHR') {
                        iconName = focused ? 'file-tray-full-sharp' : 'file-tray-full-outline';
                    }

                    if (route.name === 'NOTIFICATION') {
                        iconName = focused ? 'notifications-circle' : 'notifications-outline';
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
                name="HOME"
                component={HOME}
                options={{
                    // headerShown: false,
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                    headerStyle: {
                        backgroundColor: appcolor.primarycolor,
                    },

                }}></Tab.Screen>

            <Tab.Screen
                name="ATTENDANCE"
                component={ATTENDANCE}
                options={{
                    // headerShown: false,
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
                name="CHR"
                component={CHR}
                options={{
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
                name="NOTIFICATION"
                component={NOTIFICATION}
                options={{
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










