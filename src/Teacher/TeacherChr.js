import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, } from 'react-native'
import React, { useState, useEffect } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { appcolor } from '../components/Colorss';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
const TeacherChr = ({ navigation, route }) => {

    const { Name,
        Discipline,
        Date,
        Course,
        Day,
        TimeIn,
        TimeOut,
        Times,
        Timee,
        Status,
        Img,
        TeacherSlotId
    } = route.params;




    //  data from login
    const [name, setName] = useState('');
    const [img, setImg] = useState();
    // APi Code get Get DVr
    useEffect(() => {
        getData();


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





    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', borderBottomWidth: 2, backgroundColor: '#fff', borderRadius: 9 }}>
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
                    <Image source={{ uri: 'http://192.168.1.101:8000/api/get-user-image/UserImages/Teacher/' + img }} style={styles.imgStyle} />
                </View>
            </View>

            <View style={{ borderRadius: 8, height: 65, top: 24, padding: 12, backgroundColor: '#fff', elevation: 7, }}>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 30, color: 'black', alignSelf: 'center' }}>
                    Class Held Report
                </Text>
            </View>

            <View style={{

                padding: 12,
                top: 28,
                backgroundColor: `#dcdcdc`,
                elevation: 7,
                margin: 13,
                borderRadius: 8,

                height: 250,
            }} >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    <Image source={{ uri: 'http://192.168.1.101:8000/api/get-user-image/UserImages/Teacher/' + Img }} style={styles.imgStyle} />

                    <Text style={{ color: '#000', fontWeight: 'bold', top: 25 }}>{Name}</Text></View>


                <View style={{}}>
                    <Text style={{ color: 'black', fontWeight: '600', alignSelf: 'flex-end' }}>
                        Status:   {Status}
                    </Text>

                </View>

                <View style={{ borderBottomWidth: 2, borderBottomColor: 'black', top: 18 }}>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 30 }}>
                    <Text style={styles.text}>Discipline:{Discipline}</Text>
                    <Text style={styles.text}>Date:{Date}</Text></View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 30 }}>
                    <Text style={styles.text}> Course:{Course}</Text>
                    <Text style={styles.text} >Day:{Day}</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 30 }}>
                    <Text style={styles.text}>TimeIn:{TimeIn}</Text>

                    <Text style={styles.text}>TimeOut:{TimeOut}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 30 }}>
                    <Text style={styles.text}>Time:{Times} - {Timee}</Text>


                </View>

            </View>

            <TouchableOpacity
                style={[styles.buttonContainer, styles.loginButton]}

                onPress={() => {
                    navigation.navigate('TeacherClaim', {
                        TeacherSlotId
                    })
                }}>
                <Text style={styles.loginText}>Claim</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default TeacherChr;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,

    },
    text: {
        fontSize: 15,


        color: '#000',
        fontWeight: 'bold',

    },
    imgStyle: {
        width: 60,
        height: 60,
        borderRadius: 40,

    },
    buttonContainer: {

        height: 45,
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        // marginBottom: 20,
        marginTop: 70,
        width: 200,
        borderRadius: 30,
        backgroundColor: 'transparent',
    },

    loginButton: {
        backgroundColor: appcolor.primarycolor,

        shadowColor: '#800',
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.5,
        shadowRadius: 12.35,

        elevation: 19,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginText: {
        color: 'white',
        fontWeight: 'bold',
    },

})