import React from "react";
import {Platform, StyleSheet, Text, TouchableNativeFeedback, View} from "react-native";

const touchableBackground = (Platform.OS === "android") ? TouchableNativeFeedback.Ripple("", true) : null;

const FloatingActionButton = ({color = "red", size = 64, onClick, children}) => (
    <View style={[styles.FABContainer, {backgroundColor: color}]}>
        <TouchableNativeFeedback background={touchableBackground} onPress={onClick}>
            <View style={[styles.FAB, {height: size, width: size}]}>
                {children}
            </View>
        </TouchableNativeFeedback>
    </View>
);

const styles = StyleSheet.create({
    FABContainer: {
        borderRadius: 50, 
        bottom: 30,
        elevation: 4,
        right: 30,
        position: "absolute"
    },
    FAB: {
        alignItems: "center", 
        justifyContent: "center"
    }
});

export default FloatingActionButton;
