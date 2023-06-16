import React, { useState, useEffect } from 'react';
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,

    View,
    Image,
    TouchableOpacity,
    Pressable
} from 'react-native';
import { Searchbar } from 'react-native-paper';



const TeacherRecording = ({ navigation, route }) => {

    const { Name, Img } = route.params;

    console.log(Name, Img);


    // Api response store for get
    const [teacherRec, setTeacherRec] = useState([]);

    // APi Code get Get Rec

    async function getTeacherRec() {
        try {
            let response = await fetch('http://192.168.1.104:8000/api/recordings-details-by-teachername/' + Name);
            let json = await response.json();
            setTeacherRec(json);
            console.log(json);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getTeacherRec();

    }, []);


    const [searchRecording, setRecording] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.txt}>

                <Image source={{ uri: 'http://192.168.1.104:8000/api/get-user-image/UserImages/Teacher/' + Img }}
                    style={styles.imgStyle} />
                <Text style={styles.text}>{Name}</Text>

            </View>

            <View style={{ margin: '1%' }}>
                <Searchbar
                    placeholder="Search"
                    value={searchRecording}
                    theme={{ colors: { primary: global.color } }}
                    fontSize={12}
                    style={{ borderRadius: 10, color: global.color }}
                    onChangeText={text => setRecording(text)}
                />
            </View>
            <View style={{ flex: 1, padding: 5 }}>
                <FlatList
                    style={{ backgroundColor: '#fffFff', flex: 1 }}
                    data={teacherRec}
                    renderItem={({ item, index }) => {
                        if (item.courseName.toLowerCase().includes(searchRecording.toLowerCase())) {
                            return (
                                <View
                                    style={{
                                        padding: 5,
                                        backgroundColor: '#ffff',
                                        elevation: 2,
                                        margin: 3,
                                        borderRadius: 8,
                                    }}>
                                    <Pressable
                                        onPress={() => {
                                            navigation.navigate('RecordingDetails', {
                                                FileName: item.fileName,
                                                CourseName: item.courseName,
                                                Section: item.discipline,
                                                Date: item.date,
                                            });
                                        }}
                                        style={{
                                            padding: 10,
                                            marginVertical: 8,
                                            marginHorizontal: 10,
                                            borderRadius: 10,
                                            flexDirection: 'row',
                                            justifyContent: 'flex-start',
                                            alignItems: 'center',
                                        }}
                                    >




                                        <Image
                                            source={{ uri: `http://192.168.1.104:8000/api/get-video-thumbnail/${item?.thumbnail}` }}
                                            style={{
                                                width: 80,
                                                height: 90,
                                                borderRadius: 10,
                                                marginLeft: -24,
                                                margin: 2

                                            }}
                                        />
                                        <View>


                                            <Text style={{ color: 'black', fontWeight: '600' }}>{item.date}</Text>


                                            <Text style={{ color: 'black', fontWeight: '600' }}>
                                                {/* {item.fileName.split(",")[2].split("."[0])} */}
                                                {item.fileName}
                                            </Text>


                                            <Text style={{ color: 'black', fontWeight: '600' }}>
                                                CourseName:{item.courseName}
                                            </Text>



                                            <Text style={{ color: 'black', fontWeight: '600' }}>
                                                Section:{item.discipline}
                                            </Text>


                                        </View>
                                    </Pressable>
                                </View>
                            );
                        }
                    }}></FlatList>
            </View >
        </SafeAreaView >
    );
};

export default TeacherRecording;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 15,
        top: 4,
        color: 'black',
    },
    txt: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',

        height: 100,
        width: '95%',
        borderRadius: 20,
        // marginTop: 20,
        padding: 9,
        marginLeft: 10,
        marginBottom: 10,
        flexDirection: 'row'
    },
    text: {
        fontSize: 15,

        color: '#000',
        fontWeight: 'bold',
        marginRight: 180,
    },

    imgStyle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 2,

    },

});












