import React from "react";
import {StyleSheet, View} from "react-native";

const ActionBarMenu = ({children}) => (
    <View style={styles.actionbar}>
        {children}
    </View>
);

const styles = StyleSheet.create({
    actionbar: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
    }
});

export default ActionBarMenu;
