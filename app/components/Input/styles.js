import {StyleSheet} from 'react-native';

export default StyleSheet.create({
   formControl: {
        width: '100%'
    },
    label: {
        fontFamily: 'open-sans-bold',
        marginTop: 25,
        fontSize: 16,
        paddingTop:4,
        fontWeight:'bold'
    },

    errorContainer: {
        marginVertical: 5
    },
    errorText: {
        fontFamily: 'open-sans',
        color: 'red',
        fontSize: 13
    },
    necessary:{
        color:'red',
        // fontSize:15,
        // marginLeft:25
    }
});
