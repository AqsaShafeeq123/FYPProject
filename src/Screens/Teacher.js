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

const DATA = [
  {
    id: '1',
    name: 'Dr Naseer',
    image:
      'https://i.pinimg.com/550x/03/06/46/0306467bab5c7b61cf9823a263d2ab9b.jpg',
  },
  {
    id: '2',
    name: 'Mr. Umar',
    image:
      'https://i.pinimg.com/550x/03/06/46/0306467bab5c7b61cf9823a263d2ab9b.jpg',
  },
  {
    id: '3',
    name: 'Dr Munir',
    image:
      'https://i.pinimg.com/550x/03/06/46/0306467bab5c7b61cf9823a263d2ab9b.jpg',
  },
  {
    id: '4',
    name: 'Mr. Zahid',
    image:
      'https://i.pinimg.com/550x/03/06/46/0306467bab5c7b61cf9823a263d2ab9b.jpg',
  },
  {
    id: '5',
    name: 'Sir. Aftab',
    image:
      'https://i.pinimg.com/550x/03/06/46/0306467bab5c7b61cf9823a263d2ab9b.jpg',
  },
  {
    id: '6',
    name: 'Dr Mohsin',
    image:
      'https://i.pinimg.com/550x/03/06/46/0306467bab5c7b61cf9823a263d2ab9b.jpg',
  },
];

const Teacher = ({ navigation }) => {
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [visible, setVisible] = React.useState(false);
  const [searchTeacher, setSearchTeacher] = useState('');

  const [data, setdata] = useState();


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
                navigation.navigate('TeacherRecording');
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
                  Name: data,
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
                    <Image source={{ uri: item.image }} style={styles.imgStyle} />
                    <Text style={{ fontSize: 16, color: 'black' }}>
                      {item.name}
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