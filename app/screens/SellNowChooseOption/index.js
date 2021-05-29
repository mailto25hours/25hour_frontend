import React, { useState } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { BaseStyle, useTheme, BaseSetting, BaseColor } from '@config';
import { Header, SafeAreaView, TextInput, Icon, Text } from '@components';
import { ApplicationActions } from '@actions';
import styles from './styles';
import * as Utils from '@utils';

export default function SellNowChooseOption({ navigation, route }) {

  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { colors } = useTheme();
  const [loading, setLoading] = useState('');
  const [country, setCountry] = useState('');
  const [language, setLanguage] = useState(BaseSetting.languageSupport);
  const [optionSelected, setOptionSelected] = useState('');
  const [optionId, setOptionId] = useState('');
  const [text, settext] = useState('');
  const [dataSource, setdataSource] = useState('');
  const title = route.params.title;
  // console.log(title, "Nav title is")

  const optionList = route.params.paymentMethodsArray
  // console.log(optionList, "option list haru")

  const selectedFrom = route.params.selectedFrom
  // console.log(selectedFrom, "option dsd haru")

  const onSelectCategory = route.params.onSelectCategory
  // console.log(onSelectCategory, "onSelectCategory dsd haru")

  const onSelectedItemCondition = route.params.onSelectedItemCondition
  // console.log(onSelectedItemCondition, "onSelectCategory dsd haru")

  const onSelectedDeliveryOption = route.params.onSelectedDeliveryOption
  // console.log(onSelectedDeliveryOption, "onSelectCategory dsd haru")

  /**
   * @description Called when setting language is selected
   * @author Passion UI <passionui.com>
   * @date 2019-08-03
   * @param {string} select
   */
  const onChange = (select,id) => {
    // console.log(select, 'change vako data')
    setOptionId(id)
    setOptionSelected(select)
  };

  /**
   * Called when apply change language
   */
  const saveLanguage = () => {
    if (!loading) {
      setLoading(true);
      setTimeout(() => {
        if (selectedFrom === 'fromCategory') {
          onSelectCategory(optionSelected,optionId)
        } else if (selectedFrom === 'fromItemCondition') {
          onSelectedItemCondition(optionSelected)
        } else if (selectedFrom === 'fromDeliveryOption') {
          onSelectedDeliveryOption(optionSelected)
        }
        navigation.goBack();
      }, 500);
    }
  };

  const filterItems = text => {
    // setCountry(text);
    // if (text) {
    //   setLanguage(
    //     language.filter(item => Utils.languageFromCode(item).includes(text)),
    //   );
    // } else {
    //   setLanguage(BaseSetting.languageSupport);
    // }

    
      //passing the inserted text in textinput
      const newData = optionList.filter(function (item) {
          //applying filter for the inserted text in search bar
          const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      setdataSource(newData)
      settext(text)
      // console.log(newData, text)
  

  };

  return (
    <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{ top: 'always' }}>
      <Header
        title={title}//{t('change_language')}
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
        renderRight={() => {
          if (loading) {
            return <ActivityIndicator size="small" color={colors.primary} />;
          } else {
            return (
              <Text headline primaryColor numberOfLines={1}>
                {t('save')}
              </Text>
            );
          }
        }}
        onPressLeft={() => {
          navigation.goBack();
        }}
        onPressRight={saveLanguage}
      />
      <View style={styles.contain}>
        <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
          <TextInput
            onChangeText={text => filterItems(text)}
            placeholder='Search'
            value={text}
            icon={
              <TouchableOpacity onPress={() => settext('')}>
                <Icon name="times" size={16} color={BaseColor.grayColor} />
              </TouchableOpacity>
            }
          />
        </View>
        <FlatList
          contentContainerStyle={{ paddingHorizontal: 20 }}
          data={dataSource || optionList}
          keyExtractor={item => item.title}
          ListEmptyComponent={
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text body2 style={{textAlign: 'center'}}>
                {t('data_not_found')}
              </Text>
            </View>
          }
          renderItem={({ item }) => {
            const selected = item.title == optionSelected;

            return (
              <TouchableOpacity
                style={[styles.item, { borderBottomColor: colors.border }]}
                onPress={() => onChange(item.title,item.id)}>
                <Text
                  body1
                  style={
                    selected
                      ? {
                        color: colors.primary,
                      }
                      : {}
                  }>
                  {item.title}
                </Text>
                {selected && (
                  <Icon name="check" size={14} color={colors.primary} />
                )}
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}
