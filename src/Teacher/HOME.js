import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Time from './Time';
import React, { useState, useEffect } from 'react';
import { appcolor } from '../components/Colorss';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HOME = ({ navigation, route }) => {

    const { dat } = route.params;


    // Api response store for get
    const [scheduleData, setScheduleData] = useState([]);

    // APi Code get Get timetable of teacher
    useEffect(() => {
        getSchedule();
    }, []);
    async function getSchedule() {
        try {
            let response = await fetch('http://192.168.1.104:8000/api/teacher-timetable-details/' + dat.name);
            let json = await response.json();
            const d = new Date()
            let currentDay = d.getDay()
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            let arr = []
            for (let i = 0; i < json.length; i++) {
                if (json[i].day == days[currentDay]) {
                    arr.push(json[i])
                }
            }
            setScheduleData(arr);
            console.log(arr);
        } catch (error) {
            console.log(error);
        }
    }
    const timers = [
        {
            starttime: '8:30',
            endtime: '10:00',
            venue: 'LT17',
            courseName: 'WEB',
            discipline: 'BCS-5A',
        },
        {
            starttime: '10:00',
            endtime: '11:30',
            venue: 'LT17',
            courseName: 'WEB',
            discipline: 'BCS-5A',
        },
        {
            starttime: '11:30',
            endtime: '1:00',
            venue: 'LT17',
            courseName: 'WEB',
            discipline: 'BCS-5A',
        },
        {
            starttime: '1:30',
            endtime: '3:00',
            venue: 'LT17',
            courseName: 'WEB',
            discipline: 'BCS-5A',
        },
        {
            starttime: '3:00',
            endtime: '4:30',
            venue: 'LT17',
            courseName: 'CC',
            discipline: 'BCS-6A',
        },
    ];

    return (
        <View style={{ flex: 1, marginTop: 8, padding: 4, backgroundColor: '#eee' }}>

            <View style={{ flexDirection: 'row', borderBottomWidth: 2, backgroundColor: '#fff', borderRadius: 9 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.text}>
                        {/* extracting obj */}
                        {dat.name}

                    </Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Ionicons

                        name="notifications-circle"
                        onPress={() => console.log('Edit pressed')}

                        size={42}
                        color='#00008b'
                        style={{
                            alignSelf: 'center',
                            marginRight: 30
                        }}


                    />
                    <Image source={{ uri: 'http://192.168.1.104:8000/api/get-user-image/UserImages/Teacher/' + dat.image }} style={styles.imgStyle} />
                </View>

            </View>

            {/* flatlist */}
            <View style={{ flex: 1, padding: 5, top: 10 }}>
                <FlatList
                    data={scheduleData}
                    // data={timers}

                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => {

                                navigation.navigate('ATTENDANCE', {
                                    Discipline: item.discipline,
                                    Course: item.courseName,



                                })
                            }}>
                            <Time
                                starttime={item.starttime}
                                endtime={item.endtime}
                                venue={item.venue}
                                courseName={item.courseName}
                                discipline={item.discipline}
                                day={item.day}
                            />
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>


    );
};

export default HOME;

const styles = StyleSheet.create({
    text: {
        fontSize: 15,

        color: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },

    button: {
        backgroundColor: appcolor.primarycolor,
        padding: 10,
        borderRadius: 15,
        marginBottom: 10
    },
    txt: {
        color: 'white',
        textAlign: 'center',
    },
    imgStyle: {
        width: 60,
        height: 60,
        borderRadius: 40,

    },

});






