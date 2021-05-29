import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserActions } from '@actions';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView, Text, Button, Image } from '@components';
import styles from './styles';
import Swiper from 'react-native-swiper';
import { BaseColor, BaseStyle, Images, useTheme } from '@config';
import * as Utils from '@utils';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';



import { useSelector } from 'react-redux';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";
GoogleSignin.configure({
  webClientId: "149129702884-sd2l242p77b0dblas8g6862oqf8d9327.apps.googleusercontent.com",
  offlineAccess: true,
});
 function Walkthrough({ navigation }) {

  const [loading, setLoading] = useState(false);
  const [isloading, setisLoading] = useState(false);
  const [floading, setisfLoading] = useState(false);
  const [aloading, setisaLoading] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [slide] = useState([
    { key: 1, image: Images.trip2 },
    { key: 2, image: Images.trip1 },
    { key: 3, image: Images.trip3 },
    { key: 4, image: Images.trip4 },
  ]);
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  // const messages = useSelector(state => state.auth.error);
  // console.log(messages)

  const showAlertMessage = (message) => {
    showMessage({
      message: message,
      description: "",
      type: "success",
    })
  }

 const authenticationGoogle = async () => {
    // setLoading(true);
    // dispatch(AuthActions.authentication(true, response => {}));
    setisLoading(true);
    // dispatch(googleUser(callback => {
    //   // console.log(messages, "message")
    //   showAlertMessage(messages)
    //   // console.log('google logged in')
    //   setTimeout(() => {
    //     setisLoading(false);
    //     navigation.navigate('Profile')
    //   }
    //     , 500);
    // }))
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const { idToken } = userInfo;

      dispatch(UserActions.googleLogin(idToken));
      setTimeout(() => {
        setisLoading(false);
        navigation.navigate('Profile')
      }, 500)
    } catch (error) {
      console.log(error);
    }
  };

  const authenticationFacebook = () => {
    // console.log('fb')
    setisfLoading(true);
    dispatch(facebookUser(callback => {
      // console.log('fb fb')
      console.log('facebook logged in')
      setTimeout(() => {
        setisfLoading(false);
        navigation.navigate('Profile')
      }
        , 500);
    }))
  };

  const authenticationApple = () => {
    console.log('fb')
    setisaLoading(true);
    dispatch(appleUser(callback => {
      console.log('apple')

      setTimeout(() => {
        setisaLoading(false);
        navigation.navigate('Profile')
      }
        , 500);
    }))
  };

  return (
    <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{ top: 'always' }}>
      <ScrollView
        contentContainerStyle={styles.contain}
        scrollEnabled={scrollEnabled}
        onContentSizeChange={(contentWidth, contentHeight) =>
          setScrollEnabled(Utils.scrollEnabled(contentWidth, contentHeight))
        }>
        <View style={styles.wrapper}>
          {/* Images Swiper */}
          <Swiper
            dotStyle={{
              backgroundColor: BaseColor.dividerColor,
            }}
            activeDotColor={colors.primary}
            paginationStyle={styles.contentPage}
            removeClippedSubviews={false}>
            {slide.map((item, index) => {
              return (
                <View style={styles.slide} key={item.key}>
                  <Image source={item.image} style={styles.img} />
                  <Text body1 style={styles.textSlide}>
                    {t('Hour_tag_line')}
                  </Text>
                </View>
              );
            })}
          </Swiper>
        </View>
        <View style={{ width: '100%' }}>
          <Button
            full
            loading={aloading}
            style={{
              backgroundColor: BaseColor.grayColor,
              marginTop: 20,
            }}
            // onPress={() => {
            //   // authentication();

            // }}>
            onPress={() => authenticationApple()}>
            {/* // onPress={() => authenticationFacebook().then(() => console.log('Signed in with Facebook!'))}> */}
            {t('login_apple')}
          </Button>
          <Button
            full
            loading={floading}
            style={{
              backgroundColor: BaseColor.navyBlue,
              marginTop: 20,
            }}
            // onPress={() => {
            //   // authentication();

            // }}>
            onPress={() => authenticationFacebook()}>
            {/* // onPress={() => authenticationFacebook().then(() => console.log('Signed in with Facebook!'))}> */}
            {t('login_facebook')}
          </Button>

          <Button
            full
            loading={isloading}
            style={{
              backgroundColor: BaseColor.grayColor,
              marginTop: 20,
            }}
            // onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}>
            onPress={() => authenticationGoogle()}>
            {t('login_google')}

          </Button>
          <Button
            full
            style={{ marginTop: 20 }}
            loading={loading}
            onPress={() => navigation.navigate('SignIn')}>
            {t('sign_in')}
          </Button>
          <View style={styles.contentActionBottom}>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text body1 grayColor>
                {t('not_have_account')}
              </Text>
            </TouchableOpacity>

            {/* <TouchableOpacity onPress={() => authentication()}>
              <Text body1 primaryColor>
                {t('join_now')}
              </Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const mapStateToProps = state => {
  // console.log(state.auth.user)
  return {
    // error:state.auth.error
  };
}

export default connect(mapStateToProps)(Walkthrough)

