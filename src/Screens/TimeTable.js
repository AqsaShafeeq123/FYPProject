

import {
    StyleSheet,
    Text,
    SafeAreaView,
    Button,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import DocumentPicker from 'react-native-document-picker'; // Import DocumentPicker
import axios from 'axios';
const TimeTable = () => {
    const [file, setFile] = useState();
    const [name, setName] = useState();
    const handleFileChange = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            console.log('selected file:', res);
            setFile(res[0]);
            setName(res[0].name);
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
                'http://192.168.1.104:8000/api/add-timetable',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            console.log('Response:', response.data);
            alert('Added Successfully');
        } catch (error) {
            console.log('Error:', error);
            alert('Not Added');
        }
    };


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'dark-content'} />
            {/* {fileResponse.map((file, index) => ( */}
            <Text
                // key={index.toString()}
                style={styles.uri}
                numberOfLines={1}
                ellipsizeMode={'middle'}></Text>
            {/* ))} */}
            <Button title="Select 📑" onPress={handleFileChange} />

            <Text style={styles.uri}>Selected File: {name}</Text>

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    uri: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
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

