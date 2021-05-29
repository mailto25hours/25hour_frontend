import React, {useState} from 'react';
import {RefreshControl, FlatList,View,Text} from 'react-native';
import {BaseStyle, useTheme} from '@config';
import {useTranslation} from 'react-i18next';
import {Header, SafeAreaView, Icon, ListThumbCircle} from '@components';
import styles from './styles';
import {NotificationData} from '@data';

import { ScrollView } from 'react-native-gesture-handler';


export default function Notification({navigation,route}) {
  const {t} = useTranslation();
  const {colors} = useTheme();

  const [refreshing] = useState(false);
  const [notification] = useState(NotificationData);





  return (
    <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{top: 'always'}}>
      <Header title={t('notification')}
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
      }} />
    <ScrollView >
      <>
                         
      <FlatList
        contentContainerStyle={{paddingHorizontal: 20, paddingVertical: 10}}
        ListEmptyComponent={
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text body2 style={{textAlign: 'center'}}>
              {t('data_not_found')}
            </Text>
          </View>
        }
        refreshControl={
          <RefreshControl
            colors={[colors.primary]}
            tintColor={colors.primary}
            refreshing={refreshing}
            onRefresh={() => {}}
          />
        }
        data={notification}
        keyExtractor={(item, index) => item.id}
        renderItem={({item, index}) => (
          <ListThumbCircle
            // image={item.image}
            // txtLeftTitle={item.payload.notification.body}
            // txtContent={item.payload.notification.title}
            txtRight={new Date().toDateString()}
            style={{marginBottom: 5}}
          />
        )}
      />
       <FlatList
      contentContainerStyle={{paddingHorizontal: 20, paddingVertical: 10}}
      ListEmptyComponent={
        <View
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text body2 style={{textAlign: 'center'}}>
            {t('data_not_found')}
          </Text>
        </View>
      }
      refreshControl={
        <RefreshControl
          colors={[colors.primary]}
          tintColor={colors.primary}
          refreshing={refreshing}
          onRefresh={() => {}}
        />
      }
      data={notification}
      keyExtractor={(item, index) => item.id}
      renderItem={({item, index}) => (
        <ListThumbCircle
          image={item.image}
          txtLeftTitle={item.title}
          txtContent={item.description}
          txtRight={item.date}
          style={{marginBottom: 5}}
        />
      )}
    />
</>
      </ScrollView>
    </SafeAreaView>
  );
}
