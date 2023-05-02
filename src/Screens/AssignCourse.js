import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Picker } from '@react-native-picker/picker';

const AssignCourse = ({ navigation }) => {
    // state for api data get current courses
    const [courseData, setCourseData] = useState([]);
    // for selectd sec courses
    const [course, setCourse] = useState([]);

    const GetCourse = sec => {
        // setCourse([]);

        let Data = [];
        for (let i = 0; i < courseData.length; i++) {
            if (courseData[i].discipline == sec) {
                Data.push(courseData[i]);
            }
        }

        setCourse(Data);
    };


    // for flatlist selection
    const [selectedValue, setSelectedValue] = useState(0);
    const [selectedItems, setSelectedItems] = useState([]);
    // condition for checking that id already exist or not
    const handleItemSelect = id => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter(item => item !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    };

    // ----------------------------------
    useEffect(() => {
        // section func also call when screen load and picker ki value ki base py subjects b ajaty
        GetSection();
    }, []);
    // get section in picker dropdown
    const [section, setSection] = useState();

    //  use in below api func to get unique section 
    const [sectionData, setSectionData] = useState([]);
    async function GetSection() {
        let response = await fetch(
            'http://192.168.1.102:8000/api/section-offer-details',
        );

        let json = await response.json();
        // console.log(json[0].id + 'bbbbbbbbbb');
        let arr = json;
        setCourseData(arr);
        const uniqueDisciplines = arr.reduce((acc, current) => {
            if (!acc[current.discipline]) {
                acc[current.discipline] = current;
            }
            return acc;
        }, {});

        const result = Object.values(uniqueDisciplines);

        //console.log(result);
        // new array passing to picker
        let newArray = result.map(item => {
            return {
                label: item.discipline,
                value: item.discipline,
            };
        });

        setSectionData(newArray);
    }

    // get section of same  course  api
    const [courseSection, setCourseSection] = useState([]);
    const GetCourseSection = coursename => {

        for (let i = 0; i < courseData.length; i++) {
            if (
                courseData[i].courseName == coursename &&
                courseData[i].discipline == section
            ) {

                courseSection.push(courseData[i].id);
            }
        }

    };




    return (
        <View style={{ flex: 1 }}>
            <View>
                <Text
                    style={{
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: 15,
                        marginTop: 20,
                    }}>
                    Select Discipline
                </Text>
                {/* PICKER 2 */}

                <Picker
                    style={styles.picker}
                    dropdownIconColor={'black'}
                    mode="dropdown"
                    selectedValue={section}
                    onValueChange={itemValue => {
                        setSection(itemValue), GetCourse(itemValue);
                    }}>
                    {sectionData.map((item, index) => {
                        return (
                            <Picker.Item label={item.label} value={item.value} key={index} />
                        );
                    })}
                </Picker>
            </View>

            {/* Flatlist */}
            <View style={{ marginTop: 20, padding: 4 }}>
                <FlatList
                    data={course}
                    renderItem={({ item }) => (
                        // if (item.discipline.includes('BCS-5A')) {
                        <Pressable
                            onPress={() => {
                                handleItemSelect(item.courseName);
                            }}
                            style={[
                                styles.itemContainer,
                                selectedItems.includes(item.courseName) &&
                                styles.selectedItemContainer,
                            ]}>
                            <Text style={{ color: 'black', fontSize: 19 }}>
                                {' '}
                                {item.courseName}
                            </Text>
                        </Pressable>
                        // }
                    )}
                />
            </View>
            {/* add btn */}
            <View
                style={{
                    alignItems: 'center',
                    position: 'absolute',
                    bottom: 10,
                    alignSelf: 'center',
                }}>
                <TouchableOpacity
                    style={{
                        width: 160,
                        marginTop: 20,

                        alignItems: 'center',

                        borderRadius: 10,
                        padding: 10,
                        backgroundColor: '#4682b4',
                    }}
                    onPress={() => {

                        setCourseSection([]);

                        for (let index = 0; index < selectedItems.length; index++) {
                            GetCourseSection(selectedItems[index]);
                        }

                        navigation.navigate('StudentDetails', {
                            Course: selectedItems,
                            SectionOfferId: courseSection,
                            Discipline: section
                        });
                    }}>
                    <Text
                        style={{
                            fontSize: 20,
                            color: '#ffffff',
                        }}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        padding: 16,
        elevation: 4,
        margin: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    selectedItemContainer: {
        backgroundColor: 'lightblue',
    },
    picker: {
        color: 'black',
        backgroundColor: '#4682b4',
        marginTop: 10,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 10,
        borderRadius: 10,
        flexDirection: 'row',
    },
    title: {
        fontSize: 15,
        color: 'black',
    },
});
export default AssignCourse;

