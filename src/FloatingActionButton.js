import React from "react";
import {StyleSheet, TouchableNativeFeedback, View} from "react-native";

const FloatingActionButton = ({color = "red", size = 64, onClick, children}) => (
    <View style={[styles.FABContainer, {backgroundColor: color}]} onPress={onClick}>
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple("", true)}>
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
