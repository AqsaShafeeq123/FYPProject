
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from '../components/Navigation';
import Login from './Login';
// Admin side
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
import FreeSlot from '../Screens/FreeSlot';
import AddUser from '../Screens/AddUser';
import ClassRescheduled from '../Screens/ClassRescheduled';
import FreeSlotPre from '../Screens/FreeSlotPre';
import ClassPrescheduled from '../Screens/ClassPrescheduled';
import AssignCourse from '../Screens/AssignCourse';
import StudentDetails from '../Screens/StudentDetails';
import RecordingDetails from '../Screens/RecordingDetails';
import _Component from '../Screens/_Component';
import SwappingUsers from '../Screens/SwappingUsers';
import Demo from '../Screens/Demo';
import DemoVideoDetails from '../Screens/DemoVideoDetails';
import RecordingsPlayer from '../Screens/RecordingsPlayer';


// Std Side
import StdDashboard from '../Student/StdDashboard';
import StdAttendance from '../Student/StdAttendance';
import Notificationns from '../Student/Notificationns';

// Teacher Side

import TeacherDashboard from '../Teacher/TeacherDashboard';

import ATTENDANCE from '../Teacher/ATTENDANCE';

import TeacherClaim from '../Teacher/TeacherClaim';
import ClaimVideo from '../Teacher/ClaimVideo';
import ActivityReport from '../Teacher/ActivityReport';
import TeacherChr from '../Teacher/TeacherChr';
import NOTIFICATION from '../Teacher/NOTIFICATION';


// Director Side
import DirectorDashBoard from '../Director/DirectorDashBoard';
import ChrDetail from '../Director/ChrDetail';
import ClassHeldReport from '../Director/ClassHeldReport';

import Activity from '../Director/Activity';
import ReportBtn from '../Screens/ReportBtn';
import TimeTable from '../Screens/TimeTable';
import ViewChr from '../Screens/ViewChr';
import AllReport from '../Screens/AllReport';
import ViewActivity from '../Screens/ViewActivity';
import ViewShortReport from '../Screens/ViewShortReport';
import ViewShortActivity from '../Screens/ViewShortActivity';
import ViewSpecificChr from '../Screens/ViewSpecificChr';







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




                <Stack.Screen name='FreeSlot' component={FreeSlot} options={{
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





                <Stack.Screen name='StdDashboard' component={StdDashboard} options={{ headerShown: false }} ></Stack.Screen>


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




                <Stack.Screen name='AddUser' component={AddUser} options={{
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



                <Stack.Screen name='ClassRescheduled' component={ClassRescheduled} options={{
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



                <Stack.Screen name='FreeSlotPre' component={FreeSlotPre} options={{
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


                <Stack.Screen name='ClassPrescheduled' component={ClassPrescheduled} options={{
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


                <Stack.Screen name='AssignCourse' component={AssignCourse} options={{
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


                <Stack.Screen name='StudentDetails' component={StudentDetails} options={{
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


                <Stack.Screen name='ATTENDANCE' component={ATTENDANCE} options={{
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

                <Stack.Screen name='ClassHeldReport' component={ClassHeldReport} options={{
                    headerShown: false

                }}></Stack.Screen>

                <Stack.Screen name='ActivityReport' component={ActivityReport} options={{
                    headerShown: false

                }}></Stack.Screen>


                <Stack.Screen name='TeacherChr' component={TeacherChr} options={{
                    headerShown: false

                }}></Stack.Screen>

                <Stack.Screen name='Activity' component={Activity} options={{
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


                <Stack.Screen name='RecordingDetails' component={RecordingDetails} options={{
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

                <Stack.Screen name='_Component' component={_Component} options={{
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


                <Stack.Screen name='SwappingUsers' component={SwappingUsers} options={{
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


                <Stack.Screen name='Demo' component={Demo} options={{
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

                <Stack.Screen name='DemoVideoDetails' component={DemoVideoDetails} options={{
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



                <Stack.Screen name='RecordingsPlayer' component={RecordingsPlayer} options={{
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


                <Stack.Screen name='TeacherClaim' component={TeacherClaim} options={{
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


                <Stack.Screen name='ClaimVideo' component={ClaimVideo} options={{
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


                <Stack.Screen name='Notificationns' component={Notificationns} options={{
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


                <Stack.Screen name='NOTIFICATION' component={NOTIFICATION} options={{
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


                <Stack.Screen name='ReportBtn' component={ReportBtn} options={{
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

                <Stack.Screen name='TimeTable' component={TimeTable} options={{
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


                <Stack.Screen name='ViewChr' component={ViewChr} options={{
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

                <Stack.Screen name='AllReport' component={AllReport} options={{
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

                <Stack.Screen name='ViewActivity' component={ViewActivity} options={{
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

                <Stack.Screen name='ViewShortReport' component={ViewShortReport} options={{
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



                <Stack.Screen name='ViewShortActivity' component={ViewShortActivity} options={{
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


                <Stack.Screen name='ViewSpecificChr' component={ViewSpecificChr} options={{
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

