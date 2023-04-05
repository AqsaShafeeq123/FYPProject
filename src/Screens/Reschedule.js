import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { Picker } from '@react-native-picker/picker';
import { appcolor } from '../components/Colorss';

const Reschedule = ({ navigation }) => {


    const [selectedRange, setSelectedRange] = useState({});
    const minDate = new Date(); // Current date
    const maxDate = new Date('2024, 11, 31'); // Maximum selectable date


    // btn 
    const handlePress = () => {
        navigation.navigate('FreeSlot');
    };

    // Picker
    const [selectedValue, setSelectedValue] = useState('');



    const onDayPress = (day) => {
        if (selectedRange.start && !selectedRange.end) {
            if (day.timestamp < selectedRange.start.timestamp) {
                setSelectedRange({ start: day, end: selectedRange.start });
            } else {
                setSelectedRange({ ...selectedRange, end: day });
            }
        } else {
            setSelectedRange({ start: day, end: null });
        }
    };

    return (
        <View style={styles.container}>


            <View style={styles.cardWrapper}>
                <View style={styles.card}>
                    <View style={styles.profile}>
                        <Image
                            style={{ height: 80, width: 80, borderRadius: 100 }}
                            source={require('../Images/image_picker1729879042.jpg')}
                            resizeMode={"center"}
                        />
                        <Text style={{ color: "black", fontSize: 16 }}>Mr Shahid</Text>
                    </View>
                    <View style={styles.pickerWrapper}>
                        <View style={styles.pickerBox}>
                            <Picker
                                style={styles.picker}
                                mode="dropdown"
                                dropdownIconColor={"black"}

                                selectedValue={selectedValue}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectedValue(itemValue)
                                }>
                                <Picker.Item label="BCS-6A" color='black' style={{ backgroundColor: "#fff" }} value="BCS-6A" />
                                <Picker.Item label="BCS-7C" color='black' style={{ backgroundColor: "#fff" }} value="BCS-7C" />
                            </Picker>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.calendarWrapper}>
                <CalendarList

                    horizontal={true}
                    pagingEnabled={true}
                    calendarWidth={350}
                    minDate={minDate}
                    maxDate={maxDate}
                    onDayPress={onDayPress}
                    markedDates={{
                        ...selectedRange,
                        [selectedRange.start?.dateString || '']: {
                            ...selectedRange.start,
                            color: 'green',
                            textColor: 'white',
                        },
                        [selectedRange.end?.dateString || '']: {
                            ...selectedRange.end,
                            color: 'green',
                            textColor: 'white',
                        },
                    }}
                    markingType={'period'}
                    hideArrows={false}
                    hideExtraDays={true}
                    firstDay={1}
                    theme={{
                        textSectionTitleColor: 'black',
                        selectedDayBackgroundColor: 'green',
                        selectedDayTextColor: 'white',
                        todayTextColor: 'red',
                        dayTextColor: 'black',
                        textDisabledColor: 'gray',
                        monthTextColor: 'black',
                        indicatorColor: 'blue',
                    }}
                />
            </View>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <Text style={styles.buttonText}> okay </Text>
                </TouchableOpacity>
            </View>


        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    cardWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    },

    card: {
        flexDirection: "row",
        height: 100,
        width: '95%',
        backgroundColor: "white",
        borderRadius: 15,
        elevation: 10,

    },
    profile: {
        flex: 1.2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    pickerWrapper: {
        flex: 1,
        justifyContent: "center",

    },
    picker: {
        top: 4,
        left: 10,
        bottom: 1
    },
    pickerBox: {
        marginLeft: 10,
        height: 60,
        width: 140,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "black",
    },
    calendarWrapper: {
        flex: 2,
    },
    buttonWrapper: {
        flex: 1,
    },
    button: {
        backgroundColor: appcolor.primarycolor,
        margin: 50,
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
    text: {
        fontSize: 15,

        color: '#000',
        fontWeight: 'bold'
    },


});

export default Reschedule;