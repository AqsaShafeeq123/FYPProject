
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import Time from './Time';
import React, { useState, useEffect } from 'react';
import { appcolor } from '../components/Colorss';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider, Modal, Portal, Button } from 'react-native-paper';


const CHR = ({ navigation, route }) => {



    const [selectedItem, setSelectedItem] = useState(null);

    //  data from login
    const [name, setName] = useState('');
    const [img, setImg] = useState();

    // Api response store for get
    const [teacherData, setTeacherData] = useState([]);

    // APi Code get Get DVr
    useEffect(() => {
        getData();
        getTeacherDetail();

    }, []);


    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('TeacherData');
            if (value !== null) {
                const data = JSON.parse(value);
                // frpm prev screen storedata login screen
                setName(data.Name)
                setImg(data.Image)
                console.log('****' + value);
            }
        } catch (e) {
            // error reading value
        }
    };


    async function getTeacherDetail() {
        try {

            const value = await AsyncStorage.getItem('TeacherData');

            const data = JSON.parse(value);
            // frpm prev screen storedata

            console.log('****aqsa' + data.Name);

            let response = await fetch('http://192.168.1.101:8000/api/get-teacher-chr?teacherName=' + data.Name);
            let json = await response.json();
            setTeacherData(json);
            console.log(json);
        } catch (error) {
            console.log(error);
        }
    }

    // modal
    const [modalVisible, setModalVisible] = useState(false);
    const showModal = () => setModalVisible(true);
    const hideModal = () => setModalVisible(false);

    return (
        <Provider style={{ flex: 1, marginTop: 8, padding: 4, backgroundColor: '#eee' }}>

            <View style={{ flexDirection: 'row', borderBottomWidth: 2, backgroundColor: '#fff', borderRadius: 9 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.text}>
                        {/* extracting obj  above state */}

                        {name}

                    </Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Ionicons

                        name="notifications-circle"
                        onPress={() => console.log('Edit pressed')}

                        size={42}
                        color='#00008b'
                        style={{
                            alignSelf: 'center',
                            marginRight: 30
                        }}


                    />
                    <Image source={{ uri: 'http://192.168.1.101:8000/api/get-user-image/UserImages/Teacher/' + img }} style={styles.imgStyle} />
                </View>

            </View>



            <Portal>
                <Modal
                    visible={modalVisible}
                    onDismiss={hideModal}
                    style={{ padding: 12 }}
                    contentContainerStyle={{
                        backgroundColor: appcolor.primarycolor,
                        padding: 30,
                        borderRadius: 8,
                    }}>
                    <Text style={{ textAlign: 'center', fontSize: 16, color: '#ffffff' }}>
                        Want TO View
                    </Text>

                    <View style={{ padding: 5, top: 7 }}>
                        <TouchableOpacity
                            style={{
                                width: '70%',
                                top: 14,
                                alignSelf: 'center',
                                margin: 5,
                                alignItems: 'center',
                                justifyContent: 'space-evenly',
                                borderRadius: 10,
                                padding: 10,
                                height: 50,

                                backgroundColor: '#ffffff',
                            }}
                            onPress={() => {
                                navigation.navigate('ActivityReport', {
                                    Discipline: selectedItem.discipline,
                                    Date: selectedItem.date,
                                    Course: selectedItem.courseName,
                                    Day: selectedItem.day,
                                    Sit: selectedItem.sit,
                                    Stand: selectedItem.stand,
                                    // Mobile: selectedItem.mobile,
                                    Times: selectedItem.startTime,
                                    Timee: selectedItem.endTime,
                                    Status: selectedItem.status,
                                    Img: selectedItem.image,

                                });
                            }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: 'black',

                                }}>
                                Activity Report
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: '70%',
                                top: 14,
                                alignSelf: 'center',
                                margin: 5,
                                alignItems: 'center',
                                justifyContent: 'space-evenly',
                                borderRadius: 10,
                                padding: 10,
                                height: 50,

                                backgroundColor: '#ffffff',
                            }}
                            onPress={() => {
                                navigation.navigate('TeacherChr', {

                                    Discipline: selectedItem.discipline,
                                    Date: selectedItem.date,
                                    Course: selectedItem.courseName,
                                    Day: selectedItem.day,
                                    TimeIn: selectedItem.totalTimeIn,
                                    TimeOut: selectedItem.totalTimeOut,
                                    Times: selectedItem.startTime,
                                    Timee: selectedItem.endTime,
                                    Status: selectedItem.status,
                                    Img: selectedItem.image,
                                    TeacherSlotId: selectedItem.teacherSlotId,
                                });
                            }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: 'black',

                                }}>
                                Class Held Report
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </Portal>


            {/* flatlist */}

            <View style={{ flex: 1, }}>
                <FlatList
                    style={{}}
                    data={teacherData}
                    renderItem={({ item, index }) => {

                        return (
                            <View style={{
                                padding: 2,
                                backgroundColor: `#fff`,
                                elevation: 8,
                                margin: 13,
                                borderRadius: 8,

                                height: 150,
                            }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        // console.log('aqsa');
                                        showModal();
                                        setSelectedItem(item);
                                    }}
                                >



                                    <Text style={{ color: 'black', fontWeight: '600', alignSelf: 'center', top: 20 }}>
                                        {item.status}
                                    </Text>


                                    <View style={{ borderBottomWidth: 4, borderBottomColor: 'grey', top: 25, }}>

                                    </View>

                                    <Text style={{ color: 'black', fontWeight: '600', top: 35 }}>
                                        Date:{item.date}
                                    </Text>



                                    <Text style={{ color: 'black', fontWeight: '600', top: 35 }}>
                                        Course:{item.courseName}
                                    </Text>


                                    <Text style={{ color: 'black', fontWeight: '600', top: 35 }}>
                                        Discipline:{item.discipline}
                                    </Text>

                                </TouchableOpacity>
                            </View>
                        );

                    }}></FlatList>
            </View>
        </Provider>


    );
};

export default CHR;

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
    imgStyle: {
        width: 60,
        height: 60,
        borderRadius: 40,

    },
    modalContent: {
        backgroundColor: appcolor.primarycolor,
        borderRadius: 30,
        padding: 80,
        alignItems: 'center',
        marginTop: 150,
        marginRight: 10,
        marginLeft: 10,
    },
    modalText: {
        marginBottom: 30,
        textAlign: 'center',
        fontSize: 30,
        color: 'black',
    },

});
















