

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

const DATA = [
    {
        id: '1',
        date: '21-1-23',
        status: 'P',
    },
    {
        id: '2',
        date: '21-1-23',
        status: 'P',
    },
    {
        id: '3',
        date: '21-1-23',
        status: 'A',
    },
    {
        id: '4',
        date: '21-1-23',
        status: 'P',
    },
    {
        id: '5',
        date: '21-1-23',
        status: 'A',
    },
    {
        id: '6',
        date: '21-1-23',
        status: 'A',
    },
    {
        id: '7',
        date: '21-1-23',
        status: 'A',
    },
    {
        id: '8',
        date: '21-1-23',
        status: 'A',
    },
    {
        id: '9',
        date: '21-1-23',
        status: 'A',
    },
];

const StdAttendance = ({ navigation, route }) => {
    // const { CourseName, Credit_hours, Teach_By, Attendance } = route.params;

    return (
        <View style={{ flex: 1, }}>
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
                <Text style={{ color: 'black', backgroundColor: '#afeeee' }}> DATE </Text>
                <Text style={{ color: 'black', backgroundColor: '#afeeee' }}> STATUS</Text>
            </View>

            <FlatList
                style={{ top: 10 }}
                data={DATA}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <Pressable
                            style={{
                                height: 100,
                                padding: 5,
                                backgroundColor: '#ffff',
                                elevation: 2,
                                margin: 3,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                borderRadius: 8,
                            }}>
                            <Text style={styles.title}> {item.date}</Text>

                            <Text style={styles.title}>{item.status}</Text>
                        </Pressable>
                    );
                }}></FlatList>
        </View>
    );
};

export default StdAttendance;

const styles = StyleSheet.create({
    txt: {
        backgroundColor: '#6495ed',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: '100%',
        borderRadius: 30,
        marginTop: 20,
        marginRight: 15,
        // marginLeft: 5,
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
});