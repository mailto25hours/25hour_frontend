import React, { useEffect, useCallback, useReducer } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import TestInput from '../TextInp';
import styles from './styles';

const INPUT_CHANGE = 'INPUT_CHANGE';

const inputReducer = (state, action) => {
    switch (action.type) {
        case INPUT_CHANGE:
            return {
                ...state,
                value: `${action.value}`,
                isValid: action.isValid
            };

        default:
            return state;
    }
};



const Input = props => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue ? props.initialValue : '',
        isValid: props.initiallyValid,
        // touched: false
    });

    const { onInputChange, id } = props;
    useEffect(() => {
        onInputChange(id, inputState.value, inputState.isValid);
    }, [inputState, onInputChange, id]);

    // console.log(inputState.isValid)
    const textChangeHandler = text => {
        let isValid = true;
        if (props.required && text.length === 0) {
            isValid = false;
        }

        if (props.min != null && +text < props.min) {
            isValid = false;
        }
        if (props.max != null && +text > props.max) {
            isValid = false;
        }
        if (props.minLength != null && text.length < props.minLength) {
            isValid = false;
        }
        dispatch({ type: INPUT_CHANGE, value: text, isValid: isValid });
    };

    const incrementHandler = (direction) => {
        if (direction === 'increase') {
            textChangeHandler(inputState.value / 1 + 1)
        }
        else {
            textChangeHandler(inputState.value / 1 - 1)
        }
    }
    return (
        <View style={styles.formControl}>
            <Text style={styles.label}>{props.label}<Text style={styles.necessary}> *</Text></Text>
            
            <TestInput {...props}
                idName={id}
                // style={styles.textinput}
                value1={inputState.value}
                changeHandler={incrementHandler}
                textChangeHandler={textChangeHandler}
                 />
            {!inputState.isValid && (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{props.errorText}</Text>
                </View>
            )}
        </View>
    );
};


export default Input;