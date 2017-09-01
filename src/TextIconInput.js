import React from "react";
import {StyleSheet, View, TextInput} from "react-native";
import {DEFAULT_SPACING, LIGHT_GREY_COLOR} from "./styles/constants";

const TextIconInput = ({
    placeholder, value, onChange,
    keyboardType = "default", style = {}, Icon = () => <View />
}) => (
    <View style={[styles.textIconInputContainer, style]}>
        <Icon />

        <TextInput 
            style={styles.textInput}
            placeholder={placeholder}
            placeholderTextColor={LIGHT_GREY_COLOR}
            keyboardType={keyboardType}
            value={value}
            onChangeText={onChange}
        />
    </View>
);

const styles = StyleSheet.create({
    textIconInputContainer: {
        alignItems: "center",
        flexDirection: "row"
    },
    textInput: {
        flex: 1,
        marginLeft: DEFAULT_SPACING
    }
});

export default TextIconInput;
