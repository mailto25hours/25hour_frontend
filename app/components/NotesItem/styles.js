import React from "react";
import { StyleSheet } from "react-native";
import { BaseColor } from "@config";

export default StyleSheet.create({
 
     Item: {
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginHorizontal: 20,
        // marginBottom: 20,
        marginVertical:10
    },
    itemData: {
        flexDirection: 'row',
        alignItems: 'center'
    },
   date: {
        fontFamily: 'open-sans',
        color: '#888',
        fontSize: 16,
        paddingLeft: 10
    },
    mainText: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        flex:1,
        
        // textAlign:'left',
        
    }, notesText: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
        // textAlign:'left',
        
    },
    deleteButton: {
        marginLeft: 20
    }
});