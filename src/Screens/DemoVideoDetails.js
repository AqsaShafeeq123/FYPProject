import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';

import axios from 'axios';

const DemoVideoDetails = ({ navigation, route }) => {

    const { obj } = route.params;

    console.log('Data', obj);
    const [loader, setLoader] = useState(true);
    const [videoDetail, setVideoDetail] = useState(null);

    const VideoSend = async (data) => {
        try {
            const response = await axios.get(`http://192.168.1.101:8000/api/demovideos?file=${data}`);
            console.log('res', response);
            if (response.status === 200) {
                setLoader(false);
                setVideoDetail(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (obj) {
            VideoSend(obj.file);
        }
    }, [obj]);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'black' }}>Demo Video Details</Text>
            <View style={{ padding: 10 }}>
                <View
                    style={{
                        // maxWidth: 200,
                        borderRadius: 10,
                        overflow: 'hidden',
                        backgroundColor: '#7788',
                    }}
                >
                    <Image
                        source={{ uri: `http://192.168.1.101:8000/api/demothumbnail?file=${obj.thumbnail}` }}
                        style={{ width: 300, height: 200 }}
                        resizeMode="cover"
                    />
                    <View style={{ padding: 10 }}>
                        {loader ? (
                            <ActivityIndicator size="small" color="#0000ff" />
                        ) : (
                            <>
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Details</Text>
                                <Text style={{ fontSize: 14, fontWeight: '600' }}>Sit Min: {videoDetail?.sitMin}</Text>
                                <Text style={{ fontSize: 14, fontWeight: '600' }}>Stand Min: {videoDetail?.standMin}</Text>
                                <Text style={{ fontSize: 14, fontWeight: '600' }}>Total Time In: {videoDetail?.totalTimeIn}</Text>
                                <Text style={{ fontSize: 14, fontWeight: '600' }}>Total Time Out: {videoDetail?.totalTimeOut}</Text>
                            </>
                        )}
                    </View>
                </View>
            </View>
        </View>
    );
};

export default DemoVideoDetails;
