import { FlatList, StyleSheet, Text, View } from 'react-native';

import React, { useState } from 'react';
import { appcolor } from '../components/Colorss';

const HOME = ({ navigation, route }) => {
    // const { Name, Email } = route.params;


    const [checked, setChecked] = React.useState(false);


    const DATA = [
        {
            time: '8:30-10',
            slot1: 'CS-1A LT-10',
            slot2: '',
            slot3: '',
            slot4: '',
            slot5: '',
        },
        {
            time: '10-11:30',
            slot1: '',
            slot2: 'CS-1A LT-10',
            slot3: '',
            slot4: '',
            slot5: '',
        },
        {
            time: '11:30-1',
            slot1: '',
            slot2: '',
            slot3: 'CS-1A LT-10',
            slot4: '',
            slot5: '',
        },
        {
            time: '1:30-3:00',
            slot1: '',
            slot2: '',
            slot3: '',
            slot4: 'CS-1A LT-10',
            slot5: '',
        },
        {
            time: '3:00-4:30',
            slot1: '',
            slot2: '',
            slot3: 'CS-1A LT-10',
            slot4: '',
            slot5: '',
        },
    ];





    return (
        <View style={{ flex: 1 }}>
            {/* <View style={styles.text}>
                <Text style={styles.text}> {Name}</Text>
                <Text style={styles.text}> {Email}</Text>
            </View> */}

            <View
                style={{
                    padding: 5,

                    margin: 3,
                    borderRadius: 8,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                }}>
                <View
                    style={{
                        width: 50,

                        height: 40,
                        margin: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text style={{ fontSize: 12, color: 'black' }}></Text>
                </View>
                <View
                    style={{
                        width: 50,

                        height: 40,
                        margin: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text style={{ fontSize: 12, color: 'black' }}>Mon</Text>
                </View>
                <View
                    style={{
                        width: 50,

                        height: 40,
                        margin: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text style={{ fontSize: 12, color: 'black' }}>Tue</Text>
                </View>
                <View
                    style={{
                        width: 50,

                        height: 40,
                        margin: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text style={{ fontSize: 12, color: 'black' }}>Wed</Text>
                </View>
                <View
                    style={{
                        width: 50,

                        height: 40,
                        margin: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text style={{ fontSize: 12, color: 'black' }}>Thu</Text>
                </View>
                <View
                    style={{
                        width: 50,

                        height: 40,
                        margin: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text style={{ fontSize: 12, color: 'black' }}>Fri</Text>
                </View>
            </View>
            <FlatList
                style={{}}
                data={DATA}
                renderItem={({ item, index }) => {
                    return (
                        <View
                            style={{
                                padding: 5,
                                margin: 3,
                                borderRadius: 8,
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                            }}>
                            <View
                                style={{
                                    width: 50,

                                    height: 40,
                                    margin: 2,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Text style={{ fontSize: 11, color: 'black' }}>{item.time}</Text>
                            </View>
                            <View
                                style={{
                                    borderWidth: 1,
                                    width: 50,

                                    height: 40,
                                    margin: 2,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    // backgroundColor: getBackgroundColor(item.slot1),
                                }}>
                                <Text style={{ fontSize: 12, color: 'black' }}>{item.slot1}</Text>
                            </View>
                            <View
                                style={{
                                    borderWidth: 1,
                                    width: 50,
                                    // backgroundColor: getBackgroundColor(item.slot2),
                                    height: 40,
                                    margin: 2,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Text style={{ fontSize: 12, color: 'black' }}>{item.slot2}</Text>
                            </View>
                            <View
                                style={{
                                    borderWidth: 1,
                                    width: 50,
                                    // backgroundColor: getBackgroundColor(item.slot3),
                                    height: 40,
                                    margin: 2,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Text style={{ fontSize: 12, color: 'black' }}>{item.slot3}</Text>
                            </View>
                            <View
                                style={{
                                    borderWidth: 1,
                                    width: 50,
                                    // backgroundColor: getBackgroundColor(item.slot4),
                                    height: 40,
                                    margin: 2,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Text style={{ fontSize: 12, color: 'black' }}>{item.slot4}</Text>
                            </View>
                            <View
                                style={{
                                    borderWidth: 1,
                                    width: 50,
                                    // backgroundColor: getBackgroundColor(item.slot5),
                                    height: 40,
                                    margin: 2,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Text style={{ fontSize: 12, color: 'black' }}>{item.slot5}</Text>
                            </View>
                        </View>
                    );
                }}></FlatList>

            <View
                style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 80,


                }}>

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

});