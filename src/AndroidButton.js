import React from "react";
import {StyleSheet, Text, TouchableNativeFeedback, View} from "react-native";

const AndroidButton = ({label, containerStyle, textStyle, onClick, Icon = () => <View />}) => (
    <TouchableNativeFeedback onPress={onClick}>
        <View style={[styles.androidButton__Container, containerStyle]}>
            <Icon />
            <Text style={textStyle}>{label}</Text>
        </View>
    </TouchableNativeFeedback>
);

const styles = StyleSheet.create({
    androidButton__Container: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
    }
});

export default AndroidButton;
