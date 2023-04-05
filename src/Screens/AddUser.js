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

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';



const AddUser = ({ navigation }) => {
    const [text, setText] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('Teacher');

    const [modalVisible, setModalVisible] = useState(false);
    const showModal = () => setModalVisible(true);
    const hideModal = () => setModalVisible(false);

    const [imagelink, setimage] = useState({});
    const [isimage, setisimage] = useState(false);

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
        setimage(result.assets[0]);
        // console.log(result.assets[0]);
        // let src = result.assets[0].base64;
        // setImage(src);
    }

    return (
        <Provider style={{ flex: 1, backgroundColor: '#eee' }}>
            {/* view in which camera placed */}
            <View style={{ height: 200, backgroundColor: 'grey', elevation: 5 }}></View>
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
                            size={48}
                            color='#00008b'
                        // iconColor={'black'}

                        />
                        <Ionicons

                            name="image-outline"
                            onPress={() => console.log('Edit pressed')}

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
                    placeholderTextColor="black"
                    activeUnderline="disable"
                    activeUnderlineColor="black"
                    outlineColor="Black "
                    textColor='black'
                    style={{ backgroundColor: `#ffffff` }}
                    left={<TextInput.Icon icon="account" size={35} iconColor="#00008b" />}
                    secureTextEntry
                />
            </View>
            <View
                style={{
                    marginTop: 40,
                    padding: 5,
                }}>
                <TextInput
                    label="Password"
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
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="Teacher" color='black' value="Lab-1" />
                </Picker>
            </View>
            <View style={{ padding: 5, top: 10 }}>
                <TouchableOpacity
                    style={styles.btnSave}
                    onPress={() => {
                        console.log(imagelink);
                    }}>
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