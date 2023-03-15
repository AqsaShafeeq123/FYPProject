import React, { useState } from 'react';
import {
    FlatList,
    StatusBar,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Modal, Portal, Provider } from 'react-native-paper';
import { appcolor } from '../components/Colorss';
import { Picker } from '@react-native-picker/picker';
const DATA = [
    {
        id: '1',
        name: 'Dr Naseer',
        Course: 'CC',
        Room: 'LT-6',
    },
    {
        id: '2',
        name: 'Mr. Umar',
        Course: 'CC',
        Room: 'LT-6',
    },
    {
        id: '3',
        name: 'Dr Munir',
        Course: 'CC',
        Room: 'LT-6',
    },
    {
        id: '4',
        name: 'Mr. Zahid',
        Course: 'CC',
        Room: 'LT-6',
    },
    {
        id: '5',
        name: 'Sir. Aftab',
        Course: 'CC',
        Room: 'LT-6',
    },
    {
        id: '6',
        name: 'Dr Mohsin',
        Course: 'CC',
        Room: 'LT-6',
    },
];

const Home = ({ navigation }) => {
    // Modal 
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const [visible, setVisible] = React.useState(false);
    //   search bar
    const [searchTeacher, setSearchTeacher] = useState('');

    const [data, setdata] = useState();
    const [selectedVC, setSelectedVC] = useState();

    return (
        <Provider style={styles.container}>
            <View style={{ margin: '3%' }}>
                <Searchbar
                    placeholder="Search"
                    placeholderTextColor="#000"
                    value={searchTeacher}
                    fontSize={12}

                    style={{ borderRadius: 10, backgroundColor: '#f5fffa' }}
                    onChangeText={text => setSearchTeacher(text)}
                />
            </View>
            <Portal>
                <Modal
                    visible={visible}
                    onDismiss={hideModal}
                    style={{ padding: 12 }}
                    contentContainerStyle={{
                        backgroundColor: '#f0ffff',
                        padding: 50,
                        borderRadius: 8,
                    }}>

                    <View style={{ padding: 5, top: 2 }}>

                        <Text style={{ color: 'black', fontSize: 20 }}>Select Date</Text>

                        {/* PICKER 1 */}
                        <Picker
                            mode="dropdown"
                            style={styles.picker}
                            selectedValue={selectedVC}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedVC(itemValue)
                            }>
                            <Picker.Item label="12-03-2023" color='black' value="12-03-2023" />
                            <Picker.Item label="12-03-2023" color='black' value="12-03-2023" />
                            <Picker.Item label="12-03-2023" color='black' value="12-03-2023" />


                        </Picker>
                    </View>


                    <View style={{ padding: 5, top: 4, borderRadius: 26 }}>


                        {/* BTN SAve */}
                        <TouchableOpacity
                            style={{
                                width: '40%',
                                height: 40,
                                alignSelf: 'center',

                                alignItems: 'center',
                                justifyContent: 'space-evenly',
                                borderRadius: 10,
                                backgroundColor: '#4682b4',
                            }}
                            onPress={() => {

                            }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: '#ffffff',
                                    //fontFamily: 'times new roman bold',
                                }}>
                                ok
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </Portal>

            <View style={{ flex: 1, padding: 9 }}>
                <FlatList
                    style={{ flex: 1 }}
                    data={DATA}
                    renderItem={({ item, index }) => {
                        if (item.name.toLowerCase().includes(searchTeacher.toLowerCase())) {
                            return (
                                <View
                                    style={{
                                        padding: 5,
                                        backgroundColor: '#ffff',
                                        elevation: 2,
                                        margin: 3,
                                        borderRadius: 8,
                                    }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setdata(item.name);
                                            showModal();
                                        }}
                                        style={[styles.item]}>

                                        <Text style={{ fontSize: 16, color: 'black' }}> Name:
                                            {item.name}
                                        </Text>
                                        <Text style={{ fontSize: 16, color: 'black', }}> Course:
                                            {item.Course}
                                        </Text>
                                        <Text style={{ fontSize: 16, color: 'black' }}> Room:
                                            {item.Room}
                                        </Text>

                                    </TouchableOpacity>
                                </View>
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
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },


    modalContent: {
        backgroundColor: appcolor.primarycolor,
        borderRadius: 30,
        padding: 80,
        alignItems: 'center',
        marginTop: 150,
        marginRight: 10,
        marginLeft: 10,
    },
    modalText: {
        marginBottom: 30,
        textAlign: 'center',
        fontSize: 30,
        color: 'black',
    },
    picker: {

        color: 'black',
        backgroundColor: appcolor.primarycolor
    },

});


