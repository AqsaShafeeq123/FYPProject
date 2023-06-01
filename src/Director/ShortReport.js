import React, { useState, useEffect } from 'react';
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    Pressable,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Modal, Portal, Provider } from 'react-native-paper';
import { FAB } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { appcolor } from '../components/Colorss';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ShortReport = ({ navigation, route }) => {

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

            let response = await fetch('http://192.168.1.104:8000/api/get-all-teacher-chr');
            let json = await response.json();
            setTeacherData(json);
            console.log(json);
        } catch (error) {
            console.log(error);
        }
    }
    // Search bar
    const [searchTeacher, setSearchTeacher] = useState('');
    return (
        <Provider style={styles.container}>
            <View style={{ flexDirection: 'row', borderBottomWidth: 2, backgroundColor: '#fff', borderRadius: 9, top: 5 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.text}>
                        {/* extracting obj */}

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


                    {
                        img == null ?
                            <Image source={require('../Images/imgIcon.png')} style={styles.imgStyle} />
                            :
                            <Image source={{ uri: 'http://192.168.1.104:8000/api/get-user-image/UserImages/Teacher/' + img }} style={styles.imgStyle} />
                    }

                </View>

            </View>

            {/* Below flatlist */}
            <View style={{ margin: '3%', flexDirection: 'row', }}>
                <Searchbar
                    placeholder="Search"
                    value={searchTeacher}
                    placeholderTextColor="#000"
                    inputStyle={{ fontSize: 16, color: '#000' }}
                    fontSize={12}
                    style={{ borderRadius: 10, backgroundColor: '#f5fffa', width: '89%', marginRight: 7 }}
                    onChangeText={text => setSearchTeacher(text)}
                />


            </View>




            <View style={{ flex: 1, }}>
                <FlatList
                    style={{}}
                    data={teacherData}
                    // data={teacherData}
                    renderItem={({ item, index }) => {
                        if (item.courseName.toLowerCase().includes(searchTeacher.toLowerCase())) {
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


                                        height: 150,
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
                                                {item.teacherName}
                                            </Text>
                                        </View>
                                        <View>
                                            <Image source={{ uri: 'http://192.168.1.104:8000/api/get-user-image/UserImages/Teacher/' + item.image }} style={styles.imgStyle} />
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
                                            Discipline:{item.discipline}
                                        </Text>
                                    </View>

                                    <View style={{}}>
                                        <Text style={{ color: 'black', fontWeight: '600', alignSelf: 'flex-end' }}>
                                            {item.status}
                                        </Text>

                                    </View>

                                    <View style={{ borderBottomWidth: 4, borderBottomColor: 'red' }}>

                                    </View>
                                </Pressable>
                            );
                        }
                    }}></FlatList>
            </View>
        </Provider>

    );
};

export default ShortReport;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,

    },
    item: {
        padding: 30,
        marginVertical: 8,
        marginHorizontal: 10,
        borderRadius: 10,

        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 15,
        top: 20,
        color: 'black',
    },
    text: {
        fontSize: 15,

        color: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 25
    },
    imgStyle: {
        width: 60,
        height: 60,
        borderRadius: 40,

    },
});







