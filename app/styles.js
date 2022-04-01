import React from "react";
import {StyleSheet, Platform} from "react-native";
import {StatusBar} from "expo-status-bar";

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    top: StyleSheet.create( {

    }),
});

export default styles;