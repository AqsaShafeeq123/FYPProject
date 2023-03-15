import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const StreamingDetails = ({ navigation, route }) => {

    const { Disp, TeacherName, Subject, Name } = route.params


    return (
        <View style={styles.txt}>
            <Text style={styles.text}>Disp: {Disp}</Text>
            <Text style={styles.text}>TeacherName :{TeacherName} </Text>
            <Text style={styles.text}>Subject :{Subject} </Text>
            <Text style={styles.text}>Name : <Text>{Name}</Text> </Text>
        </View>
    )
}

export default StreamingDetails;

const styles = StyleSheet.create({
    txt: {
        backgroundColor: '#fff',
        padding: 20,

        justifyContent: 'flex-start',
        color: 'black',
        height: 120,
        width: '100%',
        borderRadius: 30,
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 10,
        marginTop: 50,


    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',

    }
})