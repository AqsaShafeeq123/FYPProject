import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Pressable } from 'react-native';

const Demo = ({ navigation }) => {


    // ---------------------apiCode
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('http://192.168.1.104:8000/api/demo');
            const json = await response.json();
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
                            navigation.navigate('DemoVideoDetails',
                                {
                                    obj: item
                                })
                        }
                        // onPress={() => detailDemo(item)}
                        style={{
                            padding: 2,
                            backgroundColor: `#dcdcdc`,
                            elevation: 2,
                            margin: 13,
                            borderRadius: 8,


                            height: 200,
                        }}>

                        <Image
                            source={{
                                uri: `http://192.168.1.104:8000/api/demothumbnail?file=${item.thumbnail}`,
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
                                {item.thumbnail.split('.')[0]}
                            </Text>
                        </View>



                    </Pressable>
                )}>

            </FlatList>
        </View>
    );
};

export default Demo;

