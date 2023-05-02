
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Pressable,
    Image,
} from 'react-native';
import { React, useState } from 'react';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import { Provider, Modal, Portal, Button } from 'react-native-paper';

import { PermissionsAndroid } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';;



const AddUser = ({ navigation }) => {

    // states for textfields
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [selectedUser, setSelectedUser] = useState('Teacher');

    const [modalVisible, setModalVisible] = useState(false);
    const showModal = () => setModalVisible(true);
    const hideModal = () => setModalVisible(false);

    // to get img name 
    const [imgname, setImgName] = useState();

    // camera icon
    const [imagelink, setimage] = useState();
    const [isimage, setisimage] = useState(false);
    const [userData, setUserData] = useState();

    // camera icon 
    async function onCameraButtonClick() {
        let options = {
            options: {
                maxHeight: 200,
                maxWidth: 200,
                selectionLimit: 5,
                mediaType: 'photo',
                includeBase64: false,
            },
        };
        const result = await launchCamera(options);

        setisimage(true);
        const obj = {
            uri: result.assets[0].uri,
            name: result.assets[0].fileName,
            type: result.assets[0].type
        }
        setimage(obj.uri);
        // console.log(result.assets[0]);

        console.log(obj);
        // await uploadImage(obj)

        // let src = result.assets[0].base64;
        // setImage(src);
    }



    // save button api for other user
    const handleSavePress = async () => {
        var myHeaders = new Headers();
        const formData = new FormData();

        formData.append('file', userData);
        myHeaders.append("Content-Type", "multipart/form-data");
        // state is here
        var raw = JSON.stringify(userData);
        console.log('!!!!!!!!!!!!!!!!!' + raw);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formData,
            redirect: 'follow'

        };

        fetch("http://192.168.1.102:8000/api/add-user?id=" + 0 + "&userID=" + id + "&name=" + name + "&password=" + password + "&role=" + selectedUser, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }




    // save button api for std
    const StdSavePress = async () => {
        var myHeaders = new Headers();
        const formData = new FormData();

        formData.append('file', userData);
        myHeaders.append("Content-Type", "multipart/form-data");
        // state is here
        var raw = JSON.stringify(userData);
        console.log('!!!!!!!!!!!!!!!!!' + raw);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formData,
            redirect: 'follow'

        };

        fetch("http://192.168.1.102:8000/api/add-student?aridNo=" + id + "&name=" + name + "&image=" + 0 + "&password=" + password, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }

    // call on btn bellow
    const SaveUserInfo = () => {
        console.log(selectedUser + "aaaaaaaaaaaaaaaaaaa")
        if (selectedUser == 'Student') {
            StdSavePress();
        }
        else {
            handleSavePress();
        }
    }






    const requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: 'common:App_Camera_Permission',
                        message: 'common:App_needs_access_to_your_camera',
                        buttonNeutral: 'common:Ask_Me_Later',
                        buttonNegative: 'common:Cancel',
                        buttonPositive: 'common:OK',
                    },
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    openCamara();
                } else {
                    console.log('Camera permission denied');
                    console.log(granted);
                }
            } catch (err) {
                console.warn(err);
            }
        } else {
            openCamara();
        }
    };

    const requestGallaryPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'common:Gallary_Permission',
                        message: 'common:App_needs_access_to_your_storage',
                        buttonNeutral: 'common:Ask_Me_Later',
                        buttonNegative: 'common:Cancel',
                        buttonPositive: 'common:OK',
                    },
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('Gallary permission given');

                    openGallery();
                } else {
                    console.log('Gallary permission denied');
                }
            } catch (err) {
                console.warn(err);
            }
        } else {
            openGallery();
        }
    };

    const openCamara = () => {
        let options = {
            options: {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 600,
                maxWidth: 800
            },
        };
        launchCamera(options, response => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                // You can also display the image using data:

                console.log(response.assets[0].uri);
                setisimage(true);
                setimage(response.assets[0].uri);

                // onImageSelected(source?.uri);
            }
        });
    };


    const openGallery = async () => {
        let options = {
            options: {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 600,
                maxWidth: 800
            },
        };

        launchImageLibrary(options, response => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                // You can also display the image using data:
                console.log(response);
                setisimage(true);
                setimage(response.assets[0].uri);
                const obj = {
                    uri: response.assets[0].uri,
                    name: response.assets[0].fileName,
                    type: response.assets[0].type
                }

                // console.log(result.assets[0]);
                setUserData(obj);
                console.log(obj);


            }
        });
    };


    return (
        <Provider style={{ flex: 1, backgroundColor: '#eee' }}>
            {/* view in which camera placed */}
            <View style={{ height: 200, alignItems: 'center', justifyContent: 'center' }}>
                {isimage && <Image source={{ uri: imagelink }} style={{ width: 180, height: 180, borderRadius: 100, }} />}
            </View>
            {/* camera icon */}
            <View
                style={{
                    marginTop: -22,
                    width: 50,
                    elevation: 5,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    left: 270,
                    backgroundColor: '#ffffff',
                    borderRadius: 100,
                }}>
                <Icon
                    style={{ alignSelf: 'center' }}
                    name="camera"

                    onPress={showModal}
                    size={27}
                    color="#00008b"
                />
            </View>
            {/* icons to get pic */}
            <Portal>
                <Modal

                    visible={modalVisible}
                    onDismiss={hideModal}
                    contentContainerStyle={{


                        backgroundColor: '#fff',

                        width: 220,
                        height: 130,
                        borderRadius: 10,
                        left: 70
                    }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, color: '#333', fontWeight: 'bold' }}>Take Photo</Text>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>


                        <Ionicons
                            name="camera-outline"
                            onPress={onCameraButtonClick}
                            // onPress={() => requestCameraPermission()}
                            size={48}
                            color='#00008b'
                        // iconColor={'black'}

                        />
                        <Ionicons

                            name="image-outline"
                            onPress={() => requestGallaryPermission()}

                            size={42}
                            color='#00008b'


                        />

                    </View>
                </Modal>
            </Portal>

            <View
                style={{
                    top: 20,
                    padding: 5,
                }}>
                <TextInput
                    label="User Id"
                    value={id}
                    onChangeText={text => setId(text)}
                    placeholderTextColor="black"
                    activeUnderline="disable"
                    activeUnderlineColor="black"
                    outlineColor="Black "
                    textColor='black'
                    left={
                        <TextInput.Icon icon="account-circle" size={35} iconColor="#00008b" />
                    }
                    style={{ backgroundColor: `#ffffff` }}
                />
            </View>
            <View
                style={{
                    top: 30,
                    padding: 5,
                }}>
                <TextInput
                    label="Name"
                    value={name}
                    onChangeText={text => setName(text)}
                    placeholderTextColor="black"
                    activeUnderline="disable"
                    activeUnderlineColor="black"
                    outlineColor="Black "
                    textColor='black'
                    style={{ backgroundColor: `#ffffff` }}
                    left={<TextInput.Icon icon="account" size={35} iconColor="#00008b" />}

                />
            </View>
            <View
                style={{
                    marginTop: 40,
                    padding: 5,
                }}>
                <TextInput
                    label="Password"

                    value={password}
                    onChangeText={text => setPassword(text)}
                    activeUnderline="disable"
                    activeUnderlineColor="black"
                    outlineColor="Black "
                    textColor='black'
                    style={{ backgroundColor: `#ffffff` }}
                    secureTextEntry
                    left={<TextInput.Icon icon="account-key" size={35} iconColor="#00008b" />}
                    right={<TextInput.Icon icon="eye" size={35} iconColor="#00008b" />}
                />
            </View>
            <View
                style={{
                    marginTop: 20,
                    padding: 5,
                }}>
                <Picker
                    style={{ backgroundColor: `#ffffff` }}
                    dropdownIconColor={'black'}
                    selectedValue={selectedUser}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedUser(itemValue)
                    }>
                    <Picker.Item label="Teacher" color='black' value="Teacher" />
                    <Picker.Item label="Student" color='black' value="Student" />
                    <Picker.Item label="Admin" color='black' value="Admin" />
                </Picker>
            </View>
            <View style={{ padding: 5, top: 10 }}>
                <TouchableOpacity
                    style={styles.btnSave}
                    onPress={SaveUserInfo}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            color: '#ffffff',
                            //fontFamily: 'times new roman bold',
                        }}>
                        Save
                    </Text>
                </TouchableOpacity>
            </View>
        </Provider>
    );
};

export default AddUser;

const styles = StyleSheet.create({
    btnSave: {
        width: '80%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 10,
        padding: 10,
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#4682b4',
    }
});
