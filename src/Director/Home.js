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
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Modal, Portal, Provider } from 'react-native-paper';
import { FAB } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { appcolor } from '../components/Colorss';


const Home = ({ navigation, route }) => {

    const { dat } = route.params;
    console.log(dat + '****')

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const [visible, setVisible] = React.useState(false);

    // fab wrk

    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;





    // Api response store for get
    const [teacherData, setTeacherData] = useState([]);

    // APi Code get Get DVr
    useEffect(() => {
        getTeacherDetail();

    }, []);
    async function getTeacherDetail() {
        try {
            let response = await fetch('http://192.168.1.101:8000/api/get-all-teacher-chr');
            let json = await response.json();
            setTeacherData(json);
            console.log(json);
        } catch (error) {
            console.log(error);
        }
    }



    const [searchTeacher, setSearchTeacher] = useState('');
    return (
        <Provider style={styles.container}>
            <View style={{ flexDirection: 'row', borderBottomWidth: 2, backgroundColor: '#fff', borderRadius: 9, top: 5 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.text}>
                        {/* extracting obj */}
                        {dat.name}



                    </Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Ionicons

                        name="notifications-circle"
                        onPress={() => console.log('Edit pressed')}

                        size={42}
                        color='#00008b'
                        style={{
                            alignSelf: 'center',
                            marginRight: 30
                        }}


                    />
                    {
                        dat.image == null ?
                            <Image source={require('../Images/imgIcon.png')} style={styles.imgStyle} />
                            :
                            <Image source={{ uri: 'http://192.168.1.101:8000/api/get-user-image/UserImages/Teacher/' + dat.image }} style={styles.imgStyle} />
                    }
                </View>

            </View>

            {/* Below flatlist */}
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

                <Ionicons

                    name="filter-sharp"
                    onPress={showModal}

                    size={32}
                    color='#00008b'
                    style={{
                        alignSelf: 'center',
                        marginRight: 13,
                        justifyContent: 'flex-end'

                    }}


                />
            </View>

            {/* Filter icon code */}


            <Portal>
                <Modal
                    visible={visible}
                    onDismiss={hideModal}
                    style={{ padding: 12 }}
                    contentContainerStyle={{
                        backgroundColor: appcolor.primarycolor,
                        padding: 30,
                        borderRadius: 8,
                    }}>
                    <Text style={{ textAlign: 'center', fontSize: 16, color: '#ffffff' }}>
                        Search By
                    </Text>

                    <View style={{ padding: 5, top: 7 }}>
                        <TouchableOpacity
                            style={{
                                width: '50%',
                                top: 14,
                                alignSelf: 'center',
                                margin: 5,
                                alignItems: 'center',
                                justifyContent: 'space-evenly',
                                borderRadius: 10,
                                padding: 10,
                                height: 50,

                                backgroundColor: '#ffffff',
                            }}
                            onPress={() => {

                            }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: 'black',

                                }}>
                                Date
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: '50%',
                                top: 14,
                                alignSelf: 'center',
                                margin: 5,
                                alignItems: 'center',
                                justifyContent: 'space-evenly',
                                borderRadius: 10,
                                padding: 10,
                                height: 50,

                                backgroundColor: '#ffffff',
                            }}
                            onPress={() => {

                            }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: 'black',

                                }}>
                                Course
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: '50%',
                                top: 14,
                                alignSelf: 'center',
                                margin: 5,
                                alignItems: 'center',
                                justifyContent: 'space-evenly',
                                borderRadius: 10,
                                padding: 10,
                                height: 50,

                                backgroundColor: '#ffffff',
                            }}
                            onPress={() => {

                            }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: 'black',

                                }}>
                                Section
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: '50%',
                                top: 14,
                                alignSelf: 'center',
                                margin: 5,
                                alignItems: 'center',
                                justifyContent: 'space-evenly',
                                borderRadius: 10,
                                padding: 10,
                                height: 50,

                                backgroundColor: '#ffffff',
                            }}
                            onPress={() => {


                            }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: 'black',

                                }}>
                                Teacher
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Modal>

            </Portal>
            {/* FAB */}
            <Portal>


                <FAB.Group
                    style={{ marginBottom: 50, position: 'absolute' }}
                    open={open}
                    visible
                    icon={open ? 'calendar-today' : 'plus'}
                    actions={[

                        {
                            icon: 'star',
                            label: 'Switch to Activity ',
                            onPress: () => { navigation.navigate('Activity') },
                        },
                        {
                            icon: 'view-grid',
                            label: 'Switch to DataTable',
                            onPress: () => { navigation.navigate('ChrDetail') },
                        },

                    ]}
                    onStateChange={onStateChange}
                    onPress={() => {
                        if (open) {
                            // do something if the speed dial is open
                        }
                    }}
                />

            </Portal>

            <View style={{ flex: 1, }}>
                <FlatList
                    style={{}}
                    // data={DATA}
                    data={teacherData}
                    renderItem={({ item, index }) => {
                        if (item.courseName.toLowerCase().includes(searchTeacher.toLowerCase())) {
                            return (
                                <Pressable
                                    onPress={() => {
                                        navigation.navigate('ClassHeldReport', {
                                            Name: item.name,
                                            Discipline: item.discipline,
                                            Date: item.date,
                                            Course: item.courseName,
                                            Day: item.day,
                                            TimeIn: item.totalTimeIn,
                                            TimeOut: item.totalTimeOut,
                                            Times: item.startTime,
                                            Timee: item.endTime,
                                            Status: item.status,
                                            Img: item.image,


                                        });
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
                                                {item.teacherName}
                                            </Text>
                                        </View>
                                        <View>
                                            <Image source={{ uri: 'http://192.168.1.101:8000/api/get-user-image/UserImages/Teacher/' + item.image }} style={styles.imgStyle} />
                                        </View>
                                    </View>
                                    <View style={{}}>
                                        <Text style={{ color: 'black', fontWeight: '600' }}>
                                            Date:{item.date}
                                        </Text>
                                    </View>

                                    <View style={{}}>
                                        <Text style={{ color: 'black', fontWeight: '600' }}>
                                            Course:{item.courseName}
                                        </Text>
                                    </View>
                                    <View style={{}}>
                                        <Text style={{ color: 'black', fontWeight: '600' }}>
                                            Discipline:{item.discipline}
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

export default Home;

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







