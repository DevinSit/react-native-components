import React from "react";
import {StyleSheet, Text} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Menu, {MenuOptions, MenuOption, MenuTrigger} from 'react-native-menu';

const OverflowMenu = ({onSelect, menuItems}) => (
    <Menu onSelect={onSelect}>
        <MenuTrigger>
            <Icon name="more-vert" size={30} style={styles.overflowMenuIcon} />
        </MenuTrigger>

        <MenuOptions>
            {
                menuItems.map((menuItem) => (
                    <MenuOption value={menuItem} key={menuItem}>
                        <Text>{menuItem}</Text>
                    </MenuOption>
                ))
            }
        </MenuOptions>
    </Menu>
);

const styles = StyleSheet.create({
    overflowMenuIcon: {
        color: "white",
        marginRight: 5
    }
});

export default OverflowMenu;
