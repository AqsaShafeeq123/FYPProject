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


const AllReport = ({ navigation, route }) => {

    // const { dat } = route.params;
    // console.log(dat + '****')

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const [visible, setVisible] = React.useState(false);

    // fab wrk

    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;





    // Api response store for get
    const [teacherData, setTeacherData] = useState([]);
    const [filteredteacherData, setFilteredTeacherData] = useState([]);

    // APi Code get Get 
    useEffect(() => {
        getTeacherDetail();

    }, []);
    async function getTeacherDetail() {
        try {
            let response = await fetch('http://192.168.1.104:8000/api/get-all-teacher-chr');
            let json = await response.json();
            setTeacherData(json);
            setFilteredTeacherData(json);
            console.log(json);
        } catch (error) {
            console.log(error);
        }
    }


    // ----------------------------------
    const [filter, setFilter] = useState(0);
    const searchFilterFunction = async (text) => {
        // Check if searched text is not blank
        if (text) {
            console.log(text);
            // Inserted text is not blank
            // Filter the masterDataSource and update FilteredDataSource
            const newData = teacherData.filter(function (item) {
                // Applying filter for the inserted text in search bar
                if (filter == 0) {
                    const itemData = item.date
                        ? item.date.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                } else if (filter == 1) {
                    const itemData = item.courseName
                        ? item.courseName.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                }
                else if (filter == 2) {
                    const itemData = item.discipline
                        ? item.discipline.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                }
                else if (filter == 3) {
                    const itemData = item.teacherName
                        ? item.teacherName.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                }
            });
            console.log(newData);
            await setFilteredTeacherData(newData);
            setSearchTeacher(text);
        }
        else {

            setFilteredTeacherData(teacherData);
            setSearchTeacher(text);
        }
    };






    const [searchTeacher, setSearchTeacher] = useState('');
    return (
        <Provider style={styles.container}>





            {/* Below flatlist */}
            <View style={{ margin: '3%', flexDirection: 'row', }}>
                <Searchbar
                    placeholder="Search"
                    value={searchTeacher}
                    placeholderTextColor="#000"
                    inputStyle={{ fontSize: 16, color: '#000' }}
                    fontSize={12}
                    style={{ borderRadius: 10, backgroundColor: '#f5fffa', width: '89%', marginRight: 7 }}
                    //onChangeText={text => setSearchTeacher(text)}
                    onChangeText={(text) => searchFilterFunction(text)}
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
                                setFilter(0);
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

                                setFilter(1);
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
                                setFilter(2);
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
                                setFilter(3);

                            }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: 'black',

                                }}>
                                Name
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
                            onPress: () => { navigation.navigate('ViewActivity') },
                        },
                        {
                            icon: 'view-grid',
                            label: 'Switch to DataTable',
                            onPress: () => { navigation.navigate('ViewChr') },
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
                    data={filteredteacherData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        if (true) {
                            return (
                                <Pressable
                                    onPress={() => {
                                        navigation.navigate('ViewSpecificChr', {
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
                                            <Image source={{ uri: 'http://192.168.1.104:8000/api/get-user-image/UserImages/Teacher/' + item.image }} style={styles.imgStyle} />
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

export default AllReport;

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







