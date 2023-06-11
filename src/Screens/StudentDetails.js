import React, { useState, useEffect } from 'react';
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    Image,
    View,

    TouchableOpacity,
    Pressable,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { FAB } from 'react-native-paper';
import { Snackbar } from 'react-native-paper';
const StudentDetails = ({ navigation, route }) => {
    const { Course, SectionOfferId, Discipline } = route.params;
    console.log(Course, SectionOfferId, Discipline);





    // snackbar
    const [snackBar, setSnackBar] = React.useState(false);

    const onToggleSnackBar = () => setSnackBar(!snackBar);

    const onDismissSnackBar = () => setSnackBar(false);

    // for flatlist selection 

    const [selectedItems, setSelectedItems] = useState([]);
    const handleItemSelect = (id) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter(item => item !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    };




    // for search bar
    const [searchStudent, setSearchStudent] = useState('');

    const [stdEnroll, setStdEnroll] = useState([]);

    // ----------------------------------
    useEffect(() => {

        // section func also call 
        GetStudents();

        // console.log('****' + Course);
    }, []);

    //  std get on screen load api 
    const GetStudents = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(Course);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        let response = await fetch(
            "http://192.168.1.103:8000/api/student-offered-courses", requestOptions
        );
        let json = await response.json();

        setStdEnroll(json)


    }

    // ---------------------------------
    const [enroll, setEnroll] = useState([]);

    // --------------------------
    // tick btn api 
    const StudentEnroll = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(enroll);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };


        console.log("api response****");
        fetch('http://192.168.1.103:8000/api/student-enroll', requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }








    return (
        <SafeAreaView style={styles.container}>
            <View style={{ margin: '1%' }}>
                <Searchbar
                    placeholder="Search"
                    value={searchStudent}

                    fontSize={12}
                    style={{ borderRadius: 10, color: global.color }}
                    onChangeText={text => setSearchStudent(text)}
                />
            </View>
            <View style={{ flex: 1, padding: 5 }}>
                <FlatList
                    style={{ flex: 1 }}

                    // storing data is here in  flatlist
                    data={stdEnroll}

                    renderItem={({ item, index }) => {
                        if (item.name.toLowerCase().includes(searchStudent.toLowerCase())) {


                            return (

                                <Pressable
                                    onPress={() => handleItemSelect(item.aridNo)}
                                    style={[
                                        styles.itemContainer,
                                        selectedItems.includes(item.aridNo) && styles.selectedItemContainer,
                                    ]}>
                                    <Image source={{ uri: 'http://192.168.1.103:8000/api/get-student-image/UserImages/Student/' + item.image }} style={styles.imgStyle} />
                                    <Text style={{
                                        fontSize: 16, color: 'black', marginLeft: 70, bottom: 40
                                    }}>
                                        {item.name}
                                    </Text>

                                </Pressable>
                            )
                        }


                    }}></FlatList>
            </View>
            <FAB
                style={{
                    position: 'absolute',
                    margin: 16,
                    right: 0,
                    bottom: 40,
                    backgroundColor: '#4682b4'
                }}
                small
                icon="checkbox-outline"
                onPress={() => {

                    for (let index = 0; index < selectedItems.length; index++) {
                        let arr =
                        {
                            "id": 0,
                            "sectionOfferId": '',
                            "studentID": '',
                            "discipline": ''
                        }
                        arr.sectionOfferId = SectionOfferId;
                        arr.studentID = selectedItems[index];
                        arr.discipline = Discipline
                        enroll.push(arr)
                    }


                    console.log(enroll)

                    StudentEnroll();
                    onToggleSnackBar()
                }}
            />
            <Snackbar
                visible={snackBar}
                onDismiss={onDismissSnackBar}
                action={{
                    label: 'Undo',
                    onPress: () => {
                        // Do something
                    },
                }}>
                Student Enrolled Successfully !
            </Snackbar>
        </SafeAreaView>
    );
};

export default StudentDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 15,
        color: 'black'
    },
    itemContainer: {
        padding: 16,
        elevation: 4,
        margin: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#fff',
        borderRadius: 10
    },
    selectedItemContainer: {
        backgroundColor: 'lightblue',
    },
    imgStyle: {
        width: 60,
        height: 60,
        borderRadius: 40,
        marginRight: 30,
    },


});




