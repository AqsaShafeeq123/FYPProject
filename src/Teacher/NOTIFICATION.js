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
        name: 'Aqsa Claimed her attendance ',

    },
    {
        id: '2',
        name: 'Aqsa Claimed her attendance ',
    },
    {
        id: '3',
        name: 'Aqsa Claimed her attendance ',
    },
    {
        id: '4',
        name: 'Aqsa Claimed her attendance ',

    },
    {
        id: '5',
        name: 'Aqsa Claimed her attendance ',
    },
];





const NOTIFICATION = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>

            <View style={{ flex: 1, padding: 5 }}>
                <FlatList
                    style={{ flex: 1 }}
                    data={DATA}
                    renderItem={({ item, index }) => {
                        {
                            return (
                                <View
                                    style={{
                                        padding: 5,
                                        backgroundColor: '#ffff',
                                        elevation: 2,
                                        margin: 3,
                                        borderRadius: 8,
                                    }}>
                                    <TouchableOpacity onPress={() => { }} style={[styles.item]}>

                                        <Text style={styles.title}>{item.name}</Text>
                                    </TouchableOpacity>
                                </View>
                            );
                        }
                    }}></FlatList>

                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('EditAttendance') }}>
                    <Text style={styles.txt}> Change All</Text>

                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
};

export default NOTIFICATION;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 15,
        color: 'black'
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
    txt: {
        color: 'white',
        textAlign: 'center',
    },


});