

import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StdAttendance = ({ navigation, route }) => {

    const { COURSENAME, sID } = route.params;


    const [stddata, setStdData] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch(

                `http://192.168.1.101:8000/api/get-course-attendance?aridNumber=${sID}&courseName=${COURSENAME}`
            );
            const json = await response.json();
            console.log('stddata ', json);
            setStdData(json);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
        return () => { };
    }, []);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.tableContainer}>
                <View style={styles.tableHeader}>
                    <Text style={styles.tableHeaderText}>Date</Text>
                    <Text style={styles.tableHeaderText}>Status</Text>
                </View>
                {stddata.length === 0 ? (
                    <View style={styles.noClassHeld}>
                        <Text style={{ color: 'black' }}>No Class Held</Text>
                    </View>
                ) : (
                    stddata.map((item, index) => (
                        <View style={styles.tableRow} key={index}>
                            <Text style={styles.tableRowText}>{item.Date}</Text>
                            <Text style={styles.tableRowText}>{item.Status ? 'P' : 'A'}</Text>
                        </View>
                    ))
                )}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    tableContainer: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,

    },
    tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingBottom: 18,
        marginBottom: 18,

    },
    tableHeaderText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black'
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 38,
        color: 'black'
    },
    tableRowText: {
        fontSize: 16,
        color: 'black'
    },
    noClassHeld: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 42,
    },
});

export default StdAttendance;





