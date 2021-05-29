import React, { useEffect, useCallback, useReducer, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, TouchableOpacity,FlatList,TextInput, Button, Alert,ScrollView,KeyboardAvoidingView} from 'react-native';
import { BaseStyle,BaseColor, useTheme} from '@config';
import {Text, Icon, Image,  Header,
    SafeAreaView} from '@components';
import styles from './styles';
import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';
import Modal from 'react-native-modal'


export default function DropDownPage(props) {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const {style, image, icon, title, subtitle, onPress,route,navigation} = props;
  
  const [isModalVisible, setModalVisibility] = useState(true);
 const dispatch = useDispatch();
    const [dropdownResults, setDropDownResults, errorMessage] = apiResult();
    //  console.log(dropdownResults)
 

  const confirmPressHandler = (title,id) => {
    // console.log("hi press")
        setModalVisibility(false);
          navigation.navigate('SellProduct',{name:title,id:id})
    }
  return (
   <View style={styles.Items}>
            <Modal isVisible={isModalVisible} style={{ marginHorizontal: 30, marginVertical: 50, backgroundColor: 'white', justifyContent: 'flex-start' }} >
                <KeyboardAvoidingView style={{ flex: 1 }} behavior="height" keyboardVerticalOffset={10}>
                    <ScrollView>
                         <View style={styles.Item }>
                           <Header
                    title={t(route.params.title)}
                    renderLeft={() => {
                        return (
                            <Icon
                                name="arrow-left"
                                size={20}
                                color={colors.primary}
                                enableRTL={true}
                            />
                        );
                    }}
                    onPressLeft={() => {
                        navigation.goBack();
                    }}   />
                            <View style={{
                                // width: 500,
                                // height: 500,
                                alignItems:'center'  }}>
                            
 
       
              
      <FlatList
                showsHorizontalScrollIndicator={true}
                scrollEnabled={false}
                keyExtractor={(item) => item.id}
                // keyExtractor={(day) => day.id}
              
                data={dropdownResults}
                renderItem={({ item }) => {
                    // console.log(item)
                    return (
                    
                          <TouchableOpacity style={[styles.dateView, {backgroundColor: colors.backgroundColor}]} 
                            onPress={()=>confirmPressHandler(item.title,item.id)} >
                       
                          <Text >{item.title}</Text>

                           </TouchableOpacity>
                       
                     
                      
                    );
                }}
            />
    </View>
      
     
     </View>
     </ScrollView>
     </KeyboardAvoidingView>
     </Modal>
     </View>
  );
}

DropDownPage.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  image: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onPress: PropTypes.func,
};

DropDownPage.defaultProps = {
  style: {},
  image: '',
  icon: '',
  title: '',
  subtitle: '',
  onPress: () => {},
};
