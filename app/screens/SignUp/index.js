import React, { useState ,useCallback} from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import { BaseStyle, useTheme } from '@config';
import { Header, SafeAreaView, Icon, Button, TextInput } from '@components';
import styles from './styles';
import { useTranslation } from 'react-i18next';
import { connect, useDispatch } from 'react-redux'

import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";
import { useSelector } from 'react-redux';




function SignUp({ navigation },props) {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {error}=props
  
  // console.log(message, 'message is this')

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState({
    name: true,
    email: true,
    address: true,
  });

  /**
   * call when action signup
   *
   */

  const showAlertMessage = (message) => {
    showMessage({
      message: message,
      description: "",
      type: "success",
    })
  }
  const onSignUp = useCallback(async () => {
    if (name == '' || email == '' || password == '') {
     const messages='Fill all the inputs'
      showAlertMessage(messages)
      setSuccess({
        ...success,
        name: name != '' ? true : false,
        email: email != '' ? true : false,
        password: password != '' ? true : false,
      });
    } else {
      setLoading(true);
     await dispatch(signUpUser(name,email, password))
        // console.log("response",response)
        // setLoading(false)
        // navigation.navigate('SignIn');
        // showAlertMessage(message)
      //  if(error === 'SignUp successfully'){
      //   setTimeout(() => {
      //     setLoading(false);
      //     navigation.navigate('SignIn');
      //   } , 500);
      // }
      // else{
      //   setTimeout(() => {
      //     setLoading(false);
      //   }, 500);
      // }
      setTimeout(() => {
            setLoading(false);
            navigation.navigate('SignIn');
          } , 500);
    }
  })



  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 20,
  });

  return (
    <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{ top: 'always' }}>
      
      <Header
        title={t('sign_up')}
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
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        keyboardVerticalOffset={offsetKeyboard}
        style={{ flex: 1 }}>
        <View style={styles.contain}>
          <TextInput
            onChangeText={text => setName(text)}
            placeholder={t('input_name')}
            success={success.name}
            value={name}
          />
          <TextInput
            style={{ marginTop: 10 }}
            onChangeText={text => setEmail(text)}
            placeholder={t('input_email')}
            keyboardType="email-address"
            success={success.email}
            value={email}
          />
          <TextInput
            style={{ marginTop: 10 }}
            onChangeText={text => setPassword(text)}
            placeholder={t('input_password')}
            success={success.password}
            value={password}
          />
          <Button
            full
            style={{ marginTop: 20 }}
            loading={loading}
            onPress={() => onSignUp()}>
            {t('sign_up')}
          </Button>
        </View>
      </KeyboardAvoidingView>
      <FlashMessage position="top" />
    </SafeAreaView>
  );
}


const mapStateToProps = state => {
  // console.log(state.auth.user)
  return {
    
  };
}

export default connect(mapStateToProps)(SignUp)
