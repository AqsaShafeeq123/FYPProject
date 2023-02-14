import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const Dvr = () => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.steelblue}>
                DVR Screen
            </Text>
        </SafeAreaView>
    );
};

export default Dvr;

const styles = StyleSheet.create({
    steelblue: {
        color: "steelblue",
        fontSize: 30,
        fontWeight: 'bold',
    },
});