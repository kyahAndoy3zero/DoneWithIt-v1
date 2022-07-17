import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';


import colors from '../config/colors';

function AppInput({IconComponent, inputType,...otherProps }) {
    return (
        <View style = {styles.container}>
            {IconComponent}
            <TextInput style={styles.textInput} {...otherProps} secureTextEntry={inputType} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10
    },

    textInput: {
        fontSize: 18,
    }
})

export default AppInput;