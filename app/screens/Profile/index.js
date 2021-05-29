import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { BaseStyle, useTheme } from '@config';
import { Images } from '../../config/images';
import {
  Header,
  SafeAreaView,
  Icon,
  Text,
  Button,
  ProfileDetail,
  ProfilePerformance,
} from '@components';
import styles from './styles';

import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { UserActions } from '../../actions';


function Profile(props) {
  const { user } = props;
  const { colors } = useTheme();
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin);
  const { load, userInfo } = userLogin;



  const onLogOut = () => {
    setLoading(true);
    dispatch(UserActions.logout(false, response => { }));
    setTimeout(() => {
      setLoading(false);
      props.navigation.navigate('Walkthrough')
    }, 500);
    // dispatch(logoutUser());
  };

  // console.log("id",useG)
  return (
    <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{ top: 'always' }}>
      <Header title={t('profile')} />
      <ScrollView>
        <View style={styles.contain}>
          <ProfileDetail
            // image={userData.image == null?Images.user:{uri:userData.image}}
            textFirst={userInfo}
          // point={userData.point}
          // textSecond={userAddress}
          // textThird={userData.id}
          // onPress={() => props.navigation.navigate('ProfileGroup')}
          />
          <ProfilePerformance
            // data={userData.performance}
            style={{ marginTop: 20, marginBottom: 20 }}
          />
          <TouchableOpacity
            style={[
              styles.profileItem,
              { borderBottomColor: colors.border, borderBottomWidth: 1 },
            ]}
            onPress={() => {
              props.navigation.navigate('ProfileEdit');
            }}>
            <Text body1>{t('edit_profile')}</Text>
            <Icon
              name="angle-right"
              size={18}
              color={colors.primary}
              style={{ marginLeft: 5 }}
              enableRTL={true}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.profileItem,
              { borderBottomColor: colors.border, borderBottomWidth: 1 },
            ]}
            onPress={() => {
              props.navigation.navigate('ChangePassword');
            }}>
            <Text body1>{t('change_password')}</Text>
            <Icon
              name="angle-right"
              size={18}
              color={colors.primary}
              style={{ marginLeft: 5 }}
              enableRTL={true}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.profileItem,
              { borderBottomColor: colors.border, borderBottomWidth: 1 },
            ]}
            onPress={() => props.navigation.navigate('ContactUs')}>
            <Text body1>{t('contact_us')}</Text>
            <Icon
              name="angle-right"
              size={18}
              color={colors.primary}
              style={{ marginLeft: 5 }}
              enableRTL={true}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.profileItem,
              { borderBottomColor: colors.border, borderBottomWidth: 1 },
            ]}
            onPress={() => {
              props.navigation.navigate('AboutUs');
            }}>
            <Text body1>{t('about_us')}</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon
                name="angle-right"
                size={18}
                color={colors.primary}
                style={{ marginLeft: 5 }}
                enableRTL={true}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity

            style={[styles.profileItem, { borderBottomColor: colors.border, borderBottomWidth: 1 }]}
            onPress={() => {
              props.navigation.navigate('Setting');
            }}>
            <Text body1>{t('setting')}</Text>

            <Icon
              name="angle-right"
              size={18}
              color={colors.primary}
              style={{ marginLeft: 5 }}
              enableRTL={true}
            />
          </TouchableOpacity>


        </View>
      </ScrollView>
      <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
        <Button full loading={loading} onPress={() => {
          onLogOut();
        }}>
          {t('sign_out')}
        </Button>
      </View>
    </SafeAreaView>
  );
}

const mapStateToProps = state => {
  // console.log(state.auth.user, 'user')
  return {


  };
}



export default connect(mapStateToProps)(Profile)

