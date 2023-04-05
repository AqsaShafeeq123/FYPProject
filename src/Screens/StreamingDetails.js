import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';
const StreamingDetails = ({ navigation, route }) => {

    const { uri, Disp, Instructor, Course, Time, Venue, Channnel, } = route.params;


    return (
        <View >
            <View style={styles.View}>
                <WebView
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{
                        uri: uri,
                    }}
                /></View>


            <View>

                <View style={styles.txt}>
                    <Text style={styles.text}>Disp:  {Disp}</Text>
                    <Text style={styles.text}>Instructor:  {Instructor}</Text>
                    <Text style={styles.text}>Course:  {Course}</Text>
                    <Text style={styles.text}>Time:  {Time}</Text>
                    <Text style={styles.text}>Venue:  {Venue}</Text>
                    <Text style={styles.text}>Channel:  {Channnel}</Text>
                </View>
            </View>
        </View>



    );
};

export default StreamingDetails;

const styles = StyleSheet.create({
    txt: {
        backgroundColor: '#fff',
        height: 280,
        width: 330,
        padding: 9,
        borderRadius: 20,
        marginLeft: 20,
        // alignItems: 'flex-start'
        marginTop: 20

    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 20

    },
    View: {
        height: 210,
        width: 320,
        margin: 10,
        borderRadius: 20,

        marginLeft: 20

    },


})
