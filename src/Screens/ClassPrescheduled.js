import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Button, Dialog, Portal, Provider, Modal } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import { appcolor } from '../components/Colorss';
import axios from 'axios';
const ClassPrescheduled = ({ navigation, route }) => {
    const { Namee,
        date,
        day,
        starttime,
        endtime,
        venueName,
        discipline, } = route.params;
    // console.log('route', route.params)

    console.log(Namee + 'aqsaa12345')


    // dlt modal
    const [dvisible, setdVisible] = React.useState(false);
    const [timeTableId, setTimeTableId] = useState('')
    const showDialog = (timeTableId) => {
        setTimeTableId(timeTableId)
        setdVisible(true)
    }

    const hideDialog = () => {

        setdVisible(false);
    }



    console.log("timeTableId", timeTableId)


    // Api response store for get
    const [scheduleData, setScheduleData] = useState([]);

    // APi Code get Get Schedule
    useEffect(() => {
        getSchedule();
    }, []);
    async function getSchedule() {
        try {
            let response = await fetch('http://192.168.1.104:8000/api/teacher-timetable-details/' + Namee);
            let json = await response.json();

            setScheduleData(json);
            console.log(json);
        } catch (error) {
            console.log(error);
        }
    }


    // -----------------------
    function handleClick() {
        const data = {
            "id": 0,
            "timeTableId": timeTableId,
            "date": date,
            "day": day,
            "starttime": starttime,
            "endtime": endtime,
            "venueName": venueName,
            "status": false
        }
        console.log('data', data)
        axios.post('http://192.168.1.104:8000/api/add-preschedule', data).then((response) => {
            if (response.data['data'] == 'okay') {
                alert('Class Preschedules')
            } else {
                alert('Error')
            }


        })


    }

    const teacherSchedule = [
        {
            "id": 925,
            "discipline": "BSSE-2A",
            "starttime": "08:30",
            "endtime": "10:00",
            "day": "Monday",
            "courseCode": "CS400",
            "courseName": "DBS",
            "venue": "Lab1",
            "teacherName": "Abdul Rehman",
            "sessionId": "1",
            "sessionName": ""
        },
        {
            "id": 930,
            "discipline": "BCS-2E",
            "starttime": "11:30",
            "endtime": "01:00",
            "day": "Monday",
            "courseCode": "CS400",
            "courseName": "DBS",
            "venue": "Lab6",
            "teacherName": "Abdul Rehman",
            "sessionId": "1",
            "sessionName": ""
        },
        {
            "id": 972,
            "discipline": "BCS-2B",
            "starttime": "03:00",
            "endtime": "04:30",
            "day": "Monday",
            "courseCode": "CS400",
            "courseName": "DBS",
            "venue": "Lab1",
            "teacherName": "Noman,Abdul Rehman",
            "sessionId": "1",
            "sessionName": ""
        },
        {
            "id": 1006,
            "discipline": "BSSE-2A",
            "starttime": "08:30",
            "endtime": "10:00",
            "day": "Tuesday",
            "courseCode": "CS423",
            "courseName": "OOP",
            "venue": "Lab7",
            "teacherName": "Abdul Rehman",
            "sessionId": "1",
            "sessionName": ""
        },
        {
            "id": 1013,
            "discipline": "BCS-2D",
            "starttime": "10:00",
            "endtime": "11:30",
            "day": "Tuesday",
            "courseCode": "CS400",
            "courseName": "DBS",
            "venue": "Lab6",
            "teacherName": "Abdul Rehman",
            "sessionId": "1",
            "sessionName": ""
        },
        {
            "id": 1044,
            "discipline": "BAI-4A",
            "starttime": "11:30",
            "endtime": "01:00",
            "day": "Tuesday",
            "courseCode": "MTH435",
            "courseName": "LA",
            "venue": "Lab3",
            "teacherName": "Dr. Mohsin,Abdul Rehman",
            "sessionId": "1",
            "sessionName": ""
        },
        {
            "id": 1050,
            "discipline": "BAI-2A",
            "starttime": "01:30",
            "endtime": "03:00",
            "day": "Tuesday",
            "courseCode": "CS423",
            "courseName": "OOP",
            "venue": "Lab7",
            "teacherName": "Abdul Rehman",
            "sessionId": "1",
            "sessionName": ""
        },
        {
            "id": 1085,
            "discipline": "BSSE-2B",
            "starttime": "03:00",
            "endtime": "04:30",
            "day": "Tuesday",
            "courseCode": "CS423",
            "courseName": "OOP",
            "venue": "Lab2",
            "teacherName": "Abdul Rehman",
            "sessionId": "1",
            "sessionName": ""
        },
        {
            "id": 1086,
            "discipline": "BCS-2E",
            "starttime": "08:30",
            "endtime": "10:00",
            "day": "Wednesday",
            "courseCode": "CS400",
            "courseName": "DBS",
            "venue": "Lab6",
            "teacherName": "Ahsan,Abdul Rehman",
            "sessionId": "1",
            "sessionName": ""
        },
        {
            "id": 1161,
            "discipline": "BSSE-2A",
            "starttime": "01:30",
            "endtime": "03:00",
            "day": "Wednesday",
            "courseCode": "CS400",
            "courseName": "DBS",
            "venue": "Lab3",
            "teacherName": "Tayyaba,Abdul Rehman",
            "sessionId": "1",
            "sessionName": ""
        },
        {
            "id": 1179,
            "discipline": "BSSE-2A",
            "starttime": "03:00",
            "endtime": "04:30",
            "day": "Wednesday",
            "courseCode": "CS423",
            "courseName": "OOP",
            "venue": "Lab7",
            "teacherName": "Noman,Abdul Rehman",
            "sessionId": "1",
            "sessionName": ""
        },
        {
            "id": 1184,
            "discipline": "BCS-2C",
            "starttime": "08:30",
            "endtime": "10:00",
            "day": "Thursday",
            "courseCode": "CS400",
            "courseName": "DBS",
            "venue": "Lab6",
            "teacherName": "Ahsan,Abdul Rehman",
            "sessionId": "1",
            "sessionName": ""
        },
        {
            "id": 1217,
            "discipline": "BSSE-2B",
            "starttime": "10:00",
            "endtime": "11:30",
            "day": "Thursday",
            "courseCode": "CS423",
            "courseName": "OOP",
            "venue": "Lab2",
            "teacherName": "Noman,Abdul Rehman",
            "sessionId": "1",
            "sessionName": ""
        },
        {
            "id": 1237,
            "discipline": "BAI-3A",
            "starttime": "01:30",
            "endtime": "03:00",
            "day": "Thursday",
            "courseCode": "MTH435",
            "courseName": "LA",
            "venue": "Lab1",
            "teacherName": "Shahid Rasheed,Abdul Rehman",
            "sessionId": "1",
            "sessionName": ""
        },
        {
            "id": 1257,
            "discipline": "BCS-2B",
            "starttime": "03:00",
            "endtime": "04:30",
            "day": "Thursday",
            "courseCode": "CS400",
            "courseName": "DBS",
            "venue": "Lab3",
            "teacherName": "Abdul Rehman",
            "sessionId": "1",
            "sessionName": ""
        },
        {
            "id": 1276,
            "discipline": "BAI-2A",
            "starttime": "08:30",
            "endtime": "10:00",
            "day": "Friday",
            "courseCode": "CS423",
            "courseName": "OOP",
            "venue": "Lab1",
            "teacherName": "ZerAfshan,Abdul Rehman",
            "sessionId": "1",
            "sessionName": ""
        },
        {
            "id": 1300,
            "discipline": "BCS-4B",
            "starttime": "10:00",
            "endtime": "11:30",
            "day": "Friday",
            "courseCode": "MTH435",
            "courseName": "LA",
            "venue": "Lab2",
            "teacherName": "Shahid Rasheed,Abdul Rehman",
            "sessionId": "1",
            "sessionName": ""
        },
        {
            "id": 1317,
            "discipline": "BCS-2D",
            "starttime": "11:30",
            "endtime": "01:00",
            "day": "Friday",
            "courseCode": "CS400",
            "courseName": "DBS",
            "venue": "Lab3",
            "teacherName": "Ahsan,Abdul Rehman",
            "sessionId": "1",
            "sessionName": ""
        },
        {
            "id": 1335,
            "discipline": "BCS-2C",
            "starttime": "01:30",
            "endtime": "03:00",
            "day": "Friday",
            "courseCode": "CS400",
            "courseName": "DBS",
            "venue": "Lab2",
            "teacherName": "Abdul Rehman",
            "sessionId": "1",
            "sessionName": ""
        }
    ]

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    const timeSlots = [
        { startTime: '08:30', endTime: '10:00' },
        { startTime: '10:00', endTime: '11:30' },
        { startTime: '11:30', endTime: '01:00' },
        { startTime: '01:30', endTime: '03:00' },
        { startTime: '03:00', endTime: '04:30' },
    ];

    const structureSchedule = () => {
        let schedule = []
        timeSlots.forEach((timeSlot) => {
            const obj = { starttime_endtime: `${timeSlot.startTime}-${timeSlot.endTime}` };

            ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].forEach((day) => {
                const course = scheduleData.find((item) => item.day === day && item.starttime === timeSlot.startTime && item.endtime === timeSlot.endTime) || '';
                if (course.discipline && course.venue) {
                    obj[day] = {
                        timeTableId: course.id,
                        detail: `${course.discipline}\n ${course.venue} \n${course.courseCode}-${course.courseName}`
                    };
                    //obj[day] = `${course.discipline}\n ${course.venue} \n${course.courseCode}-${course.courseName}`;
                }
            });
            schedule.push(obj);
        });

        // console.log(OutPutArray);
        return schedule
    }

    const DATA = structureSchedule()


    return (

        <Provider style={styles.container}>
            <Portal>
                <Dialog visible={dvisible} onDismiss={hideDialog}>
                    <Dialog.Title>Delete</Dialog.Title>
                    <Dialog.Content>
                        <Text variant="bodyMedium">Are You Sure To Preschedule?</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button
                            onPress={() => {
                                handleClick()
                                hideDialog();
                            }

                            }>
                            Yes
                        </Button>
                        <Button onPress={() => {
                            setTimeTableId('')
                            hideDialog()
                        }}>No</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>

            <View style={styles.txt}>

                {/* <Image source={{ uri: 'http://192.168.1.104:8000/api/get-user-image/UserImages/Teacher/' + Img }}
                    style={styles.imgStyle} /> */}
                <Text style={styles.text}>{Namee}</Text>

            </View>

            <View style={styles.daysWrapper}>
                {
                    days.map((day, index) => (
                        <Text key={index} style={{ fontSize: 12, color: 'black', fontWeight: "700" }}>{day}</Text>
                    ))
                }

            </View>


            <FlatList
                data={DATA}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item: { starttime_endtime, Monday, Tuesday, Wednesday, Thursday, Friday } }) => (
                    <View style={styles.timeTableWrapper}>
                        <View style={styles.timeWrapper}>
                            <Text style={{ fontSize: 10, color: 'black', fontWeight: "700" }}>{starttime_endtime}</Text>
                        </View>
                        {[Monday, Tuesday, Wednesday, Thursday, Friday].map((value, index) => (
                            //  console.log("value", value)

                            <TouchableOpacity activeOpacity={value ? 0.5 : 1} onPress={() => { value && showDialog(value?.timeTableId); }} key={index} style={[styles.gridBox, { backgroundColor: value ? appcolor.primarycolor : '' }]}>
                                <Text style={[styles.gridText, { color: '#fff' }]}>{value?.detail}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
            />

        </Provider>

    );
};

export default ClassPrescheduled;

const styles = StyleSheet.create({

    container: {
        flex: 1,

    },
    timeTableWrapper: {
        padding: 5,
        margin: 3,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    daysWrapper: {
        width: 310,
        alignSelf: "flex-end",
        flexDirection: "row",
        justifyContent: "space-around",
        right: 10
    },
    timeWrapper: {
        flexWrap: "wrap",
        width: 32,
        height: 40,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridBox: {
        borderWidth: 1,
        width: 60,
        height: 50,
        marginHorizontal: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridText: {
        textAlign: "center",
        fontSize: 10,
        color: 'black'
    },
    txt: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',

        height: 100,
        width: '95%',
        borderRadius: 20,
        marginTop: 20,
        padding: 9,
        marginLeft: 10,
        marginBottom: 30,
        flexDirection: 'row'
    },
    text: {
        fontSize: 15,

        color: '#000',
        fontWeight: 'bold',
        marginRight: 180,
    },

    imgStyle: {
        width: 60,
        height: 60,
        borderRadius: 40,
        marginRight: 2,

    },


});









