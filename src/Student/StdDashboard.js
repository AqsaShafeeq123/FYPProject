import React, { useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,

    View,

    TouchableOpacity,
} from 'react-native';

import { appcolor } from '../components/Colorss';
const DATA = [
    {
        id: '1',
        name: 'Visual Programming',
        Credit_hours: '3',
        Teach_By: 'Mr.Umar',


    },
    {

        id: '2',
        name: 'Visual Programming',
        Credit_hours: '3',
        Teach_By: 'Mr.Umar',


    },
    {
        id: '3',
        name: 'Visual Programming',
        Credit_hours: '3',
        Teach_By: 'Mr.Umar',


    },
    {
        id: '4',
        name: 'Visual Programming',
        Credit_hours: '3',
        Teach_By: 'Mr.Umar',


    },
    {
        id: '5',
        name: 'Visual Programming',
        Credit_hours: '3',
        Teach_By: 'Mr.Umar',


    },
    {
        id: '6',
        name: 'Visual Programming',
        Credit_hours: '3',
        Teach_By: 'Mr.Umar',


    },
    {
        id: '7',
        name: 'Visual Programming',
        Credit_hours: '3',
        Teach_By: 'Mr.Umar',


    },
    {
        id: '8',
        name: 'Visual Programming',
        Credit_hours: '3',
        Teach_By: 'Mr.Umar',


    },

];

const StdDashboard = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 30 }}> Courses  </Text>
            <View style={{ flex: 1, padding: 5 }}>
                <FlatList
                    style={{ flex: 1 }}
                    data={DATA}
                    renderItem={({ item, index }) => {

                        return (
                            <View
                                style={{
                                    padding: 3,
                                    backgroundColor: '#ffff',
                                    elevation: 2,
                                    margin: 3,
                                    borderRadius: 8,
                                }}>
                                <TouchableOpacity onPress={() => {

                                    navigation.navigate('StdAttendance', {
                                        CourseName: 'VP',
                                        Credit_hours: item.Credit_hours,
                                        Teach_By: item.Teach_By,
                                        Attendance: '90%'
                                    });
                                }} style={[styles.item]}>
                                    <Text style={styles.title}>  {item.name}</Text>
                                    <Text style={styles.title}>Credit_hours:   {item.Credit_hours}</Text>
                                    <Text style={styles.title}>Teach_By:   {item.Teach_By}</Text>

                                </TouchableOpacity>
                            </View>
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
        color: 'black'
    },

});