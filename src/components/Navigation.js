import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import screens

import Home from '../Screens/Home';
import ViewS from '../Screens/ViewS';
import Profile from '../Screens/Profile';
import Schedule from '../Screens/Schedule';

import { appcolor } from '../components/Colorss';




const Tab = createBottomTabNavigator();

export default MyTabs = ({ navigation }) => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarHideOnKeyboard: false,

                tabBarStyle: {
                    // position: 'absolute',
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
                    if (route.name === 'Views') {
                        iconName = focused ? 'md-list-circle-sharp' : 'md-list-circle-outline';
                    }

                    if (route.name === 'Schedule') {
                        iconName = focused ? 'calendar-sharp' : 'calendar-outline';
                    }
                    if (route.name === 'Profile') {
                        iconName = focused ? 'person-add' : 'person-add-outline';
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
                name="Views"
                component={ViewS}
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
                name="Schedule"
                component={Schedule}
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
                name="Profile"
                component={Profile}
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










