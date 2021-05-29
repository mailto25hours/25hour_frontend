import React from "react";
import { StyleSheet,I18nManager } from "react-native";
import { BaseColor } from "@config";

export default StyleSheet.create({
    formControl: {
        width: '100%'
    },
    label: {
        fontFamily: 'open-sans-bold',
        marginVertical: 8,
        width: "100%"
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 3,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
         height: 46,
        borderRadius: 5,
        paddingHorizontal: 10,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        fontFamily: 'Raleway',
        flex: 1,
        height: '100%',
        textAlign: I18nManager.isRTL ? 'right' : 'left',
        // color: colors.text,
        paddingTop: 5,
        paddingBottom: 5,

    },
  
    
});