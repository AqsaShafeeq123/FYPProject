import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { appcolor } from '../components/Colorss';
import _Component from '../Screens/_Component';
import moment from 'moment';
import axios from 'axios';
const FreeSlotPre = ({ navigation, route }) => {
    const { Name, Sdate, EDate, Disp, teacherSlotId, } = route.params;

    // console.log(Name, 'hghghh')
    //  console.log(Sdate, EDate, Disp);
    const [data, setData] = useState([]);
    const [venue, setVenue] = useState([]);
    const [startTime, setStartTime] = useState("")
    const [endTime, setEndTime] = useState("")
    const [day, setDay] = useState("")
    const [date, setDate] = useState([]);

    let counter = 0;

    let [selectedVenues, setselectedVenues] = useState([
        '',
        '',
        '',
        '',
        '...',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
    ]);

    const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri'];
    const lstdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    useEffect(() => {
        const fetchData = async () => {
            const venueResponse = await fetch(
                'http://192.168.1.104:8000/api/venue-details',
            );
            const venueJson = await venueResponse.json();
            setVenue(venueJson.data);

            const timetableResponse = await fetch(
                `http://192.168.1.104:8000/api/timetable-details-by-date?startdate=${Sdate}&enddate=${EDate}`,
            );
            const timetableJson = await timetableResponse.json();
            setData(timetableJson);
        };

        fetchData();
    }, [Sdate, EDate]);

    //THIS METHOD CAN BE USED TO ACCES THE VALUE THAT WAS SLECTED BY A PARTICULAR PICKER, you can add or remove parameters as required.
    const getValue = itemValue => {
        setselectedVenues(itemValue);
        //do whatever you want with the value.
        //   console.log(itemValue);
    };

    const getStartTime = itemValue => {
        setStartTime(itemValue);
        //do whatever you want with the value.
        //  console.log(itemValue);
    };

    const getEndTime = itemValue => {
        setEndTime(itemValue);
        //do whatever you want with the value.
        // console.log(itemValue);
    };

    const getDay = itemValue => {
        setDay(itemValue);
        //do whatever you want with the value.
        //console.log(itemValue);
    };

    const getDate = itemValue => {
        setDate(itemValue);
        //do whatever you want with the value.
        // console.log(itemValue);
    };




    const times = [
        '08:30-10:00',
        '10:00-11:30',
        '11:30-01:00',
        '01:30-03:00',
        '03:00-04:30',
    ];
    const slots = [0, 1, 2, 3, 4];

    // btn
    const handlePress = () => {


        let tempDate = ''
        const startDate = moment(Sdate);
        const endDate = moment(EDate);

        while (startDate.isSameOrBefore(endDate)) {

            if (startDate.format('dddd') == day) {
                tempDate = startDate.format('YYYY-MM-DD')
            }
            startDate.add(1, 'day');
        }


        const apiData = {
            "id": 0,
            "teacherSlotId": 0,
            "date": tempDate,
            "day": day,
            "starttime": startTime,
            "endtime": endTime,
            "venueName": selectedVenues,
            "status": false
        }
        console.log(apiData)
        navigation.navigate('ClassPrescheduled', {

            Namee: Name.name,
            date: tempDate,
            day: day,
            starttime: startTime,
            endtime: endTime,
            venueName: selectedVenues,
            discipline: Disp,


        });



    };


    return (
        <View style={{ flex: 1, paddingTop: 8 }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderRadius: 10,
                    marginHorizontal: '5%',
                    padding: 10,
                    backgroundColor: '#f2f2f2',
                }}>
                {/* <Image
          source={UmerImage}
          style={{width: 40, height: 40, borderRadius: 20}}
        /> */}
                <Text style={{ marginLeft: 8, fontSize: 14 }}>Mr Umer</Text>
            </View>
            <View style={{ marginVertical: 8, marginHorizontal: '5%' }}>
                <View
                    style={{
                        flexDirection: 'row',
                        padding: 2,
                        marginTop: 2,
                        backgroundColor: '#2196F3',
                        borderRadius: 10,
                        width: '104%',
                        // height: '90%'
                    }}>
                    <View
                        style={{
                            width: '15%',
                            paddingLeft: 5,
                            paddingTop: 30,
                            borderRadius: 10,
                        }}>
                        {times.map((slot, index) => (
                            <View
                                style={{
                                    flex: 1,
                                    paddingTop: 10,
                                    backgroundColor: '#2196F3',
                                    height: 60,
                                }}
                                key={index}>
                                <Text style={{ fontSize: 12 }}>{slot}</Text>
                            </View>
                        ))}
                    </View>
                    <View style={{ flex: 1, borderTopRightRadius: 10 }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingHorizontal: 2,
                                paddingVertical: 4,
                                backgroundColor: '#2196F3',
                                borderTopRightRadius: 10,
                                alignItems: 'center',
                            }}>
                            {days.map((day, index) => (
                                <Text
                                    key={index}
                                    style={{
                                        fontSize: 12,
                                        fontWeight: 'bold',
                                        color: 'white',
                                        width: '10%',
                                        textAlign: 'center',
                                    }}>
                                    {day}
                                </Text>
                            ))}
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',

                                height: 300,
                                backgroundColor: '#ccc',
                                borderRadius: 10,
                            }}>
                            {lstdays.map((d, index) => (
                                <View key={index}>
                                    {times.map((t, i) => {
                                        let temp = [...venue];

                                        data.forEach(timetable => {
                                            if (
                                                timetable.starttime === t.split('-')[0] &&
                                                timetable.day === d
                                            ) {
                                                temp = temp.filter(
                                                    item => item.name !== timetable.venue,
                                                );
                                            }
                                        });

                                        return (
                                            <_Component
                                                key={d + i}
                                                selectedVenue={selectedVenues[index + i]}
                                                getValue={getValue}
                                                temp={temp}
                                                getstartTime={getStartTime}
                                                startTime={t.split('-')[0]}
                                                getendTime={getEndTime}
                                                endTime={t.split('-')[1]}
                                                getday={getDay}
                                                day={d}
                                            />
                                        );
                                    })}
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <Text style={styles.buttonText}> okay </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default FreeSlotPre;

const styles = StyleSheet.create({
    txt: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: '95%',
        borderRadius: 30,
        marginTop: 20,

        marginLeft: 10,
        marginBottom: 30,
    },
    text: {
        fontSize: 15,

        color: '#000',
        fontWeight: 'bold',
    },
    buttonWrapper: {
        flex: 1,
    },
    button: {
        backgroundColor: '#4682b4',
        margin: 80,
        borderRadius: 5,
        alignItems: 'center',
        width: 100,
        height: 40,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonText1: {
        color: '#fff',
        fontSize: 14,
    },
});