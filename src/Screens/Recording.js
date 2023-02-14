import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Recording = () => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.steelblue}>
                Recording Screen
            </Text>
        </SafeAreaView>


    );
};

export default Recording;

const styles = StyleSheet.create({
    steelblue: {
        color: "steelblue",
        fontSize: 30,
        fontWeight: 'bold',
    },
});