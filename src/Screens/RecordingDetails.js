
import React, { useEffect, useState } from 'react';
import { WebView } from 'react-native-webview';
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    Pressable,
    Alert,
    Button,
    TouchableOpacity,
    FlatList,
    Image,
    View,
} from 'react-native';



const RecordingDetails = ({ navigation, route }) => {
    const {
        FileName,
        CourseName,
        Section,
        Date,
    } = route.params;
    console.log(route)

    let nam = FileName.split(',')
    console.log(nam[1])
    console.log(nam[2])


    console.log(FileName)
    return (
        <View>
            <View style={styles.View}>
                <WebView

                    source={{
                        uri: `http://192.168.1.103:8000/api/videos?id=${nam[1]}&type=${nam[2]}`

                    }}
                    style={{ marginTop: 20 }}
                />

            </View>


            <View style={{ backgroundColor: '#fff', top: 40, elevation: 5, height: '25%', width: '90%', marginLeft: 10, padding: 9 }}>

                <View style={{}}>
                    <Text style={{ color: 'black', fontWeight: '600', }}>
                        {FileName}
                    </Text>

                </View>
                <View style={{}}>
                    <Text style={{ color: 'black', fontWeight: '600', }}>
                        {CourseName}
                    </Text>

                </View>


                <View style={{}}>
                    <Text style={{ color: 'black', fontWeight: '600', }}>
                        {Section}
                    </Text>

                </View>
                <View style={{}}>
                    <Text style={{ color: 'black', fontWeight: '600', }}>
                        {Date}
                    </Text>

                </View>
            </View>
        </View>

    );
}
export default RecordingDetails;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    View: {
        height: 210,
        width: 320,
        margin: 10,
        borderRadius: 20,

        marginLeft: 20

    },


});



