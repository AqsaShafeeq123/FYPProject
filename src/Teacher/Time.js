import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Time = ({ starttime, endtime, venue, courseName, discipline }) => {
    const [currentStatus, setCurrentStatus] = useState('Running');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const start = new Date();
            const end = new Date();
            const [startHour, startMinute] = starttime.split(':');
            const [endHour, endMinute] = endtime.split(':');
            start.setHours(startHour, startMinute, 0, 0);
            end.setHours(endHour, endMinute, 0, 0);

            if (now > end) {
                setCurrentStatus('Held');
            } else if (now < start) {
                const timeDifference = Math.abs(start - now);
                const hours = Math.floor(timeDifference / 3600000);
                const minutes = Math.floor((timeDifference % 3600000) / 60000);
                const seconds = Math.floor((timeDifference % 60000) / 1000);
                setCurrentStatus(`Start in: ${hours}H ${minutes}M ${seconds}S`);
            } else {
                setCurrentStatus('Running');
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <View
            style={[
                currentStatus === 'Running'
                    ? { backgroundColor: '#ffffff' }
                    : { backgroundColor: 'slateblue' },
                {
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: 2,
                    elevation: 5,
                    margin: 3,
                    borderRadius: 8,
                },
            ]}>
            <Text
                style={[
                    currentStatus === 'Running' ? { color: '#333' } : { color: '#ffffff' },
                    {
                        fontSize: 25,
                        left: 10,
                        alignSelf: 'center',
                    },
                ]}>
                {currentStatus}
            </Text>
            <View
                style={[
                    currentStatus === 'Running'
                        ? { borderBottomColor: '#333' }
                        : { borderBottomColor: '#ffffff' },
                    { borderBottomWidth: 2, margin: 3 },
                ]}></View>
            <View style={{ padding: 5 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons
                        name="location"
                        size={30}
                        style={
                            currentStatus === 'Running' ? { color: 'blue' } : { color: '#ffffff' }
                        }></Ionicons>
                    <Text
                        style={[
                            currentStatus === 'Running'
                                ? { color: '#333' }
                                : { color: '#ffffff' },
                            {
                                fontSize: 20,
                                left: 10,
                            },
                        ]}>
                        Venue:{venue}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons
                        name="book"
                        size={30}
                        style={
                            currentStatus === 'Running' ? { color: 'blue' } : { color: '#ffffff' }
                        }></Ionicons>
                    <Text
                        style={[
                            currentStatus === 'Running'
                                ? { color: '#333' }
                                : { color: '#ffffff' },
                            {
                                fontSize: 20,
                                left: 10,
                            },
                        ]}>
                        Course:{courseName}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons
                        name="md-school"
                        size={30}
                        style={
                            currentStatus === 'Running' ? { color: 'blue' } : { color: '#ffffff' }
                        }></Ionicons>
                    <Text
                        style={[
                            currentStatus === 'Running'
                                ? { color: '#333' }
                                : { color: '#ffffff' },
                            {
                                fontSize: 20,
                                left: 10,
                            },
                        ]}>
                        Discipline:{discipline}
                    </Text>
                </View>
            </View>
        </View>
    );
};
export default Time;