import React, { useState, useEffect } from 'react';
import {
    FlatList,

    StatusBar,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
} from 'react-native';
import { Searchbar } from 'react-native-paper';

import { appcolor } from '../components/Colorss';


const TeacherList = ({ navigation }) => {


    const [searchTeacher, setSearchTeacher] = useState('');


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


    return (
        <View style={styles.container}>
            <View style={{ margin: '3%' }}>
                <Searchbar
                    placeholder="Search"
                    placeholderTextColor="#000"
                    value={searchTeacher}
                    fontSize={12}

                    style={{ borderRadius: 10, backgroundColor: '#f5fffa' }}
                    onChangeText={text => setSearchTeacher(text)}
                />
            </View>


            <View style={{ flex: 1, padding: 5 }}>
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
                                                navigation.navigate('ScheduleRules', {
                                                    // Id: '123',
                                                    Name: item.name,

                                                });
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
            </View>
        </View>
    );
};

export default TeacherList;

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



});

