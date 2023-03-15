import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Image } from 'react-native';

import { appcolor } from '../components/Colorss';

export default Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../Images/bgimage.jpg')}
                style={styles.bgImage}
            />


            <View>

                <Text style={{ fontSize: 30, fontWeight: 'bold', marginVertical: 10, color: 'black', fontFamily: 'DancingScript-Regular' }}>
                    MeyePro
                </Text>
            </View>


            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputs}
                    placeholder="Email"
                    placeholderTextColor={'black'}
                    keyboardType="email-address"
                    underlineColorAndroid="transparent"
                    onChangeText={e => setEmail({ e })}
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
                    placeholderTextColor={'black'}
                    secureTextEntry={true}
                    underlineColorAndroid="transparent"
                    onChangeText={p => setPassword({ p })}
                />
                <Image
                    style={styles.inputIcon}
                    source={{ uri: 'https://img.icons8.com/nolan/40/000000/key.png' }}
                />
            </View>



            <TouchableOpacity
                style={[styles.buttonContainer, styles.loginButton]}

                onPress={() => navigation.navigate('Tabs')}>

                {/* onPress={() => navigation.navigate('StdDashboard')}> */}

                {/* onPress={() => navigation.navigate('TeacherDashboard')}> */}

                {/* onPress={() => navigation.navigate('DirectorDashboard')}>   */}


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


});

