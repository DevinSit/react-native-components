import React from "react";
import {StyleSheet, Text, TouchableNativeFeedback, View} from "react-native";
import {ACCENT_COLOR, GREY_COLOR} from "styles/constants";

const RadioButtonCircle = ({isSelected}) => (
    <View 
        style={[
          styles.radioButtonCircle__Outside,
          isSelected && styles.radioButtonCircle__OutsideSelected
        ]}
    >
        {isSelected && <View style={styles.radioButtonCircle__Inside} />}
    </View>
);

const RadioButton = ({value, label, isSelected, onClick, style}) => (
    <TouchableNativeFeedback onPress={() => onClick(value)}>
        <View style={[styles.radioButton__Container, style]}>
            <RadioButtonCircle isSelected={isSelected} />
            <Text style={styles.radioButton__Label}>{label}</Text>
        </View>
    </TouchableNativeFeedback>
);

const styles = StyleSheet.create({
    radioButton__Container: {
        alignItems: "center",
        flexDirection: "row",
        padding: 10
    },
    radioButton__Label: {
        fontSize: 16,
        marginLeft: 10
    },
    radioButtonCircle__Outside: {
        alignItems: 'center',
        borderColor: GREY_COLOR,
        borderRadius: 12,
        borderWidth: 2,
        height: 20,
        justifyContent: 'center',
        width: 20
    },
    radioButtonCircle__OutsideSelected: {
        borderColor: ACCENT_COLOR
    },
    radioButtonCircle__Inside: {
        backgroundColor: ACCENT_COLOR,
        borderRadius: 6,
        height: 10,
        width: 10
    }
});

export default RadioButton;
