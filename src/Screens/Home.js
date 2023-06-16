import { StyleSheet, Text, View, ScrollView, Dimensions, StatusBar, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { FAB } from 'react-native-paper';
import { Snackbar } from 'react-native-paper';
import { Modal, Portal, Provider, TextInput } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Home = ({ navigation }) => {

  // snackbar
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);


  const htmlContent = `
      <html>
        <head>
          <style>
            h1 {
              color: red;
              font-size: 44px;
              text-align: left;

            }
          </style>
        </head>
        <body>
          <h1>LAB 1</h1>
        </body>
      </html>
    `;

  const handlePress = () => {
    navigation.navigate('StreamingDetails', {
      // uri: 'http://www.youtube.com/watch?v=kW5GsrRqv-M',
      Disp: 'BSCS-8B',
      Instructor: 'Mr.Umar',
      Course: 'Pdc',
      Time: '08:30-10:00',
      Venue: 'Lab1',
      Channnel: '02',
    });
  };

  // APi Code


  const AddDvr = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "id": 0,
      "ip": ip,
      "name": name,
      "channel": channel,
      "host": host,
      "password": password,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://192.168.1.104:8000/api/add-dvr", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  }





  //  for camera
  const [selectedVC, setSelectedVC] = useState();
  const [modalCam, setModalCam] = useState(false);

  const openModal = () => {
    setModalCam(true);
  };

  const closeModal = () => {
    setModalCam(false);
  };


  //Add Dvr  modal textinput
  const [ip, setIp] = useState('');
  const [channel, setChannel] = useState('');
  const [host, setHost] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');



  return (

    <Provider >
      <ScrollView>


        <TouchableOpacity onPress={handlePress} >
          <View style={styles.View}>

            <WebView
              javaScriptEnabled={true}
              domStorageEnabled={true}
              source={{
                // uri: `http://192.168.1.102:8080/video`,
                // uri: 'http://www.youtube.com/watch?v=kW5GsrRqv-M',


                // html: '<h1>LAB 1</h1>'
                // html: htmlContent
              }}
            >

            </WebView>



          </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={handlePress}>
          <View style={styles.View}>

            <WebView
              javaScriptEnabled={true}
              domStorageEnabled={true}
              source={{
                // uri: `http://192.168.1.102:8080/video`,

                // uri: 'http://www.youtube.com/watch?v=kW5GsrRqv-M',
                // html: '<h1>LAB 2</h1>'
              }}
            />

          </View>
          {/* <Text style={{ color: 'black' }}>lab2</Text> */}
        </TouchableOpacity>




        {/* Modal */}

        <Portal>

          <Modal
            visible={modalCam}
            onDismiss={closeModal}
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
                <Text style={{ fontSize: 30, color: '#333', fontWeight: 'bold' }}>ADD DVR</Text>



                <View style={{ padding: 8, borderRadius: 26 }}>
                  <View>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15, marginTop: 10 }}>
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
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15, marginTop: 30 }}>
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
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15, marginTop: 20 }}>
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
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15, marginTop: 20 }}>
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
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15, marginTop: 20 }}>
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




                  {/* add btn */}
                  <View style={{ alignItems: 'center', }}>
                    <TouchableOpacity
                      style={{
                        width: 90,
                        marginTop: 40,
                        margin: 5,
                        alignItems: 'center',

                        borderRadius: 10,
                        padding: 10,
                        backgroundColor: '#4682b4',
                      }}
                      // CALLING API FUNC
                      onPress={() => {
                        AddDvr();
                        onToggleSnackBar();

                      }}>
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
              </View>
            </ScrollView>
          </Modal>

        </Portal>

      </ScrollView>


      <FAB
        style={{
          position: 'absolute',
          margin: 16,
          right: 0,
          bottom: 40,
          backgroundColor: '#4682b4'
        }}
        small
        icon="plus"
        onPress={openModal}
      />

      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}>
        DVR Added Successfully !
      </Snackbar>
    </Provider>


  );
};

export default Home;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  View: {
    height: 210,
    width: 320,
    margin: 10,
    borderRadius: 20,

    marginLeft: 20

  },

  label: {
    position: 'relative',
    top: 10,
    left: 10,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },

});


















