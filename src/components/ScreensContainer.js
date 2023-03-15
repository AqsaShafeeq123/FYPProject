
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from '../components/Navigation';
import Login from './Login';

import ViewS from '../Screens/ViewS';
import TeacherRecording from '../Screens/TeacherRecording';
import TeacherSchedule from '../Screens/TeacherSchedule';
import { appcolor } from '../components/Colorss';
import DvrDetails from '../Screens/DvrDetails';
import StreamingDetails from '../Screens/StreamingDetails';
import TeacherList from '../Screens/TeacherList';
import ScheduleRules from '../Screens/ScheduleRules';


import Reschedule from '../Screens/Reschedule';
import Preschedule from '../Screens/Preschedule';
import Swap from '../Screens/Swap';
import SlotsChecking from '../Screens/SlotsChecking';


import StdDashboard from '../Student/StdDashboard';
import StdAttendance from '../Student/StdAttendance';
import TeacherDashboard from '../Teacher/TeacherDashboard';
import EditAttendance from '../Teacher/EditAttendance';
import LiveStreamDetails from '../Screens/LiveStreamDetails';
import SessionsChr from '../Teacher/SessionsChr';
import DirectorDashBoard from '../Director/DirectorDashBoard';
import ChrDetail from '../Director/ChrDetail';




const Stack = createStackNavigator();

export default function stackss() {
    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName='Logins'>
                <Stack.Screen name='Logins' component={Login} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name='Tabs' component={MyTabs} options={{ headerShown: false }}></Stack.Screen>

                <Stack.Screen name='ViewS' component={ViewS} ></Stack.Screen>
                <Stack.Screen name='TeacherRecording' component={TeacherRecording} options={{

                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                    headerStyle: {
                        backgroundColor: appcolor.primarycolor,
                    },
                }}></Stack.Screen>
                <Stack.Screen name='TeacherSchedule' component={TeacherSchedule} options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                    headerStyle: {
                        backgroundColor: appcolor.primarycolor,
                    },
                }}></Stack.Screen>

                <Stack.Screen name='DvrDetails' component={DvrDetails} options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                    headerStyle: {
                        backgroundColor: appcolor.primarycolor,
                    },
                }} ></Stack.Screen>



                <Stack.Screen name='StreamingDetails' component={StreamingDetails} options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                    headerStyle: {
                        backgroundColor: appcolor.primarycolor,
                    },
                }} ></Stack.Screen>


                <Stack.Screen name='TeacherList' component={TeacherList} options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                    headerStyle: {
                        backgroundColor: appcolor.primarycolor,
                    },
                }} ></Stack.Screen>


                <Stack.Screen name='ScheduleRules' component={ScheduleRules} options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                    headerStyle: {
                        backgroundColor: appcolor.primarycolor,
                    },
                }} ></Stack.Screen>





                <Stack.Screen name='Reschedule' component={Reschedule} options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                    headerStyle: {
                        backgroundColor: appcolor.primarycolor,
                    },
                }} ></Stack.Screen>


                <Stack.Screen name='Preschedule' component={Preschedule} options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                    headerStyle: {
                        backgroundColor: appcolor.primarycolor,
                    },
                }} ></Stack.Screen>


                <Stack.Screen name='Swap' component={Swap} options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                    headerStyle: {
                        backgroundColor: appcolor.primarycolor,
                    },
                }} ></Stack.Screen>




                <Stack.Screen name='SlotsChecking' component={SlotsChecking} options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                    headerStyle: {
                        backgroundColor: appcolor.primarycolor,
                    },
                }} ></Stack.Screen>





                <Stack.Screen name='StdDashboard' component={StdDashboard} options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                    headerStyle: {
                        backgroundColor: appcolor.primarycolor,
                    },
                }} ></Stack.Screen>


                <Stack.Screen name='StdAttendance' component={StdAttendance} options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                    headerStyle: {
                        backgroundColor: appcolor.primarycolor,
                    },
                }} ></Stack.Screen>


                <Stack.Screen name='TeacherDashboard' component={TeacherDashboard} options={{ headerShown: false }}></Stack.Screen>

                <Stack.Screen name='EditAttendance' component={EditAttendance} options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                    headerStyle: {
                        backgroundColor: appcolor.primarycolor,
                    },
                }} ></Stack.Screen>

                <Stack.Screen name='LiveStreamDetails' component={LiveStreamDetails} options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                    headerStyle: {
                        backgroundColor: appcolor.primarycolor,
                    },
                }} ></Stack.Screen>




                <Stack.Screen name='SessionsChr' component={SessionsChr} options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                    headerStyle: {
                        backgroundColor: appcolor.primarycolor,
                    },
                }} ></Stack.Screen>

                <Stack.Screen name='DirectorDashboard' component={DirectorDashBoard} options={{ headerShown: false }}></Stack.Screen>


                <Stack.Screen name='ChrDetail' component={ChrDetail} options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                    headerStyle: {
                        backgroundColor: appcolor.primarycolor,
                    },
                }} ></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

