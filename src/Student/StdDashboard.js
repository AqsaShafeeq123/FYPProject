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
import Ionicons from 'react-native-vector-icons/Ionicons';
import { appcolor } from '../components/Colorss';
const DATA = [
    {
        id: '1',
        name: 'Visual Programming',
        Credit_hours: '3',
        Teach_By: 'Mr.Umar',
        image:
            'https://i.pinimg.com/550x/03/06/46/0306467bab5c7b61cf9823a263d2ab9b.jpg',
        attendence: '95%',
    },
    {
        id: '2',
        name: 'Web Engeenireng',
        Credit_hours: '3',
        Teach_By: 'Mr Amir',
        image:
            'https://i.pinimg.com/550x/03/06/46/0306467bab5c7b61cf9823a263d2ab9b.jpg',
        attendence: '45%',
    },
    {
        id: '3',
        name: 'Data Base ',
        Credit_hours: '3',
        Teach_By: 'Mr Zahid',
        image:
            'https://i.pinimg.com/550x/03/06/46/0306467bab5c7b61cf9823a263d2ab9b.jpg',
        attendence: '100%',
    },
];

const StdDashboard = ({ navigation, route }) => {
    // std img plus id
    const { dat } = route.params;
    console.log(dat + '****')




    // Api response store for get
    const [stddata, setStdData] = useState();

    // APi Code get Get 
    useEffect(() => {
        getStudentDetail();

    }, []);
    async function getStudentDetail() {
        try {
            let response = await fetch('http://192.168.1.103:8000/api/get-student-courses?aridNumber=' + dat.userID);
            let json = await response.json();
            setStdData(json);
            console.log(json);
        } catch (error) {
            console.log(error);
        }
    }




    return (
        <SafeAreaView style={styles.container}>


            <View style={{ flexDirection: 'row', borderBottomWidth: 2, backgroundColor: '#fff', borderRadius: 9 }}>
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
                    <Image source={{ uri: 'http://192.168.1.103:8000/api/get-student-image/UserImages/Student/' + dat.image }} style={styles.imgStyle} />
                </View>

            </View>


            <View style={{ flex: 1, padding: 5 }}>
                <FlatList
                    // horizontal={true}
                    showsVerticalScrollIndicator={false}
                    style={{ padding: 2 }}
                    data={stddata}
                    renderItem={({ item, index }) => {
                        return (
                            <Pressable
                                onPress={() => {
                                    navigation.navigate('StdAttendance', {
                                        COURSENAME: item.courseName,
                                        sID: dat.userID,

                                    });
                                }}
                                style={{

                                    // backgroundColor: '#afeeee',
                                    elevation: 2,

                                    height: 150,
                                    padding: 10,
                                    backgroundColor: `#6495ed`,
                                    elevation: 2,
                                    margin: 3,
                                    borderRadius: 8,


                                }}>
                                <View
                                    style={{
                                        flexDirection: 'row',

                                        justifyContent: 'space-between',
                                    }}>
                                    <View>
                                        <Text
                                            style={{ fontSize: 16, color: '#333', fontWeight: 'bold' }}>
                                            {item.courseName}
                                        </Text>

                                        <Text style={styles.title}>Teach_By: {item.teacherName}</Text>
                                    </View>
                                    <View>
                                        <Image source={{ uri: 'http://192.168.1.103:8000/api/get-user-image/UserImages/Teacher/' + item.image }} style={styles.imgStyle} />
                                    </View>
                                </View>
                                <View style={{ top: 36 }}>
                                    <Text style={{ color: '#333' }}>
                                        Attendance:{item.percentage}
                                    </Text>
                                </View>
                            </Pressable>
                        );
                    }}></FlatList>
            </View>


            {/* Below flatlist */}
            {/* <View>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 30, marginBottom: 20 }}>
                    Recent
                </Text>
            </View> */}

            {/* <View style={{ flex: 1, padding: 5 }}>
                <FlatList
                    style={{ padding: 2 }}
                    data={DATA}
                    renderItem={({ item, index }) => {
                        return (
                            <Pressable
                                onPress={() => {
                                    navigation.navigate('StdAttendance', {
                                        CourseName: 'VP',
                                        Credit_hours: item.Credit_hours,
                                        Teach_By: item.Teach_By,
                                        Attendance: '90%',
                                    });
                                }}
                                style={{
                                    padding: 10,
                                    backgroundColor: `#6495ed`,
                                    elevation: 2,
                                    margin: 3,
                                    borderRadius: 8,

                                    height: 100,
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
                                            {item.name}
                                        </Text>
                                    </View>
                                    <View>
                                        <Image
                                            source={{ uri: item.image }}
                                            style={{
                                                width: 60,
                                                height: 60,
                                                borderRadius: 40,
                                            }}
                                        />
                                    </View>
                                </View>
                                <View style={{}}>
                                    <Text style={{ color: 'black', fontWeight: '600' }}>
                                        Attendance:{item.attendence}
                                    </Text>
                                </View>
                            </Pressable>
                        );
                    }}></FlatList>
            </View> */}
        </SafeAreaView>
    );
};

export default StdDashboard;

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