// import React, { useEffect, useState, useRef } from "react";
// import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
// import { Picker } from '@react-native-picker/picker';
// import { appcolor } from '../components/Colorss';

// const FreeSlot = ({ navigation, route }) => {
//     const {

//         Sdate,
//         EDate,
//         Disp,
//     } = route.params;


//     console.log(Sdate, EDate, Disp);
//     const [data, setData] = useState([]);
//     const [venue, setVenue] = useState([]);
//     let pickerRef = useRef(null);
//     let counter = 0;

//     let [selectedVenues, setselectedVenues] = useState(['', '', '', '', '...', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);

//     const days = ["Mon", "Tue", "Wed", "Thur", "Fri"];
//     const lstdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

//     useEffect(() => {
//         const fetchData = async () => {
//             const venueResponse = await fetch("http://192.168.1.101:8000/api/venue-details");
//             const venueJson = await venueResponse.json();
//             setVenue(venueJson.data);

//             const timetableResponse = await fetch(
//                 `http://192.168.1.101:8000/api/timetable-details-by-date?startdate=${Sdate}&enddate=${EDate}`
//             );
//             const timetableJson = await timetableResponse.json();
//             setData(timetableJson);
//         };

//         fetchData();
//     }, [Sdate, EDate]);

//     const [selectedValue, setSelectedValue] = useState([]);

//     const handleChange = (itemValue) => {

//         let sv = selectedVenues;
//         sv[0] = itemValue;
//         setselectedVenues(sv);

//         setSelectedValue(itemValue);
//     };

//     const times = ["08:30-10:00", "10:00-11:30", "11:30-01:00", "01:30-03:00", "03:00-04:30"];
//     const slots = [0, 1, 2, 3, 4];




//     // btn
//     const handlePress = () => {
//         console.log('aqsa')
//     }




//     return (
//         <View style={{ flex: 1, paddingTop: 8 }}>
//             {/* <View
//         style={{
//           flexDirection: "row",
//           alignItems: "center",
//           borderRadius: 10,
//           marginHorizontal: "5%",
//           padding: 10,
//           backgroundColor: "#f2f2f2",
//         }}
//       >
//         <Image source={UmerImage} style={{ width: 40, height: 40, borderRadius: 20 }} />
//         <Text style={{ marginLeft: 8, fontSize: 14 }}>Mr Umer</Text>
//       </View> */}
//             <View style={{ marginVertical: 8, marginHorizontal: "5%" }}>
//                 <View
//                     style={{
//                         flexDirection: "row",
//                         padding: 2,
//                         marginTop: 2,
//                         backgroundColor: "#2196F3",
//                         borderRadius: 10,
//                         width: "104%",
//                         height: '90%'
//                     }}
//                 >
//                     <View style={{ width: "15%", paddingLeft: 5, paddingTop: 30, borderRadius: 10 }}>
//                         {times.map((slot, index) => (
//                             <View
//                                 style={{ flex: 1, paddingTop: 10, backgroundColor: "#2196F3", height: 60 }}
//                                 key={index}
//                             >
//                                 <Text style={{ fontSize: 12 }}>{slot}</Text>
//                             </View>
//                         ))}
//                     </View>
//                     <View style={{ flex: 1, borderTopRightRadius: 10 }}>
//                         <View
//                             style={{
//                                 flexDirection: "row",
//                                 justifyContent: "space-between",
//                                 paddingHorizontal: 2,
//                                 paddingVertical: 4,
//                                 backgroundColor: "#2196F3",
//                                 borderTopRightRadius: 10,
//                                 alignItems: "center",
//                             }}
//                         >
//                             {days.map((day, index) => (
//                                 <Text
//                                     key={index}
//                                     style={{
//                                         fontSize: 12,
//                                         fontWeight: "bold",
//                                         color: "white",
//                                         width: "10%",
//                                         textAlign: "center",
//                                     }}
//                                 >
//                                     {day}
//                                 </Text>
//                             ))}
//                         </View>
//                         <View style={{ flexDirection: "row", height: 400, backgroundColor: "#ccc", borderRadius: 10 }}>
//                             {lstdays.map((d, index) => (
//                                 <View key={index}>
//                                     {times.map((t, i) => {
//                                         let temp = [...venue];

//                                         data.forEach((timetable) => {
//                                             if (timetable.starttime === t.split("-")[0] && timetable.day === d) {
//                                                 temp = temp.filter((item) => item.name !== timetable.venue);
//                                             }
//                                         });

//                                         return (
//                                             <View>
//                                                 <Text
//                                                     style={{
//                                                         fontSize: 12,
//                                                         fontWeight: "bold",
//                                                         color: "white",
//                                                         width: "100%",
//                                                         textAlign: "center",
//                                                     }}
//                                                 >
//                                                     {selectedVenues[9]}
//                                                 </Text>
//                                                 <Picker
//                                                     ref={pickerRef}
//                                                     key={index * i + i}
//                                                     selectedValue={selectedValue}
//                                                     onValueChange={handleChange}
//                                                     style={{ width: 60, height: "20%" }}
//                                                 >
//                                                     <Picker.Item label="-" value="" />
//                                                     {temp.map((value, index) => (
//                                                         <Picker.Item key={index} label={value.name} value={value.name} />
//                                                     ))}
//                                                 </Picker>
//                                             </View>
//                                         );
//                                     })}
//                                 </View>
//                             ))}
//                         </View>
//                     </View>
//                 </View>
//             </View>
//             <View style={styles.buttonWrapper}>
//                 {/* <View style={{ top: 20, backgroundColor: '#fff', elevation: 4, justifyContent: 'center', alignSelf: 'center', height: 40, padding: 5, borderRadius: 6 }}>
//                     <Text style={{ color: 'black', }}> Selected Venue: {selectedValue}</Text>
//                 </View> */}
//                 <TouchableOpacity style={styles.button} onPress={handlePress}>
//                     <Text style={styles.buttonText}> okay </Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };

// export default FreeSlot;


// const styles = StyleSheet.create({
//     txt: {
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: 100,
//         width: '95%',
//         borderRadius: 30,
//         marginTop: 20,

//         marginLeft: 10,
//         marginBottom: 30,
//     },
//     text: {
//         fontSize: 15,

//         color: '#000',
//         fontWeight: 'bold',
//     },
//     buttonWrapper: {
//         flex: 1,
//     },
//     button: {
//         backgroundColor: appcolor.primarycolor,
//         margin: 100,
//         borderRadius: 5,
//         alignItems: 'center',
//         width: 100,
//         height: 40,
//         alignSelf: 'center',
//         justifyContent: "center"

//     },
//     buttonText: {
//         color: '#fff',
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     buttonText1: {
//         color: '#fff',
//         fontSize: 14,
//     },

// });






import { FlatList, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React, { useState, useEffect } from 'react';
import { appcolor } from '../components/Colorss';

const FreeSlot = ({ navigation, route }) => {
    const { Sdate,
        EDate,
        Disp,
    } = route.params;


    console.log(Sdate, EDate, Disp);


    const [selectedLanguage, setSelectedLanguage] = useState();
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




    const [data, setData] = useState([]);
    const [venue, setVenue] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const venueResponse = await fetch("http://192.168.1.101:8000/api/venue-details");
            const venueJson = await venueResponse.json();
            setVenue(venueJson.data);

            const timetableResponse = await fetch(
                `http://192.168.1.101:8000/api/timetable-details-by-date?startdate=${Sdate}&enddate=${EDate}`
            );
            const timetableJson = await timetableResponse.json();
            setData(timetableJson);
        };

        fetchData();
    }, [Sdate, EDate]);






    // btn 
    const handlePress = () => {

    };



    let [selectedVenues, setselectedVenues] = useState(['---', '', '', '', '...', '...', '', '', '', '', '...', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);

    return (
        <View style={{ flex: 1 }}>
            {/* <View style={styles.txt}>
                <Text style={styles.text}>Teacher Name:{Name}</Text>
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
                // data={venue}
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

                                    height: 50,
                                    margin: 2,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    // backgroundColor: getBackgroundColor(item.slot1),
                                }}>
                                <Text style={{ fontSize: 11, color: 'black' }}>{selectedVenues[index * 5]}</Text>
                                <Picker
                                    style={{ width: 50 }}
                                    selectedValue={selectedLanguage}
                                    onValueChange={(itemValue, itemIndex) => {
                                        console.log(itemValue);
                                        let sv = selectedVenues;
                                        sv[index * 5] = itemValue;
                                        setselectedVenues(sv);
                                        setSelectedLanguage(itemValue)

                                    }

                                    }>
                                    <Picker.Item label="Lab-1" value="Lab-1" />
                                    <Picker.Item label="Lab-1" value="Lab-2" />
                                    <Picker.Item label="Lab-1" value="Lab-3" />
                                </Picker>
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

                                <Text style={{ fontSize: 11, color: 'black' }}>{selectedVenues[index * 5 + 1]}</Text>
                                <Picker
                                    style={{ width: 50 }}
                                    selectedValue={selectedLanguage}
                                    onValueChange={(itemValue, itemIndex) => {
                                        setSelectedLanguage(itemValue)
                                        let sv = selectedVenues;
                                        sv[index * 5 + 1] = itemValue;
                                        setselectedVenues(sv);
                                    }

                                    }>
                                    <Picker.Item label="" value="Lab-1" />

                                </Picker>
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

                                <Text style={{ fontSize: 11, color: 'black' }}>{selectedVenues[index * 5 + 2]}</Text>
                                <Picker
                                    style={{ width: 50 }}
                                    selectedValue={selectedLanguage}
                                    onValueChange={(itemValue, itemIndex) => {
                                        let sv = selectedVenues;
                                        sv[index * 5 + 2] = itemValue;
                                        setselectedVenues(sv);
                                        setSelectedLanguage(itemValue)
                                    }
                                    }>
                                    <Picker.Item label="LT-9" value="Lab-1" />
                                    <Picker.Item label="LT-9" value="Lab-2" />
                                    <Picker.Item label="LT-9" value="Lab-3" />
                                    <Picker.Item label="LT-9" value="Lab-4" />
                                    <Picker.Item label="LT-9" value="Lab-5" />
                                </Picker>
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

                                <Text style={{ fontSize: 11, color: 'black' }}>{selectedVenues[index * 5 + 3]}</Text>
                                <Picker
                                    style={{ width: 50 }}
                                    selectedValue={selectedLanguage}
                                    onValueChange={(itemValue, itemIndex) => {
                                        setSelectedLanguage(itemValue)
                                        let sv = selectedVenues;
                                        sv[index * 5 + 3] = itemValue;
                                        console.log(index * 5 + 3);
                                        setselectedVenues(sv);
                                    }
                                    }>
                                    <Picker.Item label="Lab-8" value="Lab-8" />
                                    <Picker.Item label="Lab-7" value="Lab-7" />
                                </Picker>
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

                                <Text style={{ fontSize: 11, color: 'black' }}>{selectedVenues[index * 5 + 4]}</Text>
                                <Picker
                                    style={{ width: 50 }}
                                    selectedValue={selectedLanguage}
                                    onValueChange={(itemValue, itemIndex) => {
                                        console.log(itemValue);
                                        let sv = selectedVenues;
                                        sv[index * 5 + 4] = itemValue;
                                        setselectedVenues(sv);
                                        setSelectedLanguage(itemValue)
                                    }
                                    }>
                                    <Picker.Item label="Lt-3" value="Lab-1" />
                                    <Picker.Item label="Lt-2" value="Lab-2" />
                                </Picker>
                            </View>
                        </View>
                    );
                }}></FlatList >


            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <Text style={styles.buttonText}> okay </Text>
                </TouchableOpacity>
            </View>
        </View >
    );
};

export default FreeSlot;

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
        fontWeight: 'bold',
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
});