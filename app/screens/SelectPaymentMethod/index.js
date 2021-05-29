import React, {useState} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {BaseStyle, useTheme, BaseSetting, BaseColor} from '@config';
import {Header, SafeAreaView, TextInput, Icon, Text} from '@components';
import {ApplicationActions} from '@actions';
import styles from './styles';
import * as Utils from '@utils';

export default function SelectPaymentMethod({navigation, route}) {

    const title = route.params.title;
    // console.log(title, "Nav title is")

    // const received = route.params.onSelectPayment
    // console.log(received, "option list haru")
    const onSelectPayment = route.params.onSelectPayment
    // console.log(onSelectPayment, "option list haru")
 
  const dispatch = useDispatch();
  const {t, i18n} = useTranslation();
  const {colors} = useTheme();

  const [loading, setLoading] = useState('');
  const [country, setCountry] = useState('');

  const [optionSelected, setOptionSelected] = useState('');
  const [text, settext] = useState('');
  const [dataSource, setdataSource] = useState('');
  const paymentMethods = [
  {
    label: "Cash",
    value: "Cash",
  },
  {
    label: "Bank Tansfer",
    value: "Bank Transfer",
  }, 
  {
    label: "eSewa",
    value: 'eSewa',
  }, {
    label: "Khalti",
    value: 'Khalti',
  }
  ];

  /**
   * @description Called when setting language is selected
   * @author Passion UI <passionui.com>
   * @date 2019-08-03
   * @param {string} select
   */
  const onChange = select => {
    // console.log(select, 'change vako data')
    setOptionSelected(select)
  };

  /**
   * Called when apply change language
   */
  const savePaymentMethod = () => {
      // console.log(optionSelected, "selected")
    if (!loading) {
      setLoading(true);
      const oldOption = '';
      setTimeout(() => {
        setLoading(false);
        // navigation.navigate('SellNow', { selectedData: optionSelected , selectedOption: option});
        // route.params.selectedData = optionSelected
        // console.log(route.params.selectedData, 'heram')
        // navigation.goBack();

        // route.params.returnData(optionSelected, selectedOption);
        onSelectPayment(optionSelected)
        navigation.goBack();

        // navigation.goBack();
        // route.params.onSelect({ paymentOption: paymentSelected, category: categorySelected, itemCondition: itemconditionSelected});
        
      }, 500);
    }
  };

  const filterPaymentMethod = text => {
    // if (text) {
    //   setLanguage(
    //     language.filter(item => Utils.languageFromCode(item).includes(text)),
    //   );
    // } else {
    //   setLanguage(BaseSetting.languageSupport);
    // }
    const newData = paymentMethods.filter(function (item) {
      //applying filter for the inserted text in search bar
      const itemData = item.label ? item.label.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
  });
  setdataSource(newData)
  settext(text)
  };

 
  return (
    <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{top: 'always'}}>
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
        onPressRight={savePaymentMethod}
      />
      <View style={styles.contain}>
        <View style={{paddingHorizontal: 20, paddingVertical: 15}}>
          <TextInput
            onChangeText={text => filterPaymentMethod(text)}
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
          contentContainerStyle={{paddingHorizontal: 20}}
          data={dataSource || paymentMethods}
          keyExtractor={item => item.label}
          ListEmptyComponent={
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text body2 style={{textAlign: 'center'}}>
                {t('data_not_found')}
              </Text>
            </View>
          }
          renderItem={({item}) => {
            const selected = item.label == optionSelected;
            return (
              <TouchableOpacity
                style={[styles.item, {borderBottomColor: colors.border}]}
                onPress={() => onChange(item.label)}>
                <Text
                  body1
                  style={
                    selected
                      ? {
                          color: colors.primary,
                        }
                      : {}
                  }>
                  {item.label}
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
