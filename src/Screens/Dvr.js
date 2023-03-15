import React, { useState, useEffect } from 'react';
import {
    FlatList,

    StatusBar,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput

} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { appcolor } from '../components/Colorss';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button, Dialog, Portal, Provider, Modal } from 'react-native-paper';


const Dvr = ({ navigation }) => {
    const [searchDvr, setSearchDvr] = useState('');

    // Api response store
    const [DVRdata, setDVRData] = useState();
    // update modal
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const [visible, setVisible] = React.useState(false);
    // dlt modal
    const [dvisible, setdVisible] = React.useState(false);

    const showDialog = () => setdVisible(true);
    const hideDialog = () => setdVisible(false);

    const [Updateid, setUpdateId] = useState();

    //updt  modal k andr jo textinput
    const [text, setText] = useState('');




    const handleDelete = id => {

        setVisible(false);
    };

    // update Icon
    const handleUpdate = (id, newName) => {

        hideModal();
    };


    // APi Code
    useEffect(() => {
        getDVR();
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
                                hideDialog();

                            }}>
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
                    style={{ padding: 9 }}
                    contentContainerStyle={{
                        backgroundColor: '#fff',
                        padding: 20,
                        borderRadius: 8,
                    }}>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 16,
                            color: '#333',
                            fontWeight: 'bold',
                        }}>
                        Update DVR
                    </Text>

                    <View style={{ padding: 5, top: 7, borderRadius: 26 }}>
                        <View>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>

                                IP
                            </Text>
                            <TextInput
                                value={text}
                                style={{
                                    margin: 4,
                                    color: 'black',
                                    elevation: 2,
                                    width: 290,
                                    borderRadius: 8,
                                }}
                                onChangeText={text => setText(text)}
                            />
                        </View>

                        <View>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>

                                Channel
                            </Text>

                            <TextInput
                                value={text}
                                style={{
                                    margin: 4,
                                    color: 'black',
                                    elevation: 2,
                                    width: 290,
                                    borderRadius: 8,
                                    // backgroundColor: '#fff'
                                }}
                                onChangeText={text => setText(text)}
                            />
                        </View>
                        <View>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>

                                Host
                            </Text>

                            <TextInput
                                value={text}
                                style={{
                                    margin: 4,
                                    color: 'black',
                                    elevation: 2,
                                    width: 290,
                                    borderRadius: 8,
                                    // backgroundColor: '#fff'
                                }}
                                onChangeText={text => setText(text)}
                            />
                        </View>
                        <View>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>

                                Password
                            </Text>

                            <TextInput
                                value={text}
                                style={{
                                    margin: 4,
                                    color: 'black',
                                    elevation: 2,
                                    width: 290,
                                    borderRadius: 8,
                                    // backgroundColor: '#fff'
                                }}
                                onChangeText={text => setText(text)}
                            />
                        </View>
                        <View>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>
                                Name
                            </Text>

                            <TextInput
                                value={text}
                                style={{
                                    margin: 4,
                                    color: 'black',
                                    elevation: 2,
                                    width: 290,
                                    borderRadius: 8,
                                    // backgroundColor: '#fff'
                                }}
                                onChangeText={text => setText(text)}
                            />
                        </View>
                        {/* BTN SAve */}
                        <TouchableOpacity
                            style={{
                                width: '40%',
                                top: 10,
                                alignSelf: 'center',
                                margin: 5,
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
                                                Name: item.name,
                                                IP: item.ip,

                                                Channel: item.Channel,
                                            });
                                        }}
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
                                                setUpdateId(item.id);
                                            }}
                                            style={{}}
                                            name="create-outline"
                                            size={24}
                                            color="black"
                                        />

                                        <TouchableOpacity onPress={() => showDialog()}>
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