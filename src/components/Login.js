import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Image, Alert } from 'react-native';

import { appcolor } from '../components/Colorss';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default Login = ({ navigation }) => {


    // states use in text box for api
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const storeData = async (nam, img) => {
        try {
            const data = {
                Name: nam,
                Image: img,
            };
            await AsyncStorage.setItem('TeacherData', JSON.stringify(data));
            console.log('Data saved successfully.');
        } catch (e) {
            console.log(e);
        }
    };

    const handleLogin = async () => {
        try {
            let response = await fetch('http://192.168.1.104:8000/api/signin?userId=' + username + '&password=' + password);
            let json = await response.json();
            // api response store
            let data = json;

            // console.log(data.role)
            console.log(data)
            console.log(username, password)
            storeData(data.name, data.image);

            if (data.role == 'Admin') {

                navigation.navigate('Tabs');
            }

            else if (data.role == 'Teacher') {

                navigation.navigate('TeacherDashboard', {
                    screen: 'HOME',
                    // passing obj to teacher dashboard
                    params: { dat: data },
                });

            }
            else if (data.role == 'Student') {
                navigation.navigate('StdDashboard', {

                    // passing obj to std dashboard
                    dat: data,
                });

            }
            else if (data.role == 'Director') {
                navigation.navigate('DirectorDashboard', {
                    screen: 'Home',
                    // screen: 'ShortReport',
                    params: { dat: data },
                });


            }
            else {
                alert('Invalid username or password');
            }

        } catch (error) {

        }

    };


    return (
        <View style={styles.container}>





            <ImageBackground
                source={require('../Images/bgimage.jpg')}
                style={styles.bgImage}
            >
            </ImageBackground>


            <View style={styles.logoContainer}>
                <Image source={require('../Images/logo.jpg')}
                    style={styles.logo} />
            </View>
            <View>

                <Text style={{ fontSize: 30, fontWeight: 'bold', marginVertical: 10, color: 'black', fontFamily: 'DancingScript-Regular' }}>
                    MeyePro
                </Text>
            </View>


            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputs}
                    placeholder=" username"
                    value={username}
                    placeholderTextColor={'black'}

                    underlineColorAndroid="transparent"
                    onChangeText={(e) => setUsername(e)}
                />
                <Image
                    style={styles.inputIcon}
                    source={{ uri: 'https://img.icons8.com/nolan/40/000000/email.png' }}
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputs}
                    placeholder="Password"
                    value={password}
                    placeholderTextColor={'black'}
                    secureTextEntry={true}
                    underlineColorAndroid="transparent"
                    onChangeText={(p) => setPassword(p)}
                />
                <Image
                    style={styles.inputIcon}
                    source={{ uri: 'https://img.icons8.com/nolan/40/000000/key.png' }}
                />
            </View>



            <TouchableOpacity
                style={[styles.buttonContainer, styles.loginButton]}

                onPress={handleLogin} >
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 300,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',

        shadowColor: '#808080',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        color: 'black',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginRight: 15,
        justifyContent: 'center',
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
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
    },
    loginText: {
        color: 'white',
        fontWeight: 'bold',
    },
    bgImage: {
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    logoContainer: {
        marginBottom: 10,
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth: 2,
        // borderColor: '#4682b4'
    },

});

