import { Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';

const Schedule = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.steelblue}>
                Schedule Screen
            </Text>
        </SafeAreaView>
    );
};

export default Schedule;

const styles = StyleSheet.create({
    steelblue: {
        color: "steelblue",
        fontSize: 40,
        fontWeight: 'bold',
    },
});