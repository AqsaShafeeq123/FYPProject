import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { appcolor } from '../components/Colorss';
const Setting = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('TeacherList')}
            >
                <Text style={styles.buttonText}> Rule Setting    </Text>
            </TouchableOpacity>

        </View>
    );
};
export default Setting;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: appcolor.primarycolor,
        paddingHorizontal: 50,
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

