import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
const _Component = ({ selectedVenue, getValue, temp, getstartTime, startTime, getendTime, endTime, getday, day }) => {
    const [value, setValue] = useState('');

    const setPickerValue = (itemValue, itemIndex) => {
        setValue('');
        setValue(itemValue);
        getValue(itemValue);
        getstartTime(startTime)
        getendTime(endTime)
        getday(day)
    };
    return (
        <View style={{ flex: 1 }}>
            <Text
                style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: 'black',
                    width: '100%',
                    textAlign: 'center',
                }}>
                {value}
            </Text>
            <Picker
                selectedValue={value}
                onValueChange={setPickerValue}
                style={{ width: 60, height: '20%' }}>
                <Picker.Item label="-" value="" />
                {temp.map((value, index) => (
                    <Picker.Item key={index} label={value.name} value={value.name} />
                ))}
            </Picker>
        </View>
    );
};

export default _Component;

const styles = StyleSheet.create({});