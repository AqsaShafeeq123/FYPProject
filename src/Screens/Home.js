import { Text, SafeAreaView, TextInput, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { appcolor } from '../components/Colorss';
const Home = () => {
    const [search, setSearch] = useState('Search by Name');



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: appcolor.bgcolor }}>
            <View style={{ flex: 0, backgroundColor: appcolor.primarycolor, height: 40, alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: '#ffffff', fontSize: 17 }}>Live Stream</Text>
            </View>
            <View style={styles.container}>
                <Picker
                    style={styles.inputtxt}
                    selectedValue={search}
                    onValueChange={e => setSearch(e)}>
                    <Picker.Item label="Search by Name" value="Name" />
                    <Picker.Item label="Search by Venue" value="Venue" />
                    <Picker.Item label="Search by Section" value="Section" />
                </Picker>


                <Text style={styles.txt}>
                    No Camera Available
                </Text>

            </View>



        </SafeAreaView>
    );
};

export default Home;
const styles = StyleSheet.create({
    container: {

        justifyContent: 'center',
        alignItems: 'center',


    },


    inputtxt: {

        borderBottomColor: '#F5FF',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        borderBottomWidth: 1,
        width: 330,
        height: 45,
        marginTop: 15,
        color: "black",
        marginLeft: -9,
        backgroundColor: "#d3d3d3",
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
        height: 55,

        marginRight: 200,
        borderBottomColor: '#FFFFFF',
        color: 'black',

    },
    txt: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 300,


    },
});
