// import React, { useState } from 'react';
// import {
//   FlatList,
//   SafeAreaView,
//   StatusBar,
//   StyleSheet,
//   Text,

//   View,

//   TouchableOpacity,
// } from 'react-native';
// import { Searchbar } from 'react-native-paper';


// const DATA = [
//   {
//     id: '1',
//     name: 'Video1 ',

//   },
//   {
//     id: '2',
//     name: 'Video2 ',

//   },
//   {
//     id: '3',
//     name: 'Video3 ',

//   },
//   {
//     id: '4',
//     name: 'camera4 ',

//   },
//   {
//     id: '5',
//     name: 'camera5 ',

//   },
//   {
//     id: '6',
//     name: 'camera6',

//   },
//   {
//     id: '7',
//     name: 'camera7',

//   },
//   {
//     id: '8',
//     name: 'camera8 ',

//   },

// ];

// const Home = ({ navigation }) => {
//   const [searchStream, setSearchStream] = useState('');
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={{ margin: '1%' }}>
//         <Searchbar
//           placeholder="Search"
//           value={searchStream}

//           fontSize={12}
//           style={{ borderRadius: 10 }}
//           onChangeText={text => setSearchStream(text)}
//         />
//       </View>
//       <View style={{ flex: 1, padding: 5 }}>
//         <FlatList
//           style={{ flex: 1 }}
//           numColumns={2}
//           data={DATA}
//           renderItem={({ item, index }) => {
//             if (item.name.toLowerCase().includes(searchStream.toLowerCase())) {
//               return (
//                 <View
//                   style={{
//                     padding: 5,
//                     backgroundColor: '#ffff',
//                     elevation: 5,
//                     margin: 4,
//                     borderRadius: 9,
//                   }}>
//                   <TouchableOpacity onPress={() => {

//                     navigation.navigate('StreamingDetails', {
//                       Disp: 'BSCS_7C',
//                       TeacherName: 'Dr Naseer',
//                       Subject: 'CC',
//                       Name: item.name,
//                     });
//                   }} style={[styles.item]}>

//                     <Text style={styles.title}>{item.name}</Text>
//                   </TouchableOpacity>
//                 </View>
//               );
//             }
//           }}></FlatList>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     padding: 20,
//     marginVertical: 25,
//     marginHorizontal: 28,
//     borderRadius: 10,
//     // flexDirection: 'row',

//   },
//   title: {
//     fontSize: 15,
//     color: 'black'
//   },

// });


// ---------------------------------------------------




import { StyleSheet, Text, View, ScrollView, Dimensions, StatusBar, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { WebView } from 'react-native-webview';

import { Modal, Portal, Provider, TextInput } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Home = ({ navigation }) => {




  //  for camera
  const [selectedVC, setSelectedVC] = useState();
  const [modalCam, setModalCam] = useState(false);

  const openModal = () => {
    setModalCam(true);
  };

  const closeModal = () => {
    setModalCam(false);
  };


  //updt  modal k andr jo textinput
  const [text, setText] = useState('');

  return (

    <Provider >
      <View style={styles.body}>
        <View style={styles.View}>
          <TouchableOpacity onPress={() => {

            navigation.navigate('LiveStreamDetails', {
              Section: 'BSCS-5C',
              Course: 'PDC',
              Venue: 'LAB 5',
              Name: 'MR UMAR',
              Time: '08:30 -10:00',
              Camera: ' camera 2',

            });
          }} >
            <WebView
              javaScriptEnabled={true}
              domStorageEnabled={true}
              source={{
                // uri: `http://192.168.0.103:8080/video`,

                // uri: `http://192.168.0.103:8080/video`,
                uri: 'http://www.youtube.com/watch?v=kW5GsrRqv-M',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.View}>
          <WebView
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{
              // uri: `http://192.168.235.103:8080/video`,

              // uri: `http://192.168.0.103:8080/video`,
              uri: 'http://www.youtube.com/watch?v=kW5GsrRqv-M',
            }}
          />

        </View>
        {/* CAMERA ICON */}
        <View
          style={{
            backgroundColor: '#4682b4',
            marginBottom: 50,
            marginLeft: 290,
            alignItems: 'center',
            borderRadius: 100,
            marginRight: 20,
            height: 60,
            width: 60
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


                backgroundColor: '#fff',
                padding: 30,
                marginBottom: 80,
                marginTop: 80,
                marginLeft: 20,
                marginRight: 20,
                borderRadius: 20
              }}>


              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 30, color: '#333', fontWeight: 'bold' }}>ADD DVR</Text>



                <View style={{ padding: 5, top: 7, borderRadius: 26 }}>
                  <View>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>

                      IP
                    </Text>
                    <TextInput
                      value={text}
                      textColor={'black'}
                      style={{
                        margin: 4,
                        color: 'black',
                        backgroundColor: 'white',
                        elevation: 38,
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


                      textColor={'black'}
                      style={{
                        margin: 4,
                        color: 'black',
                        elevation: 2,
                        width: 290,
                        borderRadius: 8,
                        backgroundColor: '#fff'
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

                      textColor={'black'}
                      style={{
                        margin: 4,
                        color: 'black',
                        elevation: 2,
                        width: 290,
                        borderRadius: 8,
                        backgroundColor: '#fff'
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

                      textColor={'black'}
                      style={{
                        margin: 4,
                        color: 'black',
                        elevation: 2,
                        width: 290,
                        borderRadius: 8,
                        backgroundColor: '#fff'
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

                      textColor={'black'}
                      style={{
                        margin: 4,
                        color: 'black',
                        elevation: 2,
                        width: 290,
                        borderRadius: 8,
                        backgroundColor: '#fff'
                      }}
                      onChangeText={text => setText(text)}
                    />
                  </View>



                  {/* add btn */}
                  <View style={{ alignItems: 'center', }}>
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
              </View>
            </Modal>

          </Portal>

        </View>
      </View>



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
    height: 230,
    width: 350,
    margin: 20,
    borderRadius: 20,
  },



});























