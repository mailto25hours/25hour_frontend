import React from 'react';
import {View, TouchableOpacity,Text} from 'react-native';
import NotesCard from '../NotesCard';
import {BaseColor, useTheme} from '@config';
import styles from './styles';
import {Icon } from '@components'

const NotesItem = props => {
    return (
       <TouchableOpacity onPress={props.onSelectItem}>
        <View>
            <NotesCard style={styles.Item}>
               <View style={styles.itemData}>
                    <Icon name="sticky-note" size={24} color="black" 
                   />
                </View>
 
                <View style = {{padding:10, justifyContent:'flex-start',  flex:1}}>
                    <Text style={styles.mainText}>Date:  {props.selected_date}</Text>
                    <Text style={styles.notesText}>{props.user_note}</Text>
                    {/* <Text></Text> */}
                    {/* <Text></Text> */}
                    {/* <Text style={styles.date}>Created Date:{props.created_date} </Text> */}
                </View>
                <View style={styles.itemData}>
                    {/* <Text style={styles.mainText}>${props.amount.toFixed(2)}</Text> */}
                    {/* {props.deletable && (
                        <TouchableOpacity
                            onPress={props.onRemove}
                            style={styles.deleteButton}
                        >
                            <Entypo name="cross" size={24} color="black" size={23}
                                color="red" />
                        </TouchableOpacity>
                    )} */}
                </View>
            </NotesCard>
        </View>
        </TouchableOpacity>

    );
};


export default NotesItem;
