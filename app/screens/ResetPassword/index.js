import React, {useState} from 'react';
import {View, KeyboardAvoidingView, Platform} from 'react-native';
import {BaseStyle, useTheme} from '@config';
import {Header, SafeAreaView, Icon, TextInput, Button} from '@components';
import {useTranslation} from 'react-i18next';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";
import { connect, useDispatch } from 'react-redux'

function ResetPassword({navigation}) {
  const {colors} = useTheme();
  const {t} = useTranslation();

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState({email: true});
  const dispatch = useDispatch();
  /**
   * call when action reset pass
   */
  const showAlertMessage = (message) => {
    showMessage({
      message: message,
      description: "",
      type: "success",
    })
  }

  const onReset = () => {
    if (email == '') {
      alert('Fill the email')
      setSuccess({
        ...success,
        email: false
      });
    } else {
      
      dispatch(ForgotPassword(email
        , callback => {
        // console.log("response")
        setLoading(true)
        // navigation.navigate('SignIn');
        // showAlertMessage(message)
        setTimeout(() => {
          setLoading(false);
          navigation.navigate('SignIn');
        }
          , 500);
      }))
    }
  };

  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 20,
  });

  return (
    <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{top: 'always'}}>
      <Header
        title={t('reset_password')}
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
        style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            onChangeText={text => setEmail(text)}
            onFocus={() => {
              setSuccess({
                ...success,
                email: true,
              });
            }}
            placeholder={t('email_address')}
            success={success.email}
            value={email}
            selectionColor={colors.primary}
          />
          <Button
            style={{marginTop: 20}}
            full
            onPress={() => {
              onReset();
            }}
            loading={loading}>
            {t('reset_password')}
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

export default connect(mapStateToProps)(ResetPassword)
