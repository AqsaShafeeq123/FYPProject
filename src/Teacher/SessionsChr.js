

import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Pressable,
} from 'react-native';
import React from 'react';
import { useState } from 'react';
import { appcolor } from '../components/Colorss';
const DATA = [
    {
        id: '1',
        Date: '12-03-2023',
        InTime: '08:32',
        OutTime: '08:40',
    },
    {
        id: '2',
        Date: '12-03-2023',
        InTime: '08:32',
        OutTime: '08:40',
    },
    {
        id: '3',
        Date: '12-03-2023',
        InTime: '08:32',
        OutTime: '08:40',
    },
    {
        id: '4',
        Date: '12-03-2023',
        InTime: '08:32',
        OutTime: '08:40',
    },
    {
        id: '5',
        Date: '12-03-2023',
        InTime: '08:32',
        OutTime: '08:40',
    },
    {
        id: '6',
        Date: '12-03-2023',
        InTime: '08:32',
        OutTime: '08:40',
    },
    {
        id: '7',
        Date: '12-03-2023',
        InTime: '08:32',
        OutTime: '08:40',
    },
    {
        id: '8',
        Date: '12-03-2023',
        InTime: '08:32',
        OutTime: '08:40',
    },



];
const handleSavePress = () => {
    console.log('saved');
};

const SessionsChr = () => {
    // const { CourseName, Credit_hours, Teach_By, Attendance } = route.params;

    return (
        <View style={{ flex: 1 }}>
            {/* <View style={styles.txt}>
                <Text style={styles.text}>CourseName: {CourseName}</Text>
                <Text style={styles.text}>Credit_hours : {Credit_hours}</Text>
                <Text style={styles.text}>Teach_By: {Teach_By} </Text>
                <Text style={styles.text}>Attendance : {Attendance} </Text>
            </View> */}

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 5,
                    top: 10,
                    margin: 3,
                }}>
                <Text style={{ color: 'black' }}> Date </Text>
                <Text style={{ color: 'black' }}>              In Time </Text>
                <Text style={{ color: 'black' }}> Out Time</Text>
            </View>

            <FlatList
                style={{ top: 20 }}
                data={DATA}
                renderItem={({ item, index }) => {
                    return (
                        <Pressable
                            style={{
                                height: 70,
                                padding: 5,
                                backgroundColor: '#ffff',
                                elevation: 2,
                                margin: 3,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                borderRadius: 18,
                            }}>
                            <Text style={styles.title}> {item.Date}</Text>

                            <Text style={styles.title}>{item.InTime}</Text>

                            <Text style={styles.title}>{item.OutTime}</Text>
                        </Pressable>
                    );
                }}></FlatList>
            <View style={{ marginTop: 30 }}>
                <TouchableOpacity style={styles.button} onPress={handleSavePress}>
                    <Text style={{ color: 'white', textAlign: 'center' }}> Generate!</Text>

                </TouchableOpacity></View>
        </View>
    );
};

export default SessionsChr;

const styles = StyleSheet.create({
    txt: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: '100%',
        borderRadius: 30,
        marginTop: 20,
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 50,
    },
    text: {
        fontSize: 15,

        color: '#000',
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 10,
        borderRadius: 10,
    },
    title: {
        fontSize: 15,
        color: 'black',
    },
    button: {
        backgroundColor: appcolor.primarycolor,
        padding: 10,
        borderRadius: 15,
        marginBottom: 80,
        width: '40%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',

    },


});