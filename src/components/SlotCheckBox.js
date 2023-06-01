import React, { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

const SlotCheckBox = ({ value, onValueChange, size, textValue, isSelectAll, timeTableId, action }) => {


    const [isChecked, setIsChecked] = useState(value);
    const checkboxSize = size * 2 || 30;



    const handleOnPress = () => {
        // value = !isChecked
        setIsChecked(!isChecked);
        onValueChange(!isChecked, timeTableId);
    };

    useEffect(() => {

        setIsChecked(value)
        if (isSelectAll) {
            setIsChecked(isSelectAll)
        }
        if (action === 'UnCheckAll') {
            setIsChecked(false)
        }
    }, [value, isSelectAll, action])

    return (
        <TouchableOpacity onPress={handleOnPress}>
            <View style={[styles.checkbox, textValue == '' ? neturalColor : isChecked ? [checkedColor] : [uncheckedColor], { width: checkboxSize, height: checkboxSize },]}>
                <Text style={[{ fontSize: 9 }, isChecked ? textDark : textWhite]}>{textValue}</Text>
                {/* <Text style={{ fontSize: 9, color: 'white' }}>{textValue}</Text> */}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

    checkbox: {
        borderWidth: 1,
        borderColor: '#000',
        justifyContent: "center",
        alignItems: "center",
        // borderRadius: 4,
    },

    checkMark: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 12,
    },
    label: {
        fontSize: 16,
        color: '#000',
    },
});

export default SlotCheckBox;
const uncheckedColor = { backgroundColor: '#6b6b6b' }
const checkedColor = { backgroundColor: '#57ce63' }
const neturalColor = { backgroundColor: '#fff' }
const textWhite = { color: "#fff" }
const textDark = { color: "#000" }