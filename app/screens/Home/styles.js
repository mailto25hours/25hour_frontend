import {StyleSheet} from 'react-native';
import * as Utils from '@utils';

export default StyleSheet.create({
  imageBackground: {
    // height: "15%",
    width: '100%',
    position: 'absolute',
    backgroundColor:"white"
  },
  container: {
    backgroundColor: "white",
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginHorizontal: 15
}, 
title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginLeft: 10,
},
subTitle: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    marginLeft: 10,
},
  contentPage: {
    bottom: 50,
  },
  searchForm: {
    marginHorizontal: 15,
    padding: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    shadowOffset: {width: 1.5, height: 1.5},
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 1,
  },
  lineForm: {
    width: 1,
    height: '100%',
    margin: 10,
  },
  serviceItem: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 15,
  },
  serviceCircleIcon: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    marginBottom: 5,
  },
  contentPopular: {
    // marginHorizontal: 10,
    // marginBottom: 15,
  },
  promotionBanner: {
    height: Utils.scaleWithPixel(100),
    width: '100%',
    marginTop: 10,
  },
  popularItem: {
    width: Utils.scaleWithPixel(135),
    height: Utils.scaleWithPixel(160),
  },
  logo: {
    width: 60,
    height: 50
  }
});
