import React, {useState,useEffect} from 'react';
import {View, ScrollView, KeyboardAvoidingView, Platform,ActivityIndicator} from 'react-native';
import {BaseStyle, useTheme} from '@config';
import {
  Image,
  Header,
  SafeAreaView,
  Icon,
  Text,
  Button,
  TextInput,
} from '@components';
import styles from './styles';
import {UserData} from '@data';
import {useTranslation} from 'react-i18next';

import { showMessage, hideMessage } from "react-native-flash-message";
import FlashMessage from "react-native-flash-message";
import { Images } from '../../config/images';

export default function ProfileEdit({navigation}) {
  const {colors} = useTheme();
  const {t} = useTranslation();

  const [id, setId] = useState(UserData[0].id);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [image] = useState({uri:UserData[0].image});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState({ email: true, name: true ,id:true, address:true});

  // const [isLoading, setIsLoading] = useState(false);
  
  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 20,
  });
 

  const showAlertMessage = (message) => {
    showMessage({
      message: message,
      description: "",
      type: "success",
    })
  }
  useEffect(() => {
        // setIsLoading(true)
        setId(UserData[0].id)
        setName('')
        setEmail('')
        setAddress('')
       setTimeout(() => {
        // setName(userType.user_info.first_name)
    }, 2000);
    // setIsLoading(false)
    }, []);

  //  console.log(id)

    const onConfirm = (id) =>{

    }
  return (
    <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{top: 'always'}}>
      <Header
        title={t('edit_profile')}
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
        }}
        onPressRight={() => {}}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        keyboardVerticalOffset={offsetKeyboard}
        style={{flex: 1}}>
         
        <ScrollView contentContainerStyle={styles.contain}>
        
          <View>
            <Image source={UserData[0].image == undefined?Images.user:image} style={styles.thumb} />
          </View>
          <View style={styles.contentTitle}>
            <Text headline semibold>
              {t('account')}
            </Text>
          </View>
          <TextInput
            onChangeText={text => setId(text)}
            onFocus={() => {
              setSuccess({
                ...success,
                id: true,
              });
            }}
            success={success.id}
            placeholder={t('input_id')}
            value={id}
          />
          <View style={styles.contentTitle}>
            <Text headline semibold>
              {t('name')}
            </Text>
          </View>
          <TextInput
            onChangeText={text => setName(text)}
            placeholder={t('input_name')}
            onFocus={() => {
              setSuccess({
                ...success,
                name: true,
              });
            }}
            success={success.name}
            value={name}
          />
          <View style={styles.contentTitle}>
            <Text headline semibold>
              {t('email')}
            </Text>
          </View>
          <TextInput
            onChangeText={text => setEmail(text)}
            placeholder={t('input_email')}
            value={email}
            onFocus={() => {
              setSuccess({
                ...success,
                email: true,
              });
            }}
            success={success.email}
          />
          <View style={styles.contentTitle}>
            <Text headline semibold>
              {t('address')}
            </Text>
          </View>
          <TextInput
            onChangeText={text => setAddress(text)}
            placeholder={t('input_address')}
            value={address}
            onFocus={() => {
              setSuccess({
                ...success,
                address: true,
              });
            }}
            success={success.address}
          />
        </ScrollView>
        <View style={{paddingVertical: 15, paddingHorizontal: 20}}>
          <Button
            loading={loading}
            full
              onPress={() => {
                onConfirm()
              }}>
            {t('confirm')}
          </Button>
        </View>
      </KeyboardAvoidingView>
      <FlashMessage position="top" />
    </SafeAreaView>
  );
}
