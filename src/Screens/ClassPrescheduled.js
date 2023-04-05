import { FlatList, StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';

import React, { useState } from 'react';
import { appcolor } from '../components/Colorss';
import { Modal, Portal, Provider, Dialog, Button } from 'react-native-paper';




const ClassPrescheduled = ({ navigation, route }) => {



    // dlt modal
    const [dvisible, setdVisible] = React.useState(false);
    const showDialog = () => setdVisible(true);
    const hideDialog = () => setdVisible(false);

    // const { Name } = route.params;

    // btn 
    const handlePress = () => {

    };



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
        <Provider style={styles.container}>
            <View style={styles.txt}>
                <Text style={styles.text}>Teacher Name:{'Dr Naseer'}</Text>
                <Text style={styles.text}> Venue:{'DLDLab'}</Text>
            </View>


            <Portal>
                <Dialog visible={dvisible} onDismiss={hideDialog}>
                    <Dialog.Title>Delete</Dialog.Title>
                    <Dialog.Content>
                        <Text variant="bodyMedium"> Warning </Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button
                            onPress={() => {
                                hideDialog();

                            }}>
                            Yes
                        </Button>
                        <Button onPress={hideDialog}>No</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
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
                            <Pressable
                                onPress={() => showDialog()}
                                style={{
                                    borderWidth: 1,
                                    width: 50,

                                    height: 40,
                                    margin: 2,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    //  backgroundColor: getBackgroundColor(item.slot1),
                                }}>
                                <Text style={{ fontSize: 12, color: 'black' }}>{item.slot1}</Text>
                            </Pressable>

                            <Pressable
                                onPress={() => showDialog()}
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
                            </Pressable>

                            <Pressable
                                onPress={() => showDialog()}
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
                            </Pressable>

                            <Pressable
                                onPress={() => showDialog()}
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
                            </Pressable>

                            <Pressable
                                onPress={() => showDialog()}
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
                            </Pressable>
                        </View>
                    );
                }}></FlatList>

            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <Text style={styles.buttonText}> okay </Text>
                </TouchableOpacity>
            </View>
        </Provider>

    );
};

export default ClassPrescheduled;

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
        fontWeight: 'bold'
    },
    buttonWrapper: {
        flex: 1,
    },
    button: {
        backgroundColor: appcolor.primarycolor,
        margin: -37,
        borderRadius: 5,
        alignItems: 'center',
        width: 100,
        height: 40,
        alignSelf: 'center',
        justifyContent: "center"

    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,

    },
});
// const uncheckedColor = { backgroundColor: '#6b6b6b' }