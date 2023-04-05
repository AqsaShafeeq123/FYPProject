import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { appcolor } from '../components/Colorss';

const FreeSlotPre = ({ navigation, route }) => {
    // const { Name } = route.params;


    // Picker
    const [selectedValue, setSelectedValue] = useState('');
    // btn 
    const handlePress = () => {
        navigation.navigate('ClassPrescheduled');
    };







    const DATA = [
        {
            time: '8:30-10',
            slot1: '',
            slot2: '',
            slot3: '',
            slot4: '',
            slot5: '',
        },
        {
            time: '10-11:30',
            slot1: '',
            slot2: '',
            slot3: '',
            slot4: '',
            slot5: '',
        },
        {
            time: '11:30-1',
            slot1: '',
            slot2: '',
            slot3: '',
            slot4: '',
            slot5: '',
        },
        {
            time: '1:30-3:00',
            slot1: '',
            slot2: '',
            slot3: '',
            slot4: '',
            slot5: '',
        },
        {
            time: '3:00-4:30',
            slot1: '',
            slot2: '',
            slot3: '',
            slot4: '',
            slot5: '',
        },
    ];





    return (
        <View style={{ flex: 1 }}>
            <View style={styles.txt}>
                <Text style={styles.text}>Teacher Name:{'Dr Naseer'}</Text>
            </View>

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

                        height: 30,
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
                                padding: 1,
                                // margin: 1,
                                borderRadius: 8,
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                            }}>
                            <View
                                style={{
                                    width: 55,

                                    height: 70,
                                    // margin: 2,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Text style={{ fontSize: 11, color: 'black' }}>{item.time}</Text>
                            </View>
                            <View
                                style={{
                                    borderWidth: 1,
                                    width: 50,

                                    height: 60,
                                    margin: 2,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    // backgroundColor: getBackgroundColor(item.slot1),
                                }}>

                                <View style={styles.pickerWrapper}>
                                    <Picker
                                        style={styles.picker}
                                        mode="dropdown"
                                        dropdownIconColor={"black"}

                                        selectedValue={selectedValue}
                                        onValueChange={(itemValue, itemIndex) =>
                                            setSelectedValue(itemValue)
                                        }>
                                        <Picker.Item label="Teacher" color='black' style={{ backgroundColor: "#fff" }} value="Teacher" />
                                        <Picker.Item label="Student" color='black' style={{ backgroundColor: "#fff" }} value="Student" />
                                    </Picker>


                                </View>
                            </View>
                            <View
                                style={{
                                    borderWidth: 1,
                                    width: 50,
                                    // backgroundColor: getBackgroundColor(item.slot2),
                                    height: 60,
                                    margin: 2,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <View style={styles.pickerWrapper}>
                                    <Picker
                                        style={styles.picker}
                                        mode="dropdown"
                                        dropdownIconColor={"black"}

                                        selectedValue={selectedValue}
                                        onValueChange={(itemValue, itemIndex) =>
                                            setSelectedValue(itemValue)
                                        }>
                                        <Picker.Item label="Teacher" color='black' style={{ backgroundColor: "#fff" }} value="Teacher" />
                                        <Picker.Item label="Student" color='black' style={{ backgroundColor: "#fff" }} value="Student" />
                                    </Picker>


                                </View>
                            </View>
                            <View
                                style={{
                                    borderWidth: 1,
                                    width: 50,
                                    // backgroundColor: getBackgroundColor(item.slot3),
                                    height: 60,
                                    margin: 2,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <View style={styles.pickerWrapper}>
                                    <Picker
                                        style={styles.picker}
                                        mode="dropdown"
                                        dropdownIconColor={"black"}

                                        selectedValue={selectedValue}
                                        onValueChange={(itemValue, itemIndex) =>
                                            setSelectedValue(itemValue)
                                        }>
                                        <Picker.Item label="Teacher" color='black' style={{ backgroundColor: "#fff" }} value="Teacher" />
                                        <Picker.Item label="Student" color='black' style={{ backgroundColor: "#fff" }} value="Student" />
                                    </Picker>


                                </View>
                            </View>
                            <View
                                style={{
                                    borderWidth: 1,
                                    width: 50,
                                    // backgroundColor: getBackgroundColor(item.slot4),
                                    height: 60,
                                    margin: 2,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <View style={styles.pickerWrapper}>
                                    <Picker
                                        style={styles.picker}
                                        mode="dropdown"
                                        dropdownIconColor={"black"}

                                        selectedValue={selectedValue}
                                        onValueChange={(itemValue, itemIndex) =>
                                            setSelectedValue(itemValue)
                                        }>
                                        <Picker.Item label="Teacher" color='black' style={{ backgroundColor: "#fff" }} value="Teacher" />
                                        <Picker.Item label="Student" color='black' style={{ backgroundColor: "#fff" }} value="Student" />
                                    </Picker>


                                </View>
                            </View>
                            <View
                                style={{
                                    borderWidth: 1,
                                    width: 50,
                                    // backgroundColor: getBackgroundColor(item.slot5),
                                    height: 60,
                                    margin: 2,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <View style={styles.pickerWrapper}>
                                    <Picker
                                        style={styles.picker}
                                        mode="dropdown"
                                        dropdownIconColor={"black"}

                                        selectedValue={selectedValue}
                                        onValueChange={(itemValue, itemIndex) =>
                                            setSelectedValue(itemValue)
                                        }>
                                        <Picker.Item label="Teacher" color='black' style={{ backgroundColor: "#fff" }} value="Teacher" />
                                        <Picker.Item label="Student" color='black' style={{ backgroundColor: "#fff" }} value="Student" />
                                    </Picker>


                                </View>
                            </View>
                        </View>
                    );
                }}></FlatList>


            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <Text style={styles.buttonText}> okay </Text>
                </TouchableOpacity>
            </View>


        </View>

    );
};

export default FreeSlotPre;

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
    pickerWrapper: {
        flex: 1,
        justifyContent: "center",

    },
    picker: {
        // top: 4,
        left: 40,
        bottom: 10
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
});