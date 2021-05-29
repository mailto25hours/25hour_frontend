import React from 'react';
import { View, StyleSheet } from 'react-native';
import styles from './styles';

const NotesCard = props => {
    return <View style={{ ...styles.card, ...props.style }}>{props.children}</View>;
};



export default NotesCard;
