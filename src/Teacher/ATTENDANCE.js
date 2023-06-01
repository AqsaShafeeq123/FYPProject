import { StyleSheet, Text, View, TouchableOpacity, FlatList, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { launchCamera, } from 'react-native-image-picker';
import { appcolor } from '../components/Colorss';

import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
const ATTENDANCE = ({ navigation, route }) => {

    const { Discipline, Course } = route.params;
    // console.log(route);
    const [imagelink, setimage] = useState({});
    const [isimage, setisimage] = useState(false);

    // Api response store
    const [stddata, setStdData] = useState([]);

    // file written here is key which is also in formdata
    const uploadImage = async (file) => {

        const formData = new FormData();
        console.log(file, 'file')

        formData.append('file', file);

        const response = await fetch('http://192.168.1.104:8000/api/mark-attendance', {
            method: 'POST',
            body: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log("API RESPONSE----------------------------", response)
        let jsonResponse = await response.json();
        setStdData(jsonResponse);
        console.log(jsonResponse);
    };


    // save button api
    const handleSavePress = async () => {

        await axios.post('http://192.168.1.104:8000/api/add-attendance', stddata).then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        // var myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/json");

        // // var raw = JSON.stringify(stddata);

        // console.log('!!!!!!!!!!!!!!!!!' + raw);

        // var requestOptions = {
        //     method: 'POST',
        //     headers: myHeaders,
        //     body: raw,
        //     redirect: 'follow'
        // };

        // await fetch("http://192.168.1.104:8000/api/add-attendance", requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));


    }



    // camera btn clicl func through which img upload to server

    async function onCameraButtonClick() {
        let options = {
            options: {
                maxHeight: 200,
                maxWidth: 200,
                selectionLimit: 5,
                mediaType: 'photo',
                includeBase64: false,
            },
        };
        const result = await launchCamera(options);

        setisimage(true);
        const obj = {
            uri: result.assets[0].uri,
            name: result.assets[0].fileName,
            type: result.assets[0].type
        }
        setimage(obj);
        // console.log(result.assets[0]);

        console.log('image>>>>', obj);
        await uploadImage(obj)

        // let src = result.assets[0].base64;
        // setImage(src);
    }


    return (
        <View style={{ flex: 1, padding: 4 }}>
            {/* getting data from prev screen  */}
            <View style={{ top: 10, backgroundColor: '#fff', borderRadius: 8, elevation: 3, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 3 }}>
                    <Text style={{ color: 'black' }}>Discipline:{Discipline}</Text>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 3 }}>
                    <Text style={{ color: 'black' }}>Course:{Course}</Text>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 3 }}>
                    <Text style={{ color: 'black' }}>Date:</Text>
                    <Text style={{ color: 'black' }}>CS-8A</Text>
                </View>
            </View>
            {/* above func calling */}
            <View style={{ top: 15 }}>
                <Ionicons

                    name="camera"
                    onPress={onCameraButtonClick}

                    size={72}
                    color='#00008b'
                    style={{
                        alignSelf: 'center',

                    }} />
            </View>
            <FlatList
                style={{ top: 20 }}
                data={stddata}

                renderItem={({ item, index }) => {
                    return (
                        <View
                            style={{
                                height: 70,
                                padding: 5,
                                backgroundColor: '#ffff',
                                elevation: 2,
                                margin: 3,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                borderRadius: 8,
                            }}>
                            <Text style={styles.title}> {item.name}</Text>

                            {item.status ? <Text style={styles.title}>P</Text> : <Text style={styles.title}>A</Text>}
                        </View>
                    );
                }}></FlatList>

            <View style={{ marginTop: 30, alignItems: 'center', justifyContent: 'center', }}>
                <TouchableOpacity style={styles.button} onPress={handleSavePress}>
                    <Text style={{ color: 'white', textAlign: 'center' }}> Save!</Text>

                </TouchableOpacity></View>



        </View>

    )
}

export default ATTENDANCE

const styles = StyleSheet.create({
    button: {
        backgroundColor: appcolor.primarycolor,
        padding: 10,
        borderRadius: 15,
        marginBottom: 80,
        width: '40%',
        height: 40,

    },
    title: {
        fontSize: 15,
        color: 'black',
    },

})


