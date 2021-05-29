import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { BaseStyle, useTheme } from '@config';
import { useTranslation } from 'react-i18next';
import { Header, SafeAreaView, Icon, Text, Button, TextInput } from '@components';
import styles from './styles';
import { connect, useDispatch } from 'react-redux'


function ChangePassword({ navigation }) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const { colors } = useTheme();
  const [success, setSuccess] = useState({
    password: true,
    repassword: true,
  });

  const dispatch = useDispatch();

  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 20,
  });

  const resetPassword = () => {
    if (password == '' || repassword == '') {
      setSuccess({
        ...success,
        password: password != '' ? true : false,
        repassword: repassword != '' ? true : false,
      });
    }
      else {
    // } else {
    //   // setLoading(true);
    //   // dispatch(resetPassword(password, callback => {
    //   //   console.log("response")
    //   //   // setLoading(false)
    //   //   // navigation.navigate('SignIn');
    //   //   // showAlertMessage(message)
    //   //   setTimeout(() => {
    //   //     setLoading(false);
    //   //     navigation.navigate('Walkthrough');
    //   //   }
    //   //     , 500);
    //   // }))
    // }

    setLoading(true);
      dispatch(changePassword(password
        , callback => {
        // console.log("response")
        // setLoading(false)
        // navigation.navigate('SignIn');
        // showAlertMessage(message)
        setTimeout(() => {
          setLoading(false);
          navigation.navigate('Walkthrough');
        }
          , 500);
      }))
      }
  }

  return (
    <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{ top: 'always' }}>
      <Header
        title={t('change_password')}
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
        style={{ flex: 1, justifyContent: 'center' }}
        keyboardVerticalOffset={offsetKeyboard}>
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
            padding: 20,
          }}>
          <View style={styles.contentTitle}>
            <Text headline semibold>
              {t('password')}
            </Text>
          </View>
          <TextInput
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
            placeholder="Password"
            value={password}
          />
          <View style={styles.contentTitle}>
            <Text headline semibold>
              {t('re_password')}
            </Text>
          </View>
          <TextInput
            onChangeText={text => setRepassword(text)}
            secureTextEntry={true}
            placeholder={t('password_confirm')}
            value={repassword}
          />
          <View style={{ paddingVertical: 15 }}>
            <Button
              loading={loading}
              full
              onPress={() => {resetPassword();}
              //   () => {
              //   setLoading(true);
              //   setTimeout(() => {
              //     // navigation.goBack();
              //     var user = auth().currentUser;
              //     console.log(user.uid, 'user')

              //     user.updatePassword(password)
              //       .then(() => {
              //         auth().signOut()
              //         // this.$router.replace('/setup')
              //         navigation.navigate('Walkthrough');
              //       }).catch(function (error) {
              //         console.log(error);
              //       });
              //   }, 500);
              // }
              }>
              {t('confirm')}
            </Button>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const mapStateToProps = state => {
  // console.log(state.auth.user)
  return {
    // user:state.auth.user
  };
}

export default connect(mapStateToProps)(ChangePassword)
