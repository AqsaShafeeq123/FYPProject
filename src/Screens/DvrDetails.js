import React, { useState, useEffect } from 'react';
import {
    FlatList,
    StatusBar,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,

} from 'react-native';
import { Searchbar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import { Modal, Portal, Provider, TextInput, Dialog, Button } from 'react-native-paper';
import { appcolor } from '../components/Colorss';



const DvrDetails = ({ navigation, route }) => {
    const [searchDvr, setSearchDvr] = useState('');

    const { Name, Host, IP, MaxChannel } = route.params;

    // Api response store
    const [DVRdata, setDVRData] = useState();
    const[VenueDetail , setVenueDetail]=useState();


    // for update  icon
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const [visible, setVisible] = React.useState(false);
    const [Updateid, setUpdateId] = useState();
    const [text, setText] = useState('');


    // dlt modal
    const [dvisible, setdVisible] = React.useState(false);
    const showDialog = () => setdVisible(true);
    const hideDialog = () => setdVisible(false);

    //  for camera
    const [selectedVC, setSelectedVC] = useState();
    const [modalCam, setModalCam] = useState(false);

    const openModal = () => {
        setModalCam(true);
    };

    const closeModal = () => {
        setModalCam(false);
    };


    // APi Code
    useEffect(() => {
        getDVR();
        getVenueDetail();
    }, []);
    async function getDVR() {
        try {
            let response = await fetch('http://192.168.1.103:8000/api/dvr-details');
            let json = await response.json();
            setDVRData(json);
            console.log(json);
        } catch (error) {
            console.log(error);
        }
    }

      // APi Code
     
    async function  getVenueDetail () {
        try {
            let response = await fetch('http://192.168.1.103:8000/api/venue-details');
            let json = await response.json();
            setVenueDetail(json);
            console.log(json);
        } catch (error) {
            console.log(error);
        }
    }


    const [data, setData] = useState([
        {
            id: '1',
            Room: 'Lab1 ',
            Channel: '5',
        },
        {
            id: '2',
            Room: 'Lab2 ',
            Channel: '1',
        },
        {
            id: '3',
            Room: 'Lab 5 ',
            Channel: '3',
        },
        {
            id: '4',
            Room: 'Lt 6 ',
            Channel: '4',
        },
        {
            id: '5',
            Room: 'Lt 7 ',
            Channel: '2',
        },
    ]);


    const handleDelete = id => {

        setVisible(false);
    };

    // update Icon
    const handleUpdate = (id, newName) => {

        hideModal();
    };


    return (
        <Provider style={styles.container}>
            <Portal>
                <Portal>
                    <Dialog visible={dvisible} onDismiss={hideDialog}>
                        <Dialog.Title>Delete</Dialog.Title>
                        <Dialog.Content>
                            <Text variant="bodyMedium">Are You Sure To Delete?</Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button
                                onPress={() => {
                                    hideDialog();

                                }}>
                                Yes
                            </Button>
                            <Button onPress={hideDialog}>No</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
                <Modal
                    visible={visible}
                    onDismiss={hideModal}
                    style={{ padding: 9 }}
                    contentContainerStyle={{
                        backgroundColor: '#fff',
                        padding: 20,
                        borderRadius: 8,

                    }}>
                    <Text style={{ textAlign: 'center', fontSize: 26, color: '#333', fontWeight: 'bold' }}>
                        Update CAMERA
                    </Text>

                    <View style={{ top: 40 }}>
                        <Text style={{ color: 'black', fontSize: 20 }}>Select Venue</Text>

                        {/* PICKER 1 */}
                        <Picker
                            mode="dropdown"
                            style={styles.picker}
                            selectedValue={selectedVC}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedVC(itemValue)
                            }>
                            <Picker.Item label="Lab1" color='black' value="Lab1" />
                            <Picker.Item label="Lab2" color='black' value="Lab2" />
                            <Picker.Item label="Lab3" color='black' value="Lab3" />
                            <Picker.Item label="Lab4" color='black' value="Lab4" />
                            <Picker.Item label="Lab5" color='black' value="Lab5" />
                            <Picker.Item label="Lab6" color='black' value="Lab6" />
                            <Picker.Item label="Lab7" color='black' value="Lab7" />

                        </Picker>
                    </View>


                    {/* PICKER 2 */}
                    <View style={{ top: 100 }}>
                        <Text style={{ color: 'black', fontSize: 20 }}>Select Channel</Text>
                        <Picker
                            style={styles.picker}
                            mode="dropdown"

                            selectedValue={selectedVC}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedVC(itemValue)
                            }>
                            <Picker.Item label="3" color='black' value="3" />
                            <Picker.Item label="4" color='black' value="4" />
                        </Picker>
                    </View>


                    <View style={{ padding: 5, top: 4, borderRadius: 26 }}>


                        {/* BTN SAve */}
                        <TouchableOpacity
                            style={{
                                width: '40%',
                                top: 14,
                                alignSelf: 'center',
                                margin: 100,
                                alignItems: 'center',
                                justifyContent: 'space-evenly',
                                borderRadius: 10,
                                padding: 10,
                                height: 50,

                                backgroundColor: '#4682b4',
                            }}
                            onPress={() => {
                                handleUpdate(Updateid, text);
                                setText('');
                            }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: '#ffffff',
                                    //fontFamily: 'times new roman bold',
                                }}>
                                Update
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </Portal>

            <View style={styles.txt}>
                <Text style={styles.text}>Name : {Name}</Text>
                <Text style={styles.text}>Host :{Host} </Text>
                <Text style={styles.text}>IP :{IP} </Text>
                <Text style={styles.text}>
                    MaxChannel : <Text>{MaxChannel}</Text>
                </Text>
            </View>

            {/*Search bar   */}
            <View style={{ margin: '1%' }}>
                <Searchbar
                    placeholder="Search"
                    value={searchDvr}
                    inputStyle={{ fontSize: 16, color: '#000' }}
                    fontSize={12}
                    style={{ borderRadius: 10, backgroundColor: 'white' }}
                    onChangeText={text => setSearchDvr(text)}
                />
            </View>

            <View style={{ flex: 1, padding: 5 }}>
                <FlatList
                    style={{ flex: 1 }}
                    // storing data is here in  flatlist
                    data={DVRdata}
                    renderItem={({ item, index }) => {
                        if (item.Room.toLowerCase().includes(searchDvr.toLowerCase())) {
                            return (
                                <View
                                    style={{
                                        padding: 10,
                                        backgroundColor: '#ffff',
                                        elevation: 2,
                                        margin: 3,
                                        borderRadius: 8,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}>
                                    <View>
                                        <Text style={styles.title}> Room : {item.Room}</Text>
                                        <Text style={styles.title}> Channel : {item.Channel}</Text>
                                    </View>
                                    {/* ICONS DLT UPDT */}
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                        }}>
                                        <Ionicons
                                            onPress={() => {
                                                showModal();
                                                setUpdateId(item.id);
                                            }}
                                            style={{}}
                                            name="create-outline"
                                            size={24}
                                            color="black"
                                        />

                                        <TouchableOpacity onPress={() => showDialog()}>
                                            <Ionicons
                                                style={{ left: 5 }}
                                                name="trash-outline"
                                                size={24}
                                                color="red"
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            );
                        }
                    }}></FlatList>
            </View>

            {/* Camera icon */}
            <View
                style={{
                    backgroundColor: '#4682b4',
                    marginBottom: 50,
                    marginLeft: 290,
                    alignItems: 'center',
                    borderRadius: 100,
                    marginRight: 20,
                    height: 60,
                    width: 60,

                }}>
                <TouchableOpacity onPress={openModal}>
                    <Ionicons name="ios-camera-outline" size={42} color="black" />
                </TouchableOpacity>
                {/* Modal */}
                <Portal>
                    <Modal
                        visible={modalCam}
                        onDismiss={closeModal}
                        contentContainerStyle={{

                            flex: 1,
                            backgroundColor: '#fff',
                            padding: 40,
                            marginBottom: 80,
                            marginTop: 80,
                            marginLeft: 20,
                            marginRight: 20,
                            borderRadius: 20
                        }}>

                        <View style={{ flex: 1 }}>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 30, color: '#333', fontWeight: 'bold' }}>ADD CAMERA</Text>
                            </View>

                            <View style={{ top: 50 }}>
                                <Text style={{ color: 'black', fontSize: 20 }}>Select Venue</Text>

                                {/* PICKER 1 */}
                                <Picker
                                    mode="dropdown"
                                    style={styles.picker}
                                    selectedValue={selectedVC}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setSelectedVC(itemValue)
                                    }>
                                    <Picker.Item label="Lab1" color='black' value="Lab1" />
                                    <Picker.Item label="Lab2" color='black' value="Lab2" />
                                    <Picker.Item label="Lab3" color='black' value="Lab3" />
                                    <Picker.Item label="Lab4" color='black' value="Lab4" />
                                    <Picker.Item label="Lab5" color='black' value="Lab5" />
                                    <Picker.Item label="Lab6" color='black' value="Lab6" />
                                    <Picker.Item label="Lab7" color='black' value="Lab7" />

                                </Picker>
                            </View>


                            {/* PICKER 2 */}
                            <View style={{ top: 100 }}>
                                <Text style={{ color: 'black', fontSize: 20 }}>Select Channel</Text>
                                <Picker
                                    style={styles.picker}
                                    mode="dropdown"

                                    selectedValue={selectedVC}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setSelectedVC(itemValue)
                                    }>
                                    <Picker.Item label="3" color='black' value="3" />
                                    <Picker.Item label="4" color='black' value="4" />
                                </Picker>
                            </View>

                            {/* add btn */}
                            <View style={{ alignItems: 'center', top: 140 }}>
                                <TouchableOpacity
                                    style={{
                                        width: '50%',

                                        margin: 5,
                                        alignItems: 'center',

                                        borderRadius: 10,
                                        padding: 10,
                                        height: 50,

                                        backgroundColor: '#4682b4',
                                    }}
                                    onPress={() => { }}>
                                    <Text
                                        style={{
                                            fontSize: 20,
                                            color: '#ffffff',
                                        }}>
                                        Add
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </Portal>
            </View>
        </Provider>
    );
};

export default DvrDetails;

const styles = StyleSheet.create({
    txt: {
        backgroundColor: '#fff',
        padding: 20,

        justifyContent: 'flex-start',
        color: 'black',
        height: 120,
        width: '100%',
        borderRadius: 30,
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 10,
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {},
    title: {
        fontSize: 15,
        color: 'black',
    },

    picker: {

        color: 'black',
        backgroundColor: appcolor.primarycolor
    },
});