
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, Pressable, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import axios from 'axios';

import { Searchbar } from 'react-native-paper';

const DATA = [
    {
        id: '1',
        name: 'Lab1 Rec',

    },
    {
        id: '2',
        name: 'Lab2 Rec',

    },
    {
        id: '3',
        name: 'Lt5 Rec',

    },
    {
        id: '4',
        name: 'Lt6 Rec',

    },
    {
        id: '5',
        name: 'Lt7 Rec',

    },
];

const Recording = ({ navigation, route }) => {
    // searchbar
    const [searchRecording, setSearchRecording] = useState('');

    // apicode
    const [data, setData] = useState([]);

    const showRecordings = async () => {
        try {
            const response = await axios.get('http://192.168.1.104:8000/api/recordings-details');
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        showRecordings();
    }, []);


    return (
        <SafeAreaView style={styles.container}>
            <View style={{ margin: '1%' }}>
                <Searchbar
                    placeholder="Search"
                    value={searchRecording}

                    fontSize={12}
                    style={{ borderRadius: 10, color: global.color }}
                    onChangeText={text => setSearchRecording(text)}
                />
            </View>
            <View style={{ flex: 1, padding: 5 }}>
                <FlatList
                    style={{ flex: 1 }}
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        if (item.teacherName.toLowerCase().includes(searchRecording.toLowerCase())) {
                            return (
                                <Pressable
                                    onPress={() =>
                                        navigation.navigate('RecordingsPlayer',
                                            {
                                                FileName: item.fileName
                                            })
                                    }

                                    style={{
                                        padding: 2,
                                        backgroundColor: `#dcdcdc`,
                                        elevation: 2,
                                        margin: 13,
                                        borderRadius: 8,


                                        height: 290,
                                    }}>

                                    <Image
                                        source={{ uri: `http://192.168.1.104:8000/api/get-video-thumbnail/${item.thumbnail}` }}
                                        style={{ width: 320, height: 180, borderRadius: 5 }}
                                        resizeMode="cover"
                                    />

                                    <View style={{ flex: 1, paddingLeft: 10 }}>
                                        <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>{`Mr ${item.teacherName}`}</Text>
                                        <Text style={{ color: 'black', fontSize: 12 }}>{item.date}</Text>
                                        <Text style={{ color: 'black', fontSize: 12 }}>{item.fileName.split(',')[2].split('.')[0]}</Text>
                                        <Text style={{ color: 'black', fontSize: 12 }}>{item.courseName}</Text>
                                        <Text style={{ color: 'black', fontSize: 12 }}>{item.discipline}</Text>
                                    </View>


                                </Pressable>
                            );
                        }
                    }}></FlatList>
            </View>
        </SafeAreaView>
    );
};

export default Recording;

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

});














