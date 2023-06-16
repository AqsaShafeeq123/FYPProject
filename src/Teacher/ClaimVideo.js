import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';

import axios from 'axios';
import WebView from 'react-native-webview';

const ClaimVideo = ({ navigation, route }) => {

    const { obj } = route.params;

    console.log('xyzzzzz', obj);


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 30, }}>Video Details</Text>

            <View style={{

                height: 210,
                width: 320,
                margin: 10,
                borderRadius: 20,

                marginLeft: 20



            }}>
                <WebView
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{ uri: `http://192.168.1.104:8000/api/get-claim-video?file=${obj}` }}
                />
            </View>

        </View>

    );
};

export default ClaimVideo;
