import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { BaseStyle, useTheme } from '@config';
import { Header, SafeAreaView, Icon, Text, Button, TextInput } from '@components';
import styles from './styles';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux'
import { UserActions } from '@actions';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";
import { useSelector } from 'react-redux';


function SignIn(props) {
  const { error } = props;
  const { colors } = useTheme();
  const { t } = useTranslation();
  const dispatch = useDispatch();

 
  // console.log(messages, 'message is this')

  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState({ email: true, password: true });
  const userLogin = useSelector(state => state.userLogin);
  const {loading,userInfo } = userLogin;
  // console.log(error)

  const showAlertMessage = (message) => {
    showMessage({
      message: message,
      description: "",
      type: "success",
    })
  }

  /**
   * call when action login
   *
   */
  const onLogin = () => {
    if (email == '' || password == '') {
      const messages='Fill all the inputs'
      showAlertMessage(messages)
      setSuccess({
        ...success,
        email: false,
        password: false,
      });
    } else {
      dispatch(UserActions.login(email, password))
      if(!loading){
      setTimeout(() => {
        props.navigation.navigate('Profile')
      }, 500);}
    }
  };


  

  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 20,
  });

  return (
    <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{ top: 'always' }}>
      <Header
        title={t('sign_in')}
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
          props.navigation.goBack();
        }}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        keyboardVerticalOffset={offsetKeyboard}
        style={{ flex: 1 }}>
        <View style={styles.contain}>
          <TextInput
            onChangeText={text => setEmail(text)}
            onFocus={() => {
              setSuccess({
                ...success,
                email: true,
              });
            }}
            placeholder={t('input_email')}
            success={success.email}
            value={email}
          />
          <TextInput
            style={{ marginTop: 10 }}
            onChangeText={text => setPassword(text)}
            onFocus={() => {
              setSuccess({
                ...success,
                password: true,
              });
            }}
            placeholder={t('input_password')}
            secureTextEntry={true}
            success={success.password}
            value={password}
          />
          <Button
            style={{ marginTop: 20 }}
            full
            loading={loading}
            onPress={() => {
              onLogin();
            }}>
            {t('sign_in')}
          </Button>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('ResetPassword')}>
            <Text body1 grayColor style={{ marginTop: 25 }}>
              {t('forgot_your_password')}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <FlashMessage position="top" />
    </SafeAreaView>
  );
}


const mapStateToProps = state => {
  // console.log(state.auth.error, 'error haru')
  return {
   
  };
}

export default connect(mapStateToProps)(SignIn)
