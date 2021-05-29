import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer'

import { BaseColor, useTheme, useFont } from '@config';
import { useTranslation } from 'react-i18next';
import { Icon } from '@components';


/* Bottom Screen */
import Home from '@screens/Home';
import Notification from '@screens/Notification';
import Wishlist from '@screens/Wishlist';
import Profile from '@screens/Profile';

/* Stack Screen */
import ThemeSetting from '@screens/ThemeSetting';
import Setting from '@screens/Setting';

import SignUp from '@screens/SignUp';
import SignIn from '@screens/SignIn';
import Review from '@screens/Review';
import Feedback from '@screens/Feedback';

import Walkthrough from '@screens/Walkthrough';
import ResetPassword from '@screens/ResetPassword';
import ChangePassword from '@screens/ChangePassword';
import ProfileEdit from '@screens/ProfileEdit';
import ChangeLanguage from '@screens/ChangeLanguage';
import ContactUs from '@screens/ContactUs';
import AboutUs from '@screens/AboutUs';
import CampaignDetail from '@screens/CampaignDetail'
import { useSelector } from 'react-redux';
import Influencer from '@screens/Influencer'

const MainStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Main() {
  return (
    <MainStack.Navigator
      headerMode="none"
      initialRouteName="BottomTabNavigator">
      <MainStack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
      />
      <MainStack.Screen name="ThemeSetting" component={ThemeSetting} />
      <MainStack.Screen name="Setting" component={Setting} />


      <MainStack.Screen name="Walkthrough" component={Walkthrough} />
      <MainStack.Screen name="SignUp" component={SignUp} />
      <MainStack.Screen name="SignIn" component={SignIn} />
      <MainStack.Screen name="Review" component={Review} />
      <MainStack.Screen name="Feedback" component={Feedback} />
      <MainStack.Screen name="Notification" component={Notification} />
      <MainStack.Screen name="ResetPassword" component={ResetPassword} />
      <MainStack.Screen name="ChangePassword" component={ChangePassword} />
      <MainStack.Screen name="ProfileEdit" component={ProfileEdit} />
      <MainStack.Screen name="ChangeLanguage" component={ChangeLanguage} />
      <MainStack.Screen name="CampaignDetail" component={CampaignDetail} />
      <MainStack.Screen name="ContactUs" component={ContactUs} />
      <MainStack.Screen name="AboutUs" component={AboutUs} />
      <MainStack.Screen name="Influencer" component={Influencer} />



    </MainStack.Navigator>
  );
}

function BottomTabNavigator(props) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const font = useFont();
  const auth = useSelector(state => state.userLogin.loading);
  const login = auth;
  console.log(auth, 'login status')

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      headerMode="none"
      tabBarOptions={{
        showIcon: true,
        showLabel: true,
        activeTintColor: colors.primary,
        inactiveTintColor: BaseColor.grayColor,
        style: { borderTopWidth: 1 },
        labelStyle: {
          fontSize: 12,
          fontFamily: font,
        },
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          title: t('home'),
          tabBarIcon: ({ color }) => {
            return <Icon color={color} name="home" size={20} solid />;
          },
        }}
      />
      <BottomTab.Screen
        name="Explore"
        component={Influencer}
        options={{
          title: t('explore'),
          tabBarIcon: ({ color }) => {
            return <Icon color={color} name="bookmark" size={20} solid />;
          },
        }}
      />
      <BottomTab.Screen
        name="Campaign"
        component={Home}
        options={{
          title: t('compaign'),
          tabBarIcon: ({ color }) => {
            return <Icon color={color} name="plus-circle" size={20} solid />;
          },
        }}
      />



      <BottomTab.Screen
        name="Merch"
        component={Wishlist}
        options={{
          title: t('Merch'),
          tabBarIcon: ({ color }) => {
            return <Icon color={color} name="calendar-plus" size={20} solid />;
          },
        }}
      />

      <BottomTab.Screen
        name="Profile"
        component={!login ? Profile : Walkthrough}
        options={{
          title: t('account'),
          tabBarIcon: ({ color }) => {
            return <Icon solid color={color} name="user-circle" size={20} />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
}


export default function AppDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Main" headerMode="none">
      <Drawer.Screen
        name="Home"
        component={Main}
      />
    </Drawer.Navigator>
  );
}