import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { appcolor } from '../components/Colorss';
import Ionicons from 'react-native-vector-icons/Ionicons';




const Profile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Admin text */}
            <View style={{

                height: 100,
                width: 350,
                marginBottom: -150,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ffff',
                elevation: 2,
                marginTop: 5,
                marginBottom: 90,
                borderRadius: 8,
                flexDirection: 'row',
                justifyContent: 'space-between',

            }}>

                <Ionicons
                    onPress={() => {

                    }}
                    style={{}}
                    name="person-add"
                    size={32}
                    color="black"
                />

                <Text style={{ fontSize: 30, color: '#333', fontWeight: 'bold', marginRight: 190, }}> ADMIN </Text>

            </View>
            {/* Buttons */}
            <View style={{

                backgroundColor: '#ffff',
                elevation: 8,
                margin: 3,
                borderRadius: 8,
                bottom: 70,
                height: 380,
                width: 350


            }}>
                <View style={{

                }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('AddUser')}
                    >
                        <Text style={styles.buttonText}> Add User   </Text>
                    </TouchableOpacity>

                </View>


                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('TeacherList')}
                    >
                        <Text style={styles.buttonText}> Rule Setting    </Text>
                    </TouchableOpacity>

                </View>

                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('AssignCourse')}
                    >
                        <Text style={styles.buttonText}> Assign Courses   </Text>
                    </TouchableOpacity>
                </View>


                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => { navigation.navigate('Logins') }}
                    >
                        <Text style={styles.buttonText}> Log Out    </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>



    );
};
export default Profile;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d3d3d3'
    },
    button: {

        height: 60,
        width: '100%',
        margin: 10,
        elevation: 6,
        alignSelf: 'flex-start',

    },
    buttonText: {
        color: 'black',
        fontSize: 20,
        // fontWeight: 'bold'
    },
});

