

import React, { useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    Pressable,
} from 'react-native';

import { appcolor } from '../components/Colorss';
const DATA = [
    {
        id: '1',
        name: 'Visual Programming',
        Credit_hours: '3',
        Teach_By: 'Mr.Umar',
        image:
            'https://i.pinimg.com/550x/03/06/46/0306467bab5c7b61cf9823a263d2ab9b.jpg',
        attendence: '95%',
    },
    {
        id: '2',
        name: 'Web Engeenireng',
        Credit_hours: '3',
        Teach_By: 'Mr Amir',
        image:
            'https://i.pinimg.com/550x/03/06/46/0306467bab5c7b61cf9823a263d2ab9b.jpg',
        attendence: '45%',
    },
    {
        id: '3',
        name: 'Data Base ',
        Credit_hours: '3',
        Teach_By: 'Mr Zahid',
        image:
            'https://i.pinimg.com/550x/03/06/46/0306467bab5c7b61cf9823a263d2ab9b.jpg',
        attendence: '100%',
    },
];

const StdDashboard = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 30 }}>
                    Courses
                </Text>
            </View>

            <View style={{ flex: 1, padding: 5 }}>
                <FlatList
                    horizontal={true}
                    style={{ padding: 2 }}
                    data={DATA}
                    renderItem={({ item, index }) => {
                        return (
                            <Pressable
                                onPress={() => {
                                    navigation.navigate('StdAttendance', {
                                        CourseName: 'VP',
                                        Credit_hours: item.Credit_hours,
                                        Teach_By: item.Teach_By,
                                        Attendance: '90%',
                                    });
                                }}
                                style={{
                                    padding: 10,
                                    backgroundColor: '#afeeee',
                                    elevation: 2,
                                    margin: 3,
                                    borderRadius: 8,
                                    width: 280,
                                    height: 150,
                                }}>
                                <View
                                    style={{
                                        flexDirection: 'row',

                                        justifyContent: 'space-between',
                                    }}>
                                    <View>
                                        <Text
                                            style={{ fontSize: 16, color: '#333', fontWeight: 'bold' }}>
                                            {item.name}
                                        </Text>

                                        <Text style={styles.title}>Teach_By: {item.Teach_By}</Text>
                                    </View>
                                    <View>
                                        <Image
                                            source={{ uri: item.image }}
                                            style={{
                                                width: 60,
                                                height: 60,
                                                borderRadius: 40,
                                            }}
                                        />
                                    </View>
                                </View>
                                <View style={{ top: 36 }}>
                                    <Text style={{ color: '#333' }}>
                                        Attendance:{item.attendence}
                                    </Text>
                                </View>
                            </Pressable>
                        );
                    }}></FlatList>
            </View>


            {/* Below flatlist */}
            <View>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 30, marginBottom: 40 }}>
                    Recent
                </Text>
            </View>

            <View style={{ flex: 1, padding: 5 }}>
                <FlatList
                    style={{ padding: 2 }}
                    data={DATA}
                    renderItem={({ item, index }) => {
                        return (
                            <Pressable
                                onPress={() => {
                                    navigation.navigate('StdAttendance', {
                                        CourseName: 'VP',
                                        Credit_hours: item.Credit_hours,
                                        Teach_By: item.Teach_By,
                                        Attendance: '90%',
                                    });
                                }}
                                style={{
                                    padding: 10,
                                    backgroundColor: `#6495ed`,
                                    elevation: 2,
                                    margin: 3,
                                    borderRadius: 8,

                                    height: 100,
                                }}>
                                <View
                                    style={{
                                        flexDirection: 'row',

                                        justifyContent: 'space-between',
                                    }}>
                                    <View>
                                        <Text
                                            style={{
                                                fontSize: 16,
                                                color: 'black',
                                                fontWeight: 'bold',
                                            }}>
                                            {item.name}
                                        </Text>
                                    </View>
                                    <View>
                                        <Image
                                            source={{ uri: item.image }}
                                            style={{
                                                width: 60,
                                                height: 60,
                                                borderRadius: 40,
                                            }}
                                        />
                                    </View>
                                </View>
                                <View style={{}}>
                                    <Text style={{ color: 'black', fontWeight: '600' }}>
                                        Attendance:{item.attendence}
                                    </Text>
                                </View>
                            </Pressable>
                        );
                    }}></FlatList>
            </View>
        </SafeAreaView>
    );
};

export default StdDashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 30,
        marginVertical: 8,
        marginHorizontal: 10,
        borderRadius: 10,

        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 15,
        top: 20,
        color: 'black',
    },
});