import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import styles from './styles'
const TestInput = (props) => {
    let textInput = <TextInput
        style={styles.input}
        {...props}
        value={props.value1}
        onChangeText={props.textChangeHandler}
    // onBlur={lostFocusHandler}
    />;
    
    // if (props.idName === 'Item Condition') {
    //     textInput = (
    //         <View style={styles.quantityContainer}>
    //             <View style={styles.quantity}>
    //                 {/* {console.log("hello",props.idName)} */}
    //                 <TextInput
    //                     {...props}
    //                     style={styles.input}
    //                     value={props.value1}
    //                     onChangeText={props.textChangeHandler}
    //                 // onBlur={lostFocusHandler}
    //                 />
    //             </View>
               
    //         </View>
    //     )
    // }
    return (
        <View>
            {textInput}
        </View>
    )
}





export default TestInput;
