import React, { useState, useEffect } from 'react';
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    Pressable,
    Alert,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Button, Dialog, Portal, Provider, Modal } from 'react-native-paper';
import { FAB } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { appcolor } from '../components/Colorss';
import axios from 'axios';
import moment from 'moment';

const SwappingUsers = ({ navigation, route }) => {

    const value = route.params;
    console.log(value, 'abcd')
    // console.log(route?.params);


    const [newData, setNewData] = useState();
    //   const [data, setData] = useState([]);
    const [swapData, setSwapData] = useState([]);

    // APi Code
    useEffect(() => {
        fetchSwappingUser();

    }, []);
    // useEffect(() => {
    //     if (newData) {


    //     }
    // }, [newData])
    const fetchSwappingUser = async () => {
        try {
            console.log(1, value?.startTime);
            const response = await axios.get(
                `http://192.168.1.101:8000/api/get-swapping-teacher-data?day=${value.day}&startTime=${value.startTime}&endTime=${value.endTime}&timeTableId=${value.timeTableId}`
            );
            console.log(response.data);
            setSwapData(response.data);
        } catch (error) {
            console.log('Error fetching swapping user:', error);
            // Handle error state or display error message
        }
    };

    const handlePress = (item) => {

        // console.log(5555, item);
        setNewData(item?.timeTableId);
    };



    // =========================================
    // dlt modal
    const [dvisible, setdVisible] = React.useState(false);
    const [timeTableId, setTimeTableId] = useState('')
    const showDialog = (timeTableId) => {
        setTimeTableId(timeTableId)
        setdVisible(true)
    }

    const hideDialog = () => {

        setdVisible(false);
    }



    console.log("timeTableId", timeTableId)

    // ====================================
    const addSwap = async () => {
        try {
            const currentDate = moment().format('YYYY-MM-DD');
            const startDate = moment(currentDate);
            const nextDates = [];

            for (let i = 0; i <= 7; i++) {
                nextDates.push(startDate.clone().add(i, 'days'));
            }

            const day = value?.day; // Replace with your desired day
            let obj;
            for (let dateTime of nextDates) {
                if (moment(dateTime).format('dddd') === day) {
                    const formattedDate = moment(dateTime).format('YYYY-MM-DD');
                    obj = {
                        id: 0,
                        timeTableIdFrom: value.timeTableId,
                        timeTableIdTo: newData,
                        date: formattedDate,
                        day: value.day,
                        startTime: value.startTime,
                        endTime: value.endTime,
                        status: false,
                    };
                }
            }
            console.log(5555, obj);

            const response = await axios.post('http://192.168.1.101:8000/api/add-swapping', obj);
            console.log(response.data);
            if (response.data.data === 'okay') {
                navigation.goBack();

            }
            Alert.alert(response.data.data);
        } catch (error) {
            console.log('Error adding swap:', error);
            // Handle error state or display error message
        }
    };


    // SearchBar
    const [searchTeacher, setSearchTeacher] = useState('');
    return (
        <Provider style={styles.container}>
            <Portal>
                <Dialog visible={dvisible} onDismiss={hideDialog}>
                    <Dialog.Title>Delete</Dialog.Title>
                    <Dialog.Content>
                        <Text variant="bodyMedium">Are You Sure To Swap?</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button
                            onPress={() => {
                                addSwap();
                                hideDialog();
                            }

                            }>
                            Yes
                        </Button>
                        <Button onPress={() => {
                            setTimeTableId('')
                            hideDialog()
                        }}>No</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
            <View style={{ margin: '3%', flexDirection: 'row', }}>
                <Searchbar
                    placeholder="Search"
                    value={searchTeacher}
                    placeholderTextColor="#000"
                    inputStyle={{ fontSize: 16, color: '#000' }}
                    fontSize={12}
                    style={{ borderRadius: 10, backgroundColor: '#f5fffa', width: '89%', marginRight: 7 }}
                    onChangeText={text => setSearchTeacher(text)}
                />


            </View>
            {/* Flatlist */}

            <View style={{ flex: 1, }}>
                <FlatList
                    style={{}}
                    // data={DATA}
                    data={swapData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        if (item.name.toLowerCase().includes(searchTeacher.toLowerCase())) {
                            return (
                                <Pressable
                                    onPress={() => {
                                        showDialog(value?.timeTableId);
                                        handlePress(item)
                                    }}
                                    style={{
                                        padding: 2,
                                        backgroundColor: `#dcdcdc`,
                                        elevation: 2,
                                        margin: 13,
                                        borderRadius: 8,


                                        height: 150,
                                    }}>
                                    <View
                                        style={{
                                            flexDirection: 'row',

                                            justifyContent: 'space-between',
                                        }}>
                                        <View>
                                            <Text
                                                style={{
                                                    fontSize: 16,
                                                    color: 'black',
                                                    fontWeight: 'bold',
                                                }}>
                                                {item?.name}
                                            </Text>
                                        </View>
                                        {
                                            item.image == null ?
                                                <Image source={require('../Images/imgIcon.png')} style={styles.imgStyle} />
                                                :
                                                <Image source={{ uri: 'http://192.168.1.101:8000/api/get-user-image/UserImages/Teacher/' + item.image }} style={styles.imgStyle} />
                                        }
                                    </View>
                                    <View style={{}}>
                                        <Text style={{ color: 'black', fontWeight: '600' }}>
                                            Venue: {item?.venue}
                                        </Text>
                                    </View>

                                    <View style={{}}>
                                        <Text style={{ color: 'black', fontWeight: '600' }}>
                                            Discipline: {item?.discipline}
                                        </Text>
                                    </View>


                                    <View style={{}}>
                                        <Text style={{ color: 'black', fontWeight: '600', alignSelf: 'flex-end' }}>
                                            {item.status}
                                        </Text>

                                    </View>

                                    <View style={{ borderBottomWidth: 4, borderBottomColor: 'red' }}>

                                    </View>
                                </Pressable>
                            );
                        }
                    }}></FlatList>
            </View>
        </Provider>

    );
};

export default SwappingUsers;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,

    },
    item: {
        padding: 30,
        marginVertical: 8,
        marginHorizontal: 10,
        borderRadius: 10,

        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 15,
        top: 20,
        color: 'black',
    },
    text: {
        fontSize: 15,

        color: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 25
    },
    imgStyle: {
        width: 60,
        height: 60,
        borderRadius: 40,

    },
});





