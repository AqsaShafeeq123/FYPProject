import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Pressable,
    Image,
} from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
const AssignCourse = ({ navigation }) => {
    const DATA = [
        {
            id: '1',
            name: 'Hina ',
        },
        {
            id: '2',
            name: 'Laraib',
        },
        {
            id: '3',
            name: 'Aqsa',
        },
        {
            id: '4',
            name: 'Sana',
        },
    ];
    const [searchRecording, setSearchRecording] = useState('');
    const [selectedValue, setSelectedValue] = useState('');

    return (
        <View style={{ flex: 1 }}>
            <View>
                <Text
                    style={{
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: 15,
                        marginTop: 20,
                    }}>
                    Select Discipline
                </Text>
                {/* PICKER 2 */}

                <Picker
                    style={styles.picker}
                    mode="dropdown"
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                    <Picker.Item label="Teacher" color="black" value="Teacher" />
                    <Picker.Item label="Student" color="black" value="Student" />
                </Picker>
            </View>

            <View style={{ flex: 1, padding: 5 }}>
                <FlatList
                    style={{ padding: 2 }}
                    data={DATA}
                    renderItem={({ item, index }) => {
                        return (
                            <Pressable
                                onPress={() => {
                                    navigation.navigate('StdAttendance');
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
                                </View>
                            </Pressable>
                        );
                    }}></FlatList>
            </View>

            <View>
                {/* add btn */}
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        style={{
                            width: 160,
                            marginTop: 40,
                            margin: 5,
                            alignItems: 'center',

                            borderRadius: 10,
                            padding: 10,
                            backgroundColor: '#4682b4',
                        }}
                        onPress={() => navigation.navigate('StudentDetails')}>
                        <Text
                            style={{
                                fontSize: 20,
                                color: '#ffffff',
                            }}>
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default AssignCourse;

const styles = StyleSheet.create({
    picker: {
        color: 'black',
        backgroundColor: '#4682b4',
        marginTop: 10,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 10,
        borderRadius: 10,
        flexDirection: 'row',
    },
    title: {
        fontSize: 15,
        color: 'black',
    },
});