import React ,{useState,useCallback} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Image, Text, Icon, StarRating, Tag} from '@components';
import {BaseColor, useTheme} from '@config';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import {NumberOfLikesActions} from '@actions';

export default function PlaceItem(props) {
  const {t} = useTranslation();
  const [active , setActive]= useState(false)
  const {colors} = useTheme();
  
  const [err,setError] = useState('')
  const dispatch = useDispatch();
  const {
    grid,
    block,
    list,
    style,
    image,
    title,
    subtitle,
    location,
    phone,
    rate,
    status,
    rateStatus,
    numReviews,
    onPress,
    onPressTag,
    id
  } = props;
 
  /**
   * Display place item as block
   */


  const updateNumberOflikes= useCallback (async(number_of_likes,post_id)=>{
    // console.log("hello",number_of_likes,active)
      setError(null);
      setActive(true)
            try { 
            await dispatch(NumberOfLikesActions.onUpdateLikes(number_of_likes,post_id))

            }
            catch (err) {
            setError(err.message);
            }
    }, [number_of_likes]);

  const renderBlock = () => {
    return (
      <View style={style}>
        <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
          <Image source={image} style={styles.blockImage} />
          <Tag status style={styles.tagStatus}>
            {t(status)}
          </Tag>
          {!active?
          <Icon
            name="heart" regular
            color={BaseColor.whiteColor}
            size={24}
            style={styles.iconLike} onPress={()=>{updateNumberOflikes(number_of_likes,id)}}
          />:<Icon name="heart" color={BaseColor.whiteColor} solid size={24} style={styles.iconLike}/>}
          <View style={styles.blockContentRate}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Tag rate onPress={onPressTag}>
                {rate}
              </Tag>
              <View style={{marginLeft: 10}}>
                <Text caption1 whiteColor semibold style={{marginBottom: 5}}>
                  {t(rateStatus)}
                </Text>
                <StarRating
                  disabled={true}
                  starSize={10}
                  maxStars={5}
                  rating={rate}
                  selectedStar={rating => {}}
                  fullStarColor={BaseColor.yellowColor}
                />
              </View>
            </View>
            <Text caption1 semibold whiteColor style={{marginTop: 5}}>
              {numReviews} {t('reviews')}
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 15,
          }}>
          <Text headline semibold grayColor>
            {subtitle}
          </Text>
          <Text title2 semibold style={{marginTop: 4}}>
            {title}
          </Text>
          <View style={styles.blockLineMap}>
            <Icon name="map-marker-alt" color={colors.primaryLight} size={12} />
            <Text caption1 grayColor style={{paddingHorizontal: 4}}>
              {location}
            </Text>
          </View>
          <View style={styles.blockLinePhone}>
            <Icon name="phone" color={colors.primaryLight} size={12} />
            <Text caption1 grayColor style={{paddingHorizontal: 4}}>
              {phone}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  /**
   * Display place item as list
   */
  const renderList = () => {
    return (
      <View style={[styles.listContent, style]}>
        <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
          <Image source={image} style={styles.listImage} />
          <Tag status style={styles.listTagStatus}>
            {t(status)}
          </Tag>
        </TouchableOpacity>
        <View style={styles.listContentRight}>
          <Text headline semibold grayColor>
            {subtitle}
          </Text>
          <Text title2 semibold style={{marginTop: 5}}>
            {title}
          </Text>
          <View style={styles.lineRate}>
            <Tag onPress={onPressTag} rateSmall style={{marginRight: 5}}>
              {rate}
            </Tag>
            <StarRating
              disabled={true}
              starSize={10}
              maxStars={5}
              rating={rate}
              selectedStar={rating => {}}
              fullStarColor={BaseColor.yellowColor}
            />
          </View>
          <Text caption1 grayColor style={{marginTop: 10}}>
            {location}
          </Text>
          <Text caption1 grayColor style={{marginTop: 5}}>
            {phone}
          </Text>
          {!active?
          <Icon
            name="heart" regular
            color={BaseColor.whiteColor}
            size={24}
            style={styles.iconLike} onPress={()=>{updateNumberOflikes(number_of_likes,id)}}
          />:<Icon name="heart" color={BaseColor.whiteColor} solid size={24} style={styles.iconLike}/>}
        </View>
      </View>
    );
  };

  /**
   * Display place item as grid
   */
  const renderGrid = () => {
    return (
      <View style={[styles.girdContent, style]}>
        <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
          <Image source={image} style={styles.girdImage} />
          <Tag status style={styles.tagGirdStatus}>
            {t(status)}
          </Tag>
          {!active?
          <Icon
            name="heart" regular
            color={BaseColor.whiteColor}
            size={24}
            style={styles.iconLike} onPress={()=>{updateNumberOflikes(number_of_likes,id)}}
          />:<Icon name="heart" color={BaseColor.whiteColor} solid size={24} style={styles.iconLike}/>}
        </TouchableOpacity>
        <Text footnote semibold grayColor style={{marginTop: 5}}>
          {subtitle}
        </Text>
        <Text subhead semibold style={{marginTop: 5}}>
          {title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 5,
          }}>
          <Tag onPress={onPressTag} rateSmall style={{marginRight: 5}}>
            {rate}
          </Tag>
          <StarRating
            disabled={true}
            starSize={10}
            maxStars={5}
            rating={rate}
            selectedStar={rating => {}}
            fullStarColor={BaseColor.yellowColor}
          />
        </View>
        <Text caption2 grayColor style={{marginTop: 10}} numberOfLines={1}>
          {location}
        </Text>
      </View>
    );
  };

  if (grid) return renderGrid();
  else if (block) return renderBlock();
  else return renderList();
}

PlaceItem.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  image: PropTypes.node.isRequired,
  list: PropTypes.bool,
  block: PropTypes.bool,
  grid: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  location: PropTypes.string,
  phone: PropTypes.string,
  rate: PropTypes.number,
  status: PropTypes.string,
  rateStatus: PropTypes.string,
  numReviews: PropTypes.number,
  onPress: PropTypes.func,
  onPressTag: PropTypes.func,
};

PlaceItem.defaultProps = {
  style: {},
  image: '',
  list: true,
  block: false,
  grid: false,
  title: '',
  subtitle: '',
  location: '',
  phone: '',
  rate: 4.5,
  status: '',
  rateStatus: '',
  numReviews: 99,
  onPress: () => {},
  onPressTag: () => {},
};
