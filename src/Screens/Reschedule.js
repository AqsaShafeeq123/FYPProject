import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { Picker } from '@react-native-picker/picker';
import { appcolor } from '../components/Colorss';




const Reschedule = ({ navigation, route }) => {

    const { Section, VALUE } = route.params;
    // console.log(Section);




    // ----------
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [selectedRange, setSelectedRange] = useState({});

    // Picker
    const [selectedValue, setSelectedValue] = useState(Section[0].discipline);


    // btn 
    const handlePress = () => {

        navigation.navigate('FreeSlot',
            {
                Name: VALUE,
                Sdate: startDate,
                EDate: endDate,
                Disp: selectedValue,
                teacherSlotId: Section.filter((e) => e.discipline == selectedValue)[0].id
                // data:Section.find(e=>e.discipline)
            });
    };





    const handleDateSelect = date => {

        if (!startDate || endDate) {
            // Select start date if no start date or both dates are already selected
            var date2 = new Date(date?.dateString); // Replace "2023-05-28" with your desired date

            var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

            var dayName = daysOfWeek[date2.getDay()];

            global.day = dayName;
            setStartDate(date.dateString);
            setEndDate(null);
            setSelectedRange({});
        } else if (startDate && !endDate) {
            // Select end date if start date is already selected but end date is not
            if (new Date(date.dateString) >= new Date(startDate)) {

                setEndDate(date.dateString);
                setSelectedRange({
                    [startDate]: { startingDay: true, color: 'blue' },
                    [date.dateString]: { endingDay: true, color: 'blue' },
                });
            } else {

                setStartDate(date.dateString);
                setEndDate(null);
                setSelectedRange({});
            }
        }
    };

    return (
        <View style={styles.Clcontainer}>


            <View style={styles.cardWrapper}>
                <View style={styles.card}>
                    <View style={styles.profile}>
                        {
                            VALUE.image == null ?
                                <Image source={require('../Images/imgIcon.png')} style={styles.imgStyle} />
                                :
                                <Image source={{ uri: 'http://192.168.1.103:8000/api/get-user-image/UserImages/Teacher/' + VALUE.image }} style={styles.imgStyle} />
                        }
                        <Text style={{ color: "black", fontSize: 16 }}>{VALUE.name}</Text>
                    </View>
                    <View style={styles.pickerWrapper}>
                        <View style={styles.pickerBox}>
                            <Picker
                                style={styles.picker}
                                mode="dropdown"
                                dropdownIconColor={"black"}

                                selectedValue={selectedValue}

                                onValueChange={itemValue => {
                                    setSelectedValue(itemValue)
                                }}  >



                                {Section.map((item, index) => {
                                    return (
                                        <Picker.Item label={item.discipline} color='black' style={{ backgroundColor: "#fff" }} value={item.discipline} key={index} />
                                    );
                                })}





                            </Picker>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.calendarWrapper}>
                <Calendar
                    markingType={'period'}
                    markedDates={selectedRange}
                    onDayPress={handleDateSelect}
                    style={styles.calendar}
                />
                <View>
                    <Text style={{ color: 'black' }}>Dates : {startDate + '-----' + endDate + '====' + selectedValue}</Text>
                </View>
            </View>

            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <Text style={styles.buttonText}> okay </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Clcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    calendar: {
        borderWidth: 1,
        borderColor: 'gray',
        height: 350,
        width: 350,
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
        margin: 80,
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
    imgStyle: {
        width: 60,
        height: 60,
        borderRadius: 40,
        marginRight: 30,
    },
});

export default Reschedule;


