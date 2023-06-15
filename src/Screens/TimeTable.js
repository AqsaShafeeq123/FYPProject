import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import axios from 'axios';

const TimeTable = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            console.log('selected file:', res);
            setFile(res);
        } catch (error) {
            console.log('Error picking file:', error);
        }
    };

    const handleSubmit = async () => {
        try {
            const formData = new FormData();
            formData.append('file', {
                uri: file.uri,
                type: file.type,
                name: file.name,
            });
            const response = await axios.post(
                'http://192.168.1.101:8000/api/add-timetable',
                formData
            );
            console.log('Response:', response.data);
            alert('Added Successfully');
        } catch (error) {
            console.log('Error:', error);
            alert('Not Added');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Upload TimeTable</Text>
            <View style={styles.formContainer}>
                <TouchableOpacity style={styles.button} onPress={handleFileChange}>
                    <Text style={styles.buttonText}>Choose File</Text>
                </TouchableOpacity>
                {file && <Text style={styles.fileText}>Selected File: {file.name}</Text>}
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    formContainer: {
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
    },
    fileText: {
        marginTop: 10,
        fontSize: 16,
    },
    submitButton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 20,
    },
});

export default TimeTable;


// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const TimeTable = () => {
//     return (
//         <View>
//             <Text>TimeTable</Text>
//         </View>
//     )
// }

// export default TimeTable

// const styles = StyleSheet.create({})
