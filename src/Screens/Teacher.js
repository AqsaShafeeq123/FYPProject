
// -------------------
import React, { useState, useEffect } from 'react';
import {
  FlatList,

  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,

} from 'react-native';
import { Button, Searchbar } from 'react-native-paper';
import { Modal, Portal, Provider } from 'react-native-paper';
import { appcolor } from '../components/Colorss';


const Teacher = ({ navigation }) => {
  // for modal

  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  // searchbar
  const [searchTeacher, setSearchTeacher] = useState('');

  const [data, setdata] = useState();




  // Api response store
  const [teacherdata, setTeacherData] = useState();
  // APi Code
  useEffect(() => {
    getTeacher();

  }, []);
  async function getTeacher() {
    try {
      let response = await fetch('http://192.168.1.103:8000/api/user-details');

      let json = await response.json();
      setTeacherData(json);

      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }

  // data passing to next screen making states api modal h to aesy data pass hoga
  const [nam, setNam] = useState();
  const [img, setImg] = useState();



  return (
    <Provider style={styles.container}>
      <View style={{ margin: '3%' }}>

        <Searchbar
          placeholder="Search"
          placeholderTextColor="#000"
          value={searchTeacher}
          inputStyle={{ fontSize: 16, color: '#000' }}
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
            backgroundColor: appcolor.primarycolor,
            padding: 30,
            borderRadius: 8,
          }}>
          <Text style={{ textAlign: 'center', fontSize: 16, color: '#ffffff' }}>
            Want TO View
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
                navigation.navigate('TeacherRecording', {
                  // here is data fr next screen storing state in var
                  Name: nam,
                  Img: img,
                });
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',

                }}>
                Recording
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
                navigation.navigate('TeacherSchedule', {
                  // here is data fr next screen storing state in var
                  Name: nam,
                  Img: img,
                });
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',

                }}>
                Schedule
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </Portal>

      <View style={{ flex: 1, padding: 5 }}>
        <FlatList
          style={{ flex: 1 }}

          // storing data is here in  flatlist
          data={teacherdata}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            if (item.name.toLowerCase().includes(searchTeacher.toLowerCase())) {
              // {

              return (
                // item.role == 'Teacher' &&

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
                      // data fr next screen setting state 
                      setNam(item.name);
                      setImg(item.image);
                      setdata(item.name);


                      showModal();
                    }}
                    style={[styles.item]}>
                    {
                      item.image == null ?
                        <Image source={require('../Images/imgIcon.png')} style={styles.imgStyle} />
                        :
                        <Image source={{ uri: 'http://192.168.1.103:8000/api/get-user-image/UserImages/Teacher/' + item.image }} style={styles.imgStyle} />
                    }
                    <Text style={{ fontSize: 16, color: 'black' }}>
                      {item.name}
                    </Text>


                  </TouchableOpacity>
                </View>
              )
            }

            // }
          }}></FlatList>
      </View>
    </Provider>
  );
};

export default Teacher;

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

  imgStyle: {
    width: 60,
    height: 60,
    borderRadius: 40,
    marginRight: 30,
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

});