
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { WebView } from 'react-native-webview';

const RecordingsPlayer = ({ navigation, route }) => {

    const { FileName } = route.params;
    console.log('spffffff', FileName);
    const splitString = FileName.split(',');

    const id = splitString[1]?.trim();
    const typeA = splitString[2]?.trim();

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Recordings Player</Text>


            <View style={styles.View}>
                <WebView

                    source={{
                        uri: `http://192.168.1.101:8000/api/videos?id=${id}&type=${typeA}`

                    }}
                    style={{ marginTop: 20 }}
                />

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    videoContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    videoPlayer: {
        width: '100%',
        height: '100%',
    },
    View: {
        height: 210,
        width: 320,
        margin: 10,
        borderRadius: 20,

        marginLeft: 20

    },

});

export default RecordingsPlayer;
