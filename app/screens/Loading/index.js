import React, { useEffect } from 'react';
import { ActivityIndicator, View, ImageBackground } from 'react-native';
import { Images, useTheme } from '@config';
import { Image, Text } from '@components';
import styles from './styles';
import image from '../../assets/images/ddd.gif'

export default function Loading({ navigation }) {
  const { colors } = useTheme();

  const onProcess = () => {
    setTimeout(() => {
      navigation.replace('Main');
    }, 500);
  };
  useEffect(() => {
    onProcess();
  }, []);

  return (
    <View style={styles.container}>

      <ImageBackground
        source={image} style={{
          width: '100%',
          height: '100%',
        }} >
        <View style={{
          position: 'absolute',
          top: 100,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor:'#00A8D5'
          // height:'60%'
        }}>
          <Image source={Images.logo} style={styles.logo} resizeMode="contain" />

          <Text title2 style={{ marginTop: 2, alignItems: 'center' }}>
            25 Hour
          </Text>


          <ActivityIndicator
            size="large"
            color={colors.text}
            style={{
              position: 'absolute',
              top: 260,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
