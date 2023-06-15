import React, { useState, useEffect } from 'react';
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    Pressable,
    View,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';
import { appcolor } from '../components/Colorss';
import axios from 'axios';
import { Button, Dialog, Portal, Provider, Modal } from 'react-native-paper';

const NOTIFICATION = ({ navigation, route }) => {


    const { tID } = route.params;
    console.log(tID + '*meeee*')



    // --------------------ApiGet Flatist

    const [data, setData] = useState([]);

    const showNotifications = async () => {
        try {
            const response = await axios.get(`http://192.168.1.101:8000/api/get-teacher-notification-data?teacherName=${tID}`);
            console.log("testresponse------", response.data);
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    console.log(data);

    useEffect(() => {
        showNotifications();
    }, []);

    // -----------------------postapi on claim btn click

    // const handleClaim = (item) => {
    //     const info = {
    //         id: 0,
    //         attendanceId: item.id,
    //         teacherName: item.name,
    //     };


    //     fetch("http://192.168.1.101:8000/api/student-attendance-claim", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(info),
    //     }).then((response) => {
    //         console.log(response.data);
    //         // Remove the claimed item from the data array
    //         setData(data.filter((item) => item.id !== info.attendanceId));
    //     });
    //     alert("Attendance Claimed!");

    // };



    const acceptClaim = async (item) => {
        await axios
            .get(
                `http://192.168.1.101:8000/api/update-attendance?attendanceId=${item.id}&status=${true}`
            )
            .then((res) => {
                console.log("rest", res.data);
                setData(res.data);
                alert("Attendance Updated!");
            });
    };

    const rejectClaim = async (item) => {
        await axios
            .get(
                `http://192.168.1.101:8000/api/update-attendance?attendanceId=${item.id}&status=${false}`
            )
            .then((res) => {
                console.log("rest", res.data);
                setData(res.data);
                alert("Attendance Updated!");
            });
    };




    return (
        <SafeAreaView style={styles.container}>


            <View style={{ flex: 1, }}>
                <FlatList
                    style={{}}
                    data={data}

                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        if (true) {
                            return (
                                <Pressable
                                    onPress={() => {

                                    }}
                                    style={{
                                        padding: 2,
                                        backgroundColor: `#dcdcdc`,
                                        elevation: 2,
                                        margin: 13,
                                        borderRadius: 8,


                                        height: 220,
                                    }}>
                                    <View
                                        style={{
                                            // flexDirection: 'row',

                                            justifyContent: 'space-between',
                                        }}>

                                        <View>
                                            <Image source={{ uri: 'http://192.168.1.101:8000/api/get-user-image/UserImages/Student/' + item.image }} style={{
                                                width: 80,
                                                height: 90,
                                                borderRadius: 10,

                                                // marginLeft: -24,
                                                margin: 2
                                            }} />
                                        </View>
                                        <View>
                                            <Text
                                                style={{
                                                    fontSize: 16,
                                                    color: 'black',
                                                    fontWeight: 'bold',
                                                }}>
                                                {item?.name}
                                            </Text>
                                        </View>

                                    </View>
                                    <View style={{}}>
                                        <Text style={{ color: 'black', fontWeight: '600' }}>
                                            Date:{item.date}
                                        </Text>
                                    </View>

                                    <View style={{}}>
                                        <Text style={{ color: 'black', fontWeight: '600' }}>
                                            Course:{item.courseName}
                                        </Text>
                                    </View>
                                    <View style={{}}>
                                        <Text style={{ color: 'black', fontWeight: '600' }}>
                                            Day:{item?.day}
                                        </Text>
                                    </View>

                                    <View style={{ borderBottomWidth: 4, borderBottomColor: 'red', top: 20 }}>

                                    </View>



                                    {/* Button */}
                                    <View style={{}}>
                                        <TouchableOpacity style={styles.button} onPress={() => {
                                            acceptClaim(item);
                                        }}>
                                            <Text style={styles.txt}>Accept</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{}}>
                                        <TouchableOpacity style={{
                                            backgroundColor: appcolor.primarycolor,
                                            padding: 10,
                                            borderRadius: 10,
                                            marginTop: -80,
                                            width: '25%',
                                            height: 40,
                                            alignSelf: 'flex-end',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }} onPress={() => {
                                            rejectClaim(item);
                                        }}>
                                            <Text style={styles.txt}>Reject</Text>
                                        </TouchableOpacity>
                                    </View>
                                </Pressable>
                            );
                        }
                    }}></FlatList>
            </View >



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
        borderRadius: 10,
        // marginBottom: 80,
        width: '25%',
        height: 40,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 90

    },
    txt: {
        color: 'white',
        textAlign: 'center',
    },


});