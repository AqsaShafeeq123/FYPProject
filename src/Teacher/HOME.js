import { FlatList, StyleSheet, Text, View, Image, Pressable } from 'react-native';

import React, { useState } from 'react';
import { appcolor } from '../components/Colorss';
import Ionicons from 'react-native-vector-icons/Ionicons';
const HOME = ({ navigation, route }) => {

    const { dat } = route.params;

    const DATA = [
        {
            id: '1',
            venue: 'LAB 6',
            Course: 'MAP',
            Discipline: 'Flutter'

        },
        {
            id: '2',
            venue: 'LAB 6',
            Course: 'MAP',
            Discipline: 'Flutter'

        },
        {
            id: '3',
            venue: 'LAB 6',
            Course: 'MAP',
            Discipline: 'Flutter'

        },
    ];

    return (
        <View style={{ flex: 1, marginTop: 8, padding: 4, backgroundColor: '#eee' }}>

            <View style={{ flexDirection: 'row', borderBottomWidth: 2, backgroundColor: '#fff', borderRadius: 9 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.text}>
                        {/* extracting obj */}
                        {dat.name}

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
                    <Image source={{ uri: 'http://192.168.0.105:8000/api/get-user-image/UserImages/Teacher/' + dat.image }} style={styles.imgStyle} />
                </View>

            </View>

            {/* flatlist */}
            <View style={{ flex: 1, padding: 5, top: 10 }}>
                <FlatList
                    style={{ padding: 2 }}
                    data={DATA}
                    renderItem={({ item, index }) => {
                        return (
                            <View
                                onPress={() => {

                                }}
                                style={{
                                    padding: 10,
                                    backgroundColor: `#6495ed`,
                                    elevation: 2,
                                    margin: 3,
                                    borderRadius: 8,

                                    height: 100,
                                }}>

                                <View>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            color: 'black',
                                            fontWeight: 'bold',
                                        }}>
                                        Venue:{item.venue}
                                    </Text>
                                </View>


                                <View style={{}}>
                                    <Text style={{ color: 'black', fontWeight: '600', top: 5 }}>
                                        Course:{item.Course}
                                    </Text>
                                </View>

                                <View style={{}}>
                                    <Text style={{ color: 'black', fontWeight: '600', top: 8 }}>
                                        Discipline:{item.Discipline}
                                    </Text>
                                </View>
                            </View>
                        );
                    }}></FlatList>
            </View>
        </View>


    );
};

export default HOME;

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

});








