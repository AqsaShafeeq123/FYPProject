// import React, { useState } from 'react';
// import {
//     FlatList,
//     SafeAreaView,
//     StatusBar,
//     StyleSheet,
//     Text,

//     View,
//     Image,
//     TouchableOpacity,
// } from 'react-native';
// import { Searchbar } from 'react-native-paper';

// const DATA = [
//     {
//         id: '1',
//         name: 'Lab1 Rec',

//     },
//     {
//         id: '2',
//         name: 'Lab2 Rec',

//     },
//     {
//         id: '3',
//         name: 'Lt5 Rec',

//     },
//     {
//         id: '4',
//         name: 'Lt6 Rec',

//     },
//     {
//         id: '5',
//         name: 'Lt7 Rec',

//     },
// ];

// const TeacherRecording = ({ navigation, route }) => {

//     const { Name, Img } = route.params;

//     console.log(Name, Img);
//     const [searchRecording, setRecording] = useState('');
//     return (
//         <SafeAreaView style={styles.container}>
//             <View style={styles.txt}>

//                 <Image source={{ uri: 'http://192.168.0.105:8000/api/get-user-image/UserImages/Teacher/' + Img }}
//                     style={styles.imgStyle} />
//                 <Text style={styles.text}>{Name}</Text>

//             </View>

//             <View style={{ margin: '1%' }}>
//                 <Searchbar
//                     placeholder="Search"
//                     value={searchRecording}
//                     theme={{ colors: { primary: global.color } }}
//                     fontSize={12}
//                     style={{ borderRadius: 10, color: global.color }}
//                     onChangeText={text => setRecording(text)}
//                 />
//             </View>
//             <View style={{ flex: 1, padding: 5 }}>
//                 <FlatList
//                     style={{ backgroundColor: '#fffFff', flex: 1 }}
//                     data={DATA}
//                     renderItem={({ item, index }) => {
//                         if (item.name.toLowerCase().includes(searchRecording.toLowerCase())) {
//                             return (
//                                 <View
//                                     style={{
//                                         padding: 5,
//                                         backgroundColor: '#ffff',
//                                         elevation: 2,
//                                         margin: 3,
//                                         borderRadius: 8,
//                                     }}>
//                                     <TouchableOpacity onPress={() => { }} style={[styles.item]}>

//                                         <Text style={styles.title}>{item.name}</Text>
//                                     </TouchableOpacity>
//                                 </View>
//                             );
//                         }
//                     }}></FlatList>
//             </View>
//         </SafeAreaView>
//     );
// };

// export default TeacherRecording;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop: StatusBar.currentHeight || 0,
//     },
//     item: {
//         padding: 20,
//         marginVertical: 8,
//         marginHorizontal: 10,
//         borderRadius: 10,
//         flexDirection: 'row',
//         justifyContent: 'flex-start',
//     },
//     title: {
//         fontSize: 15,
//         color: 'black'
//     },
//     txt: {
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'space-between',

//         height: 100,
//         width: '95%',
//         borderRadius: 20,
//         // marginTop: 20,
//         padding: 9,
//         marginLeft: 10,
//         marginBottom: 10,
//         flexDirection: 'row'
//     },
//     text: {
//         fontSize: 15,

//         color: '#000',
//         fontWeight: 'bold',
//         marginRight: 180,
//     },

//     imgStyle: {
//         width: 60,
//         height: 60,
//         borderRadius: 40,
//         marginRight: 2,

//     },

// });





import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';
import Video from 'react-native-video';

const TeacherRecording = () => {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [isMuted, setIsMuted] = React.useState(false);
    return (
        <ScrollView>
            <View style={styles.body}>
                <View style={styles.View}>
                    {/* <WebView
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        source={{
                            uri: `http://192.168.0.105:8000/video?path=Recordings/file,63,start_recording.mp4`,
                            //   uri: 'http://www.youtube.com/watch?v=kW5GsrRqv-M',
                        }}
                    /> */}

                    <Video
                        source={{
                            uri: `http://192.168.0.105:8000/videoFile`,
                            //   uri: 'http://www.youtube.com/watch?v=kW5GsrRqv-M',
                        }}
                        ref={(ref) => {
                            this.player = ref
                        }}
                        paused={!isPlaying}
                        controls={true}
                        style={styles.backgroundVideo}
                        muted={isMuted}
                    />

                    {/* <WebView
                        source={{ html: '<iframe width="100%" height="50%" src="http:// 192.168.0.105:8000/video?path=Recordings/file,63,start_recording.mp4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' }}
                        style={{ marginTop: 20 }}
                    /> */}


                </View>
            </View>
        </ScrollView>
    );
};

export default TeacherRecording;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    View: {
        height: 250,
        width: 550,
        margin: 10,
        borderRadius: 20,
    },

    lable: {},
    backgroundVideo: {
        position: 'absolute',
        top: 60,
        left: 0,
        bottom: 0,
        right: 0,
    },
});







// import React, { useEffect, useState } from 'react';
// import { WebView } from 'react-native-webview';
// import {
//     ScrollView,
//     StyleSheet,
//     Text,
//     TextInput,
//     Pressable,
//     Alert,
//     Button,
//     TouchableOpacity,
//     FlatList,
//     Image,
//     View,
// } from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Video from 'react-native-video';

// export default function TeacherRecording({ navigation }) {
//     id = global.pid;
//     return (
//         <View style={{ flex: 1 }}>
//             {/* <WebView
//                 //source={{ html: '<iframe width="100%" height="50%" src="http:// 192.168.0.105:8000/video?path=Recordings/file,63,start_recording.mp4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' }}
//                 source={{ uri: "http:// 192.168.0.105:8000/video?path=Recordings/file,63,start_recording.mp4" }}
//                 style={{ marginTop: 20 }}
//             /> */}
//             <Video
//                 source={{ uri: `http:// 192.168.0.105:8000/videoFile` }}
//                 style={{ width: '100%', height: 300 }}
//                 resizeMode="contain"
//                 controls={true}
//             />
//         </View>
//     );
// }