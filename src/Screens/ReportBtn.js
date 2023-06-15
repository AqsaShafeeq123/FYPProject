import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ReportBtn = ({ navigation, route }) => {
    return (
        <View>

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

                    backgroundColor: '#4682b4',
                }}
                onPress={() => {
                    navigation.navigate('TeacherRecording', {
                        // here is data fr next screen storing state in var

                    });
                }}>
                <Text
                    style={{
                        fontSize: 20,
                        color: 'black',

                    }}>
                    Chr
                </Text>
            </TouchableOpacity>


            <View>
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

                        backgroundColor: '#4682b4',
                    }}
                    onPress={() => {
                        navigation.navigate('TeacherRecording', {
                            // here is data fr next screen storing state in var

                        });
                    }}>
                    <Text
                        style={{
                            fontSize: 20,
                            color: 'black',

                        }}>
                        Activity Report
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ReportBtn

const styles = StyleSheet.create({})