import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Animated,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  RefreshControl,

} from "react-native";
import { Image, Text, Icon, Card, SafeAreaView, CardList, Header, Button } from "@components";
import { BaseStyle, BaseColor, useTheme } from "@config";
import * as Utils from "@utils";
import styles from "./styles";
import Swiper from "react-native-swiper";
import Entypo from 'react-native-vector-icons/Entypo'
import { HomePopularData, HomeListData, HomeBannerData } from "@data";
import { useTranslation } from "react-i18next";


import { Images } from '../../config/images';





export default function Home({ navigation }) {
  const deltaY = new Animated.Value(0);
  const { colors } = useTheme();
  const { t } = useTranslation();
  const [banner] = useState(HomeBannerData);



  const [heightHeader, setHeightHeader] = useState(Utils.heightHeader());
  const heightImageBanner = Utils.scaleWithPixel(150);
  const marginTopBanner = heightImageBanner - heightHeader + 10;
  const [refreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(true)



  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);


  return (
    <View style={{ flex: 1 }}>

      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: "always" }}>
        <Header
          title={<Text style={[styles.subTitle, { color: colors.primary }]}>
            <Image source={Images.logo} style={styles.logo} resizeMode="center" />
          </Text>}
          renderLeft={() => {
            return (
              <Entypo
                name="menu"
                size={20}
                color={colors.primary}
                enableRTL={true}
              />
            );
          }}
          onPressLeft={() => {
            navigation.openDrawer();
          }}
          renderRight={() => {
            return (
              <Entypo
                name="bell"
                size={20}
                color={colors.primary}
                enableRTL={true}
              />
            )
          }}
          onPressRight={() => { navigation.navigate("Notification") }}
        />

        <View
          style={[
            styles.searchForm,
            {
              backgroundColor: colors.background,
              borderColor: colors.border,
              shadowColor: colors.border
            },
            { marginTop: 20 }
            //it was {marginTop: marginTopBanner}
          ]} >
          <TouchableOpacity
          // onPress={() => navigation.navigate("SearchHistory")}
          >
            <View
              style={[BaseStyle.textInput, { backgroundColor: colors.card }]} >
              <Text body1 grayColor style={{ flex: 1 }}>
                {t("search_location")}
              </Text>
              <View style={{ paddingVertical: 8 }}>
                <View
                  style={[
                    styles.lineForm,
                    { backgroundColor: colors.border }
                  ]}
                />
              </View>
              <Icon
                name="location-arrow"
                size={18}
                color={colors.primaryLight}
                solid
              />
            </View>
          </TouchableOpacity>
        </View>


        <TouchableOpacity onPress={() => { console.log() }}>
          <Animated.View
            style={[
              styles.imageBackground,
              {
                height: deltaY.interpolate({
                  inputRange: [
                    0,
                    Utils.scaleWithPixel(100),
                    Utils.scaleWithPixel(100)
                  ],
                  outputRange: [heightImageBanner, heightHeader, 0]
                })
              }
            ]}
          >
            <Swiper
              onPress={() => { console.log("calender pressed") }}
              dotStyle={{
                backgroundColor: colors.text
              }}
              activeDotColor={colors.primary}
              paginationStyle={styles.contentPage}
              removeClippedSubviews={false}
              autoplay={true}
              autoplayTimeout={2}
            >
              {banner.map((item, index) => {
                return (
                  <Image key={item.id} source={item.image} style={{ flex: 1 }} />
                );
              })}
            </Swiper>
          </Animated.View>
        </TouchableOpacity>
      </SafeAreaView>

      <ScrollView
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: { y: deltaY }
            }
          }
        ])}
        onContentSizeChange={() => {
          setHeightHeader(Utils.heightHeader());
        }}
        scrollEventThrottle={8}>

        {isLoading ? <ActivityIndicator size="small" color={colors.primary} /> : <>
        </>}


        <View  >
          <Text title3 semibold style={{ marginTop: 80 }}>
            {t("Paid Post")}
          </Text>


          <FlatList
            contentContainerStyle={{ paddingLeft: 5, paddingRight: 15, marginTop: 0 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={HomePopularData}
            keyExtractor={(item, index) => item.id}
            ListEmptyComponent={
              <View
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text body2 style={{ textAlign: 'center' }}>
                  {t('data_not_found')}
                </Text>
              </View>
            }
            renderItem={({ item, index }) => (
              <Card
                style={[styles.popularItem, { marginLeft: 15 }]}
                image={item.image}
                onPress={() => navigation.navigate('CampaignDetail')}
              >
                <Text headline whiteColor semibold>
                  {item.title}
                </Text>
              </Card>
            )}
          />
        </View>
     
       
      </ScrollView>





    </View>
  );
}
