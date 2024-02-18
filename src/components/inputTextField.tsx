import { View, Text, TextInput, StyleSheet, Image } from 'react-native'
import React from 'react'
import images from '../utils/images';
import colors from '../utils/colors';
interface InputTextFieldProps {
    style?: any;
    onChangeText: any;
    placeholder: any;
    isValid?: any;
    icon?: any;
}
const InputTextField = ({ icon, style, placeholder, onChangeText, isValid, ...inputProps }: InputTextFieldProps) => {
    return (
        <View style={[styles.container, isValid == false ? { borderWidth: 0.5, borderColor: colors.red } : {}, style]}>
            {icon && < Image
                source={icon}
                resizeMode='contain'
                style={[styles.icon, isValid == false ? { tintColor: colors.red } : {}]}
            />}
            <TextInput
                placeholder={placeholder}
                onChangeText={onChangeText}
                style={styles.input}
                placeholderTextColor={isValid == false ? "rgba(252,3,3,0.5  )" : "rgba(1,1,1,0.3)"}
                {...inputProps}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 5,
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        height: 30,
        width: 30
    },
    input: {
        padding: 5,
        color: colors.black,
        flex: 1
    }
})

export default InputTextField