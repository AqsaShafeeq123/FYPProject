

// import {
//     StatusBar,
//     StyleSheet,
//     Text,
//     View,
//     FlatList,
//     TouchableOpacity,
//     Pressable,
// } from 'react-native';
// import React from 'react';
// import { useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// const DATA = [
//     {
//         id: '1',
//         date: '21-1-23',
//         status: 'P',
//     },
//     {
//         id: '2',
//         date: '21-1-23',
//         status: 'P',
//     },
//     {
//         id: '3',
//         date: '21-1-23',
//         status: 'A',
//     },
//     {
//         id: '4',
//         date: '21-1-23',
//         status: 'P',
//     },
//     {
//         id: '5',
//         date: '21-1-23',
//         status: 'A',
//     },
//     {
//         id: '6',
//         date: '21-1-23',
//         status: 'A',
//     },
//     {
//         id: '7',
//         date: '21-1-23',
//         status: 'A',
//     },
//     {
//         id: '8',
//         date: '21-1-23',
//         status: 'A',
//     },
//     {
//         id: '9',
//         date: '21-1-23',
//         status: 'A',
//     },
// ];

// const StdAttendance = ({ navigation, route }) => {
//     const { COURSENAME, sID } = route.params;





//     // APi
//     useEffect(() => {


//         getData();

//     }, []);






//     // APi Code
//     const [stddata, setStdData] = useState([]);
//     const getData = async () => {
//         try {
//             console.log(sID, COURSENAME)
//             const response = await fetch(
//                 `http://192.168.1.104:8000/api/get-course-attendance?aridNumber=${sID}&courseName=${COURSENAME}`

//             );
//             const json = await response.json();
//             console.log('data ', json);
//             console.log(json[0].Date)
//             setStdData(json);
//         } catch (error) {
//             console.log(error);
//         }
//     };



//     return (
//         <View style={{ flex: 1, }}>


//             <View
//                 style={{
//                     flexDirection: 'row',
//                     justifyContent: 'space-between',
//                     padding: 5,
//                     top: 10,
//                     margin: 3,
//                 }}>
//                 <Text style={{ color: 'black', backgroundColor: '#afeeee' }}> DATE </Text>
//                 <Text style={{ color: 'black', backgroundColor: '#afeeee' }}> STATUS</Text>
//             </View>

//             <FlatList
//                 style={{ top: 10 }}
//                 data={stddata}
//                 keyExtractor={(item, index) => index.toString()}
//                 renderItem={({ item, index }) => {

//                     <Pressable
//                         style={{
//                             height: 100,
//                             padding: 5,
//                             backgroundColor: '#ffff',
//                             elevation: 2,
//                             margin: 3,
//                             flexDirection: 'row',
//                             justifyContent: 'space-between',
//                             borderRadius: 8,
//                         }}>
//                         <Text style={styles.title}> {item.Date}</Text>

//                         <Text style={styles.title}>{item.Status}</Text>
//                     </Pressable>

//                 }}></FlatList>


//         </View >
//     );
// };

// export default StdAttendance;

// const styles = StyleSheet.create({
//     txt: {
//         backgroundColor: '#6495ed',
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: 100,
//         width: '100%',
//         borderRadius: 30,
//         marginTop: 20,
//         marginRight: 15,
//         // marginLeft: 5,
//         marginBottom: 50,
//     },
//     text: {
//         fontSize: 15,

//         color: '#000',
//     },
//     item: {
//         padding: 20,
//         marginVertical: 8,
//         marginHorizontal: 10,
//         borderRadius: 10,
//     },
//     title: {
//         fontSize: 15,
//         color: 'black',
//     },
// });

// -------------------------------------------









import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StdAttendance = ({ navigation, route }) => {

    const { COURSENAME, sID } = route.params;


    const [stddata, setStdData] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch(

                `http://192.168.1.104:8000/api/get-course-attendance?aridNumber=${sID}&courseName=${COURSENAME}`
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





