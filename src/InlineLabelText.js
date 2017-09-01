import React from "react";
import {StyleSheet, Text, View} from "react-native";

const InlineLabelText = ({label, text, style = {}}) => (
    <View style={[styles.inlineLabelText__Container, style]}>
        <Text>{label}</Text>
        <Text>{text}</Text>
    </View>
);

const styles = StyleSheet.create({
    inlineLabelText__Container: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
});

export default InlineLabelText;
