import { Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';

const Setting = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.steelblue}>
                Setting Screen
            </Text>
        </SafeAreaView>
    );
};

export default Setting;
const styles = StyleSheet.create({
    steelblue: {
        color: "steelblue",
        fontSize: 40,
        fontWeight: 'bold',
    },
});