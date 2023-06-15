import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Pressable } from 'react-native';

const TeacherClaim = ({ navigation, route }) => {
    const {
        TeacherSlotId
    } = route.params;
    console.log(TeacherSlotId, 'alienssssss')

    // ---------------------apiCode
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('http://192.168.1.101:8000/api/teacher-claim?teacherSlotId=' + TeacherSlotId);
            const json = await response.json();
            console.log(json)
            setData(json);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);





    return (


        <View style={{ flex: 1, padding: 5 }}>
            <FlatList
                style={{ backgroundColor: '#fffFff', flex: 1 }}
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (


                    <Pressable
                        onPress={() =>
                            navigation.navigate('ClaimVideo',
                                {
                                    obj: item.file
                                })
                        }

                        style={{
                            padding: 2,
                            backgroundColor: `#dcdcdc`,
                            elevation: 2,
                            margin: 13,
                            borderRadius: 8,


                            height: 250,
                        }}>

                        <Image
                            source={{
                                uri: `http://192.168.1.101:8000/api/claim-video-thumbnails?file=${item.thumbnail}`,
                            }}
                            style={{
                                // maxWidth: 300,
                                width: '100%',
                                height: 200,
                                borderRadius: 10,
                            }}
                            resizeMode="cover"
                        />
                        <View>
                            <Text style={{ color: 'black', fontWeight: '600' }}>
                                {item.folder}
                            </Text>
                        </View>
                        <View>
                            <Text style={{ color: 'black', fontWeight: '600' }}>
                                {item?.thumbnail.split(".")[0].split("/")[4].split(",")[0]} - {item?.thumbnail.split(".")[0].split("/")[4].split(",")[1]}
                            </Text>
                        </View>



                    </Pressable>
                )}>

            </FlatList>
        </View>
    );
};

export default TeacherClaim;

