
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { appcolor } from '../components/Colorss';



const Preschedule = ({ navigation }) => {


    const handlePress = () => {
        navigation.navigate('SlotsChecking', {
            Name: selectedValue,
            id: '123',

        });
    };

    const [selectedValue, setSelectedValue] = useState(' ');
    return (

        <View style={styles.container}>
            <Text style={styles.label}>Select Teacher Name:</Text>
            <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Mr. Umar" value="Mr. Umar" />
                <Picker.Item label="Mr.Aftab" value="Mr.Aftab" />
                <Picker.Item label="Dr. Naseer" value="Dr. Naseer" />
                <Picker.Item label="Dr. Munir" value="Dr. Munir" />
                <Picker.Item label="Mr.Zahid" value="Mr.Zahid" />
            </Picker>


            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.text}> OKAY!</Text>



            </TouchableOpacity>
        </View>
    );
};


export default Preschedule;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333'
    },
    picker: {
        width: 270,
        height: 50,
        borderWidth: 4,
        borderColor: 'black',
        marginBottom: 106,
        color: 'black',
        backgroundColor: appcolor.primarycolor
    },
    button: {
        backgroundColor: appcolor.primarycolor,
        padding: 10,
        borderRadius: 5,
    },
    text: {
        color: 'white',
        textAlign: 'center',
    },


    title: {
        fontSize: 15,
        color: 'black'
    },
});