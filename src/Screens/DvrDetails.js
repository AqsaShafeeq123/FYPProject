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

    const { id, Name, Host, IP, Channel } = route.params;


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



    const [modalCam, setModalCam] = useState(false);

    const openModal = () => {
        setModalCam(true);
    };

    const closeModal = () => {
        setModalCam(false);
    };






    // Api response store
    const [cameraDetail, setCamera] = useState();
    // APi Code to get cameras from dvr  wd ID on specific dvr click
    useEffect(() => {
        getCamera();
        // venue func also call here in camera get api
        GetVenue();
        // channel func also call here in camera get api
        GetChannel();

    }, []);
    async function getCamera() {
        try {
            let response = await fetch('http://192.168.0.105:8000/api/camera-details/' + id);
            let json = await response.json();
            setCamera(json.data);

            console.log(json.data);
        } catch (error) {
            console.log(error);
        }
    }


    // ---------------------------------------------------------
    // get venue in picker dropdown on update icon click



    // USE IN Venue PICKER
    const [venue, setVenue] = useState();
    //  use in below api func
    const [venueData, setVenueData] = useState([]);
    async function GetVenue() {

        let response = await fetch('http://192.168.0.105:8000/api/venue-details')

        let json = await response.json();
        let arr = json.data;
        let newArray = arr.map(item => {
            return {
                label: item.name,
                value: item.id,
            };
        });

        setVenueData(newArray);
    }




    // ---------------------------------------


    // get channel in picker dropdown on update icon click
    // USE IN CHANNEL PICKER Code Portion

    const [channel, setChannel] = useState();
    //  use in below api func
    const [channelData, setChannelData] = useState([]);

    async function GetChannel() {

        let response = await fetch('http://192.168.0.105:8000/api/camera-details/' + id)

        let json = await response.json();
        let arr = json.data;
        let newArray = arr.map(item => {
            return {
                label: item.portNumber,
                value: item.id,
            };
        });

        let data = []

        for (let index = 1; index <= Channel; index++) {
            let a = {
                label: '',
                value: '',
            };
            let check = 0;
            for (let i = 0; i < newArray.length; i++) {
                if (index == newArray[i].label) {
                    check = check + 1;
                }
            }
            if (check != 1) {
                a.label = index.toString();
                a.value = index;
                data.push(a);
            }
        }
        // console.log("*****" + data[1].label);
        // console.log('---------new array---------', newArray)
        console.log('---------data---------', data)
        setChannelData(data);
    }







    // --------------------------

    const [idUpdate, setIdUpdate] = useState();
    const UpdateCamera = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        console.log(venue + "   ................................" + channel)
        var raw = JSON.stringify(
            {
                "id": idUpdate,
                "dvrID": id,
                "venueID": venue,
                "portNumber": channel,
                "venueName": "string"
            }
        );

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        console.log(raw);
        fetch('http://192.168.0.105:8000/api/update-camera-details', requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }




    // --------------------------------------

    // APi Code FOR dlt icon to dlt camera convert it into 3 lines

    const [camdelid, setcamdelid] = useState()
    const DeleteCamera = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        console.log("Deleted id" + camdelid)
        var raw = JSON.stringify(
            {
                "id": camdelid,
                "dvrID": 0,
                "venueID": 0,
                "portNumber": "string",
                "venueName": "string"
            }
        );

        var requestOptions = {
            method: 'Delete',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        console.log(raw);
        fetch("http://192.168.0.105:8000/api/delete-camera-details", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }

    // -------------------------------------------




    // APi Code  on CAMERA ICON click to add camera


    const AddCamera = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(
            {
                "id": 0,
                "dvrID": id,
                "venueID": venue,
                "portNumber": channel,
                "venueName": "0"
            }
        );
        console.log('!!!!!!!!!!!!!!!!!' + raw);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://192.168.0.105:8000/api/add-camera", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }











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
                                    // api func call fr dlt icon
                                    DeleteCamera();
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

                        {/* PICKER 1 VENUE  wd api*/}

                        <Picker
                            style={styles.picker}
                            dropdownIconColor={"black"}
                            mode="dropdown"
                            selectedValue={venue}
                            onValueChange={itemValue => {
                                setVenue(itemValue)
                            }}>
                            {venueData.map((item, index) => {
                                return (
                                    <Picker.Item label={item.label} value={item.value} key={index} />
                                );
                            })}
                        </Picker>

                    </View>


                    {/* PICKER 2 CHANNEL  wd api*/}
                    <View style={{ top: 100 }}>
                        <Text style={{ color: 'black', fontSize: 20 }}>Select Channel</Text>


                        <Picker
                            style={styles.picker}
                            dropdownIconColor={"black"}
                            mode="dropdown"
                            // above state channel use here
                            selectedValue={channel}
                            onValueChange={itemValue => {
                                setChannel(itemValue)
                            }}>
                            {/* state 2 channel data */}
                            {channelData.map((item, index) => {
                                return (
                                    <Picker.Item label={item.label} value={item.value} key={index} />
                                );
                            })}
                        </Picker>
                    </View>



                    <View style={{ padding: 5, top: 4, borderRadius: 26 }}>


                        {/* BTN updt*/}
                        <TouchableOpacity
                            style={{
                                width: '40%',
                                top: 34,
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
                                // api func call updt
                                UpdateCamera();
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
                    MaxChannel : <Text>{Channel}</Text>
                </Text>
            </View>



            {/* -------------------------------------------------------- */}
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


            {/* ------------------------------------------------------ */}
            <View style={{ flex: 1, padding: 5 }}>
                <FlatList
                    style={{ flex: 1 }}
                    // storing data is here in  flatlist list of camera for get method
                    data={cameraDetail}

                    renderItem={({ item, index }) => {
                        if (item.venueName.toLowerCase().includes(searchDvr.toLowerCase())) {
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
                                    {/* api get here  the room and channel in list fr get*/}
                                    <View>
                                        <Text style={styles.title}> Room : {item.venueName}</Text>
                                        <Text style={styles.title}> Channel : {item.portNumber}</Text>
                                    </View>
                                    {/* ICONS DLT UPDT */}
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                        }}>
                                        <Ionicons
                                            onPress={() => {
                                                showModal();
                                                // above state of update api
                                                setIdUpdate(item.id);
                                            }}
                                            style={{}}
                                            name="create-outline"
                                            size={24}
                                            color="black"
                                        />
                                        {/* dlt icon  */}
                                        <TouchableOpacity onPress={() => {
                                            showDialog()
                                            // api setting state fr dlt cam
                                            setcamdelid(item.id);
                                        }}>
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




            {/* ---------------------------------------------------------------------- */}
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

                                {/* PICKER 1 Camera venue  wd api*/}

                                <Picker
                                    style={styles.picker}
                                    dropdownIconColor={"black"}
                                    mode="dropdown"
                                    selectedValue={venue}
                                    onValueChange={itemValue => {
                                        setVenue(itemValue)
                                    }}>
                                    {venueData.map((item, index) => {
                                        return (
                                            <Picker.Item label={item.label} value={item.value} key={index} />
                                        );
                                    })}
                                </Picker>

                            </View>


                            {/* PICKER 2  camera with api*/}
                            <View style={{ top: 100 }}>
                                <Text style={{ color: 'black', fontSize: 20 }}>Select Channel</Text>
                                <Picker
                                    style={styles.picker}
                                    dropdownIconColor={"black"}
                                    mode="dropdown"
                                    // above state channel use here
                                    selectedValue={channel}
                                    onValueChange={itemValue => {
                                        setChannel(itemValue)
                                    }}>
                                    {/* state 2 channel data */}
                                    {channelData.map((item, index) => {
                                        return (
                                            <Picker.Item label={item.label} value={item.value} key={index} />
                                        );
                                    })}
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
                                    onPress={() => {
                                        AddCamera(),
                                            getCamera();

                                    }}

                                >
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
        padding: 13,

        justifyContent: 'flex-start',
        color: 'black',
        height: 110,
        width: '95%',
        borderRadius: 30,
        marginRight: 8,
        marginLeft: 9,
        marginBottom: 10,
        marginTop: 20
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









































