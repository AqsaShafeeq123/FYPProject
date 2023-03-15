import React, { useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,

    View,

    TouchableOpacity,
} from 'react-native';
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

const TeacherRecording = () => {
    const [searchRecording, setRecording] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ margin: '1%' }}>
                <Searchbar
                    placeholder="Search"
                    value={searchRecording}
                    theme={{ colors: { primary: global.color } }}
                    fontSize={12}
                    style={{ borderRadius: 10, color: global.color }}
                    onChangeText={text => setRecording(text)}
                />
            </View>
            <View style={{ flex: 1, padding: 5 }}>
                <FlatList
                    style={{ backgroundColor: '#fffFff', flex: 1 }}
                    data={DATA}
                    renderItem={({ item, index }) => {
                        if (item.name.toLowerCase().includes(searchRecording.toLowerCase())) {
                            return (
                                <View
                                    style={{
                                        padding: 5,
                                        backgroundColor: '#ffff',
                                        elevation: 2,
                                        margin: 3,
                                        borderRadius: 8,
                                    }}>
                                    <TouchableOpacity onPress={() => { }} style={[styles.item]}>

                                        <Text style={styles.title}>{item.name}</Text>
                                    </TouchableOpacity>
                                </View>
                            );
                        }
                    }}></FlatList>
            </View>
        </SafeAreaView>
    );
};

export default TeacherRecording;

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