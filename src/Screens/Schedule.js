
import React, { useState, useEffect } from 'react';
import {
    FlatList,

    StatusBar,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    Alert
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Modal, Portal, Provider } from 'react-native-paper';
import { appcolor } from '../components/Colorss';
import axios from "axios";

const Schedule = ({ navigation }) => {
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const [visible, setVisible] = React.useState(false);
    // for making btn hide or show
    const [scheduleVisible, setscheduleVisible] = React.useState(false);
    // SEarchBar
    const [searchTeacher, setSearchTeacher] = useState('');

    const [data, setdata] = useState();


    // data passing nxtt screen

    const [section, setSection] = useState([]);
    const [val, setVal] = useState();
    // console.log(val)
    // console.log(section)

    // Api response store
    const [teacherdata, setTeacherData] = useState();
    // APi Code
    useEffect(() => {
        getTeacher();
    }, []);
    async function getTeacher() {
        try {
            let response = await fetch('http://192.168.1.104:8000/api/user-details');
            // let response = await fetch(appcolor.api + 'user-details');
            let json = await response.json();
            setTeacherData(json);
            console.log(json);
        } catch (error) {
            console.log(error);
        }
    }


    // --------------------------------

    const showOptios = (name) => {
        // console.log("http://192.168.1.104:8000/api/check-teacher-reschedule?teacherName=" + name.replace(" ", "%20"));
        fetch("http://192.168.1.104:8000/api/check-teacher-reschedule?teacherName=" + name.replace(" ", "%20"))
            .then((response) => response.json())
            .then((data) => {
                console.log("Data:" + data[0].discipline);
                // 
                setSection(data);
                // setApiData(data);
                //if (response.status === 200) {
                if (data == "No Class Missed") {
                    //navigation.navigate('Reschedule', { data: data });
                    setscheduleVisible(false);
                    showModal();//no need for reshceudle
                } else {
                    //Alert.alert(data);
                    setscheduleVisible(true);
                    showModal();//need to schedule
                }
                // } else {
                //     Alert.alert("Error");
                // }
            })
            .catch((error) => {
                console.error(error);
                Alert.alert("Error");
            });
    };





    return (
        <Provider style={styles.container}>
            {/* SEarch Bar */}
            <View style={{ margin: '3%' }}>
                <Searchbar
                    placeholder="Search"
                    placeholderTextColor="#000"
                    value={searchTeacher}
                    fontSize={12}
                    inputStyle={{ fontSize: 16, color: '#000' }}
                    style={{ borderRadius: 10, backgroundColor: '#f5fffa' }}
                    onChangeText={text => setSearchTeacher(text)}
                />
            </View>
            {/* Modal */}
            <Portal>
                <Modal
                    visible={visible}
                    onDismiss={hideModal}
                    style={{ padding: 12 }}
                    contentContainerStyle={{
                        backgroundColor: appcolor.primarycolor,
                        padding: 30,
                        borderRadius: 8,
                    }}>
                    <Text style={{ textAlign: 'center', fontSize: 26, color: '#ffffff' }}>
                        SCHEDULE:
                    </Text>
                    {/* Btn Schedule */}
                    <View style={{ padding: 5, top: 7 }}>
                        <TouchableOpacity
                            // visible={scheduleVisible}
                            style={{
                                display: scheduleVisible ? 'flex' : 'none',
                                width: '50%',
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
                                navigation.navigate('Reschedule', {
                                    Section: section,
                                    VALUE: val,

                                });
                            }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: 'black',

                                }}>
                                Reschedule
                            </Text>
                        </TouchableOpacity>
                        {/* Btn2 */}
                        <TouchableOpacity
                            style={{
                                width: '50%',
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
                                navigation.navigate('Preschedule',
                                    {
                                        // Section: section,

                                        VALUE: val,
                                    });
                            }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: 'black',

                                }}>
                                Preschedule
                            </Text>
                        </TouchableOpacity>

                        {/* Btn3*/}
                        <TouchableOpacity
                            style={{
                                width: '50%',
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
                                navigation.navigate('Swap',
                                    {
                                        VALUE: val,
                                    });
                            }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: 'black',

                                }}>
                                Swapping
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </Portal>

            <View style={{ flex: 1, padding: 5 }}>
                {/* {data.map((item) => ( */}
                <FlatList
                    style={{ flex: 1 }}
                    // data={DATA}
                    // storing data is here in  flatlist
                    data={teacherdata}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        if (item.name.toLowerCase().includes(searchTeacher.toLowerCase())) {
                            {
                                return (
                                    item.role == 'Teacher' &&
                                    <View
                                        style={{
                                            padding: 5,
                                            backgroundColor: '#ffff',
                                            elevation: 2,
                                            margin: 3,
                                            borderRadius: 8,
                                        }}>
                                        <TouchableOpacity
                                            onPress={() => {


                                                setdata(item.name);
                                                //  showModal();
                                                showOptios(item.name);
                                                // obj send to next screen full info
                                                setVal(item);
                                            }}
                                            style={[styles.item]}>
                                            {
                                                item.image == null ?
                                                    <Image source={require('../Images/imgIcon.png')} style={styles.imgStyle} />
                                                    :
                                                    <Image source={{ uri: 'http://192.168.1.104:8000/api/get-user-image/UserImages/Teacher/' + item.image }} style={styles.imgStyle} />
                                            }
                                            <Text style={{ fontSize: 16, color: 'black' }}>
                                                {item.name}
                                            </Text>


                                        </TouchableOpacity>
                                    </View>
                                );
                            }
                        }
                    }}></FlatList>
                {/* ))} */}
            </View>
        </Provider>
    );
};

export default Schedule;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },

    imgStyle: {
        width: 60,
        height: 60,
        borderRadius: 40,
        marginRight: 30,
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

