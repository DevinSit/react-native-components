import React from "react";
import {Modal, StyleSheet, Text, TouchableNativeFeedback, View} from "react-native";
import {DEFAULT_SPACING, ACCENT_COLOR, GREY_COLOR, LIGHT_COLOR} from "styles/constants";
import AndroidButton from "components/AndroidButton";

const BillSummaryModalLayout = ({
    headerText, children,
    negativeButtonText, onNegativeButtonClick,
    positiveButtonText, onPositiveButtonClick,
    isVisible, onClose, style, contentStyle
}) => (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
        <View style={styles.modalDialog__Backdrop}>
            <View style={[styles.modalDialog__Container, style]}>
                <View style={[styles.modalDialog__ContentContainer, contentStyle]}>
                    <Text style={styles.modalDialog__Header}>{headerText}</Text>

                    {children}
                </View>

                <View style={styles.modalDialog__ButtonContainer}>
                    {
                        negativeButtonText && (
                            <AndroidButton
                                label={negativeButtonText}
                                textStyle={[
                                    styles.modalDialog__Button,
                                    styles.modalDialog__ButtonNegative
                                ]}
                                onClick={onNegativeButtonClick}
                            />
                        )     
                    }

                    {
                        positiveButtonText && (
                            <AndroidButton
                                label={positiveButtonText}
                                textStyle={[
                                    styles.modalDialog__Button,
                                    styles.modalDialog__ButtonPositive
                                ]}
                                onClick={onPositiveButtonClick}
                            />
                        )
                    }
                </View>
            </View>
        </View>
    </Modal>
);

const styles = StyleSheet.create({
    modalDialog__Backdrop: {
        alignItems: "center",
        backgroundColor: "#32323280",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center"
    },
    modalDialog__Button: {
        paddingVertical: 8,
        paddingHorizontal: DEFAULT_SPACING
    },
    modalDialog__ButtonPositive: {
        color: ACCENT_COLOR
    },
    modalDialog__ButtonNegative: {
        color: GREY_COLOR
    },
    modalDialog__ButtonContainer: {
        alignSelf: "flex-end",
        flexDirection: "row"
    },
    modalDialog__Container: {
        backgroundColor: LIGHT_COLOR,
        borderRadius: 4,
        elevation: 8,
        flexDirection: "column",
        padding: 15,
        width: 325
    },
    modalDialog__ContentContainer: {
        padding: 10,
        paddingHorizontal: DEFAULT_SPACING
    },
    modalDialog__Header: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: DEFAULT_SPACING
    }
});

export default BillSummaryModalLayout;
