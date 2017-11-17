import React from "react";
import {Platform, StyleSheet, ToastAndroid, TouchableNativeFeedback, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const ActionBarItem = ({icon, tooltip, color = "white", size = 30, onClick}) => (
    <View style={styles.actionbarItem__Container}>
        <TouchableNativeFeedback
            onPress={onClick}
            onLongPress={() => ToastAndroid.show(tooltip, ToastAndroid.SHORT)}
            background={iconBackground}
        >
            <View style={styles.actionbarItem}>
                <Icon name={icon} color={color} size={size} />
            </View>
        </TouchableNativeFeedback>
    </View>
);

const iconBackground = (Platform.OS === "android") ? TouchableNativeFeedback.SelectableBackgroundBorderless() : null;

const styles = StyleSheet.create({
    actionbarItem__Container: {
        borderRadius: 30
    },
    actionbarItem: {
        alignItems: "center",
        justifyContent: "center",
        padding: 17
    }
});

export default ActionBarItem;
