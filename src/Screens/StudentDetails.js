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
        name: 'Hina ',

    },
    {
        id: '2',
        name: 'Laraib',

    },
    {
        id: '3',
        name: 'Aqsa',

    },
    {
        id: '4',
        name: 'Lt6 Rec',

    },
];

const StudentDetails = () => {
    const [searchRecording, setSearchRecording] = useState('');
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

export default StudentDetails;

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