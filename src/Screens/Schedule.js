import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { appcolor } from '../components/Colorss';
const Schedule = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Reschedule')}
            >
                <Text style={styles.buttonText}> Reschedule   </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Preschedule')}
            >
                <Text style={styles.buttonText}> Preschedule </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Swap')}
            >
                <Text style={styles.buttonText}>      Swap       </Text>
            </TouchableOpacity>
        </View>
    );
};
export default Schedule;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: appcolor.primarycolor,
        paddingHorizontal: 40,
        paddingVertical: 10,

        marginVertical: 10,
        borderRadius: 30,
        elevation: 29,
    },
    buttonText: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold'
    },
});



