import React, { useState, useEffect } from 'react';
import {
    FlatList,

    StatusBar,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView

} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { appcolor } from '../components/Colorss';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button, Dialog, Portal, Provider, Modal } from 'react-native-paper';


const Dvr = ({ navigation }) => {
    const [searchDvr, setSearchDvr] = useState('');


    // update modal
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const [visible, setVisible] = React.useState(false);
    // dlt modal
    const [dvisible, setdVisible] = React.useState(false);

    const showDialog = () => setdVisible(true);
    const hideDialog = () => setdVisible(false);

    const handleDelete = id => {

        setVisible(false);
    };

    // update Icon
    const handleUpdate = (id, newName) => {

        hideModal();
    };



    // Api response store for get
    const [DVRdata, setDVRData] = useState();

    // APi Code get Get DVr
    useEffect(() => {
        getDVR();

    }, []);
    async function getDVR() {
        try {
            let response = await fetch('http://192.168.1.101:8000/api/dvr-details');
            let json = await response.json();
            setDVRData(json);
            console.log(json);
        } catch (error) {
            console.log(error);
        }
    }

    //updt Dvr  modal textinput
    const [id, setID] = useState('');
    const [ip, setIp] = useState('');
    const [channel, setChannel] = useState('');
    const [host, setHost] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');


    // APi Code UPDATE DVR 
    const [updateId, setUpdateId] = useState();
    const UpdateDvr = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "id": updateId,
            "ip": ip,
            "name": name,
            "channel": channel,
            "host": host,
            "password": password,

        });
        console.log(raw);
        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch('http://192.168.1.101:8000/api/update-dvr-details', requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        getDVR();

    }

    // -------------------------------------------


    // For Dlt dvr icon
    const [dvrDelid, setDvrDelid] = useState()
    const DeleteDvr = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "id": dvrDelid,
            "ip": "",
            "name": "",
            "channel": "",
            "host": "",
            "password": "",
        });

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        console.log(raw);
        fetch("http://192.168.1.101:8000/api/delete-dvr-details", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }


    return (
        <Provider style={styles.container}>
            <Portal>
                <Dialog visible={dvisible} onDismiss={hideDialog}>
                    <Dialog.Title>Delete</Dialog.Title>
                    <Dialog.Content>
                        <Text variant="bodyMedium">Are You Sure To Delete?</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button
                            onPress={() => {
                                DeleteDvr()
                                hideDialog();
                            }

                            }>
                            Yes
                        </Button>
                        <Button onPress={hideDialog}>No</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>

            {/* MODAL Wd Text inputs */}
            <Portal>
                <Modal
                    visible={visible}
                    onDismiss={hideModal}

                    contentContainerStyle={{


                        backgroundColor: 'white',
                        padding: 30,
                        marginBottom: 80,
                        marginTop: 20,
                        marginLeft: 20,
                        marginRight: 20,
                        borderRadius: 20
                    }}>
                    <ScrollView>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 30, color: '#333', fontWeight: 'bold' }}> Update DVR</Text>
                            <View style={{ padding: 5, top: 7, borderRadius: 26 }}>
                                <View>
                                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>
                                        IP
                                    </Text>
                                    <TextInput
                                        value={ip}
                                        textColor={'black'}
                                        style={{
                                            margin: 4,
                                            color: 'black',
                                            backgroundColor: 'white',
                                            elevation: 8,
                                            borderRadius: 8,
                                            height: 50,
                                            width: 250
                                        }}

                                        onChangeText={text => setIp(text)}
                                    />
                                </View>

                                <View>
                                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>
                                        Channel
                                    </Text>
                                    <TextInput
                                        value={channel}
                                        textColor={'black'}
                                        style={{
                                            margin: 4,
                                            color: 'black',
                                            backgroundColor: 'white',
                                            elevation: 8,
                                            borderRadius: 8,
                                            height: 50,
                                            width: 250
                                        }}

                                        onChangeText={text => setChannel(text)}
                                    />
                                </View>
                                <View>
                                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>
                                        Host
                                    </Text>
                                    <TextInput
                                        value={host}
                                        textColor={'black'}
                                        style={{
                                            margin: 4,
                                            color: 'black',
                                            backgroundColor: 'white',
                                            elevation: 8,
                                            borderRadius: 8,
                                            height: 50,
                                            width: 250
                                        }}

                                        onChangeText={text => setHost(text)}
                                    />
                                </View>
                                <View>
                                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>
                                        Password
                                    </Text>
                                    <TextInput
                                        value={password}
                                        textColor={'black'}
                                        style={{
                                            margin: 4,
                                            color: 'black',
                                            backgroundColor: 'white',
                                            elevation: 8,
                                            borderRadius: 8,
                                            height: 50,
                                            width: 250
                                        }}

                                        onChangeText={text => setPassword(text)}
                                    />
                                </View>
                                <View>
                                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>
                                        Name
                                    </Text>
                                    <TextInput
                                        value={name}
                                        textColor={'black'}
                                        style={{
                                            margin: 4,
                                            color: 'black',
                                            backgroundColor: 'white',
                                            elevation: 8,
                                            borderRadius: 8,
                                            height: 50,
                                            width: 250
                                        }}

                                        onChangeText={text => setName(text)}
                                    />
                                </View>




                                {/* BTN Update */}
                                <TouchableOpacity
                                    style={{
                                        width: 90,
                                        marginTop: 30,
                                        alignSelf: 'center',
                                        padding: 10,
                                        top: -9,
                                        borderRadius: 10,
                                        backgroundColor: '#4682b4',
                                    }}
                                    onPress={() => {
                                        // CALLING API FUNC

                                        UpdateDvr();

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
                        </View>
                    </ScrollView>
                </Modal>
            </Portal>

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


            {/* Flatlist */}
            <View style={{ flex: 1, padding: 5 }}>

                <FlatList
                    style={{ flex: 1 }}
                    // storing data is here in  flatlist
                    data={DVRdata}
                    renderItem={({ item, index }) => {
                        if (item.name.toLowerCase().includes(searchDvr.toLowerCase())) {
                            return (
                                <View
                                    style={{
                                        padding: 3,
                                        backgroundColor: '#ffff',
                                        elevation: 2,
                                        margin: 3,
                                        borderRadius: 8,
                                        flexDirection: 'row',

                                        justifyContent: 'space-between'
                                    }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            navigation.navigate('DvrDetails', {
                                                id: item.id,
                                                Name: item.name,
                                                IP: item.ip,
                                                Host: item.host,
                                                Channel: item.channel,
                                            });
                                        }}
                                        // here is the data pattern  which we get from api
                                        style={[styles.item]}>
                                        <Text style={styles.title}><Text style={{ fontWeight: 'bold' }}>Name:</Text> {item.name}</Text>
                                        <Text style={styles.title}><Text style={{ fontWeight: 'bold' }}>IP:</Text> {item.ip}</Text>
                                        <Text style={styles.title}><Text style={{ fontWeight: 'bold' }}>Password:</Text> {item.password}</Text>
                                        <Text style={styles.title}><Text style={{ fontWeight: 'bold' }}>Channel:</Text>  {item.channel}</Text>
                                    </TouchableOpacity>
                                    <View
                                        style={{
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',

                                        }}>
                                        <Ionicons
                                            onPress={() => {
                                                showModal();
                                                // above state written in update
                                                setUpdateId(item.id);
                                            }}
                                            style={{}}
                                            name="create-outline"
                                            size={24}
                                            color="black"
                                        />

                                        {/* dlt icon */}
                                        <TouchableOpacity onPress={() => {
                                            showDialog();
                                            setDvrDelid(item.id);

                                        }}>
                                            <Ionicons
                                                style={{}}
                                                name="trash-outline"
                                                size={24}
                                                color="red"
                                            /></TouchableOpacity>
                                    </View>
                                </View>
                            );
                        }
                    }}></FlatList>
            </View>
        </Provider>
    );
};

export default Dvr;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        borderRadius: 10,
        padding: 5,
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 15,
        color: 'black',

    },

});