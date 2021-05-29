import React from "react";
import { TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { BaseColor, useTheme } from "@config";
import PropTypes from "prop-types";
import { Text, Icon } from "@components";
import styles from "./styles";
import { Image } from "react-native";
import { Images } from "../../config/images";

export default function SocialButton(props) {
  const { colors } = useTheme();
  const {
    style,
    styleText,
    icon,
    outline,
    full,
    round,
    loading,
    children,
    ...rest
  } = props;

  return (
    <TouchableOpacity
      {...rest}
      style={StyleSheet.flatten([
        [styles.default, { backgroundColor: colors.primary }],
        outline && [
          styles.outline,
          { backgroundColor: colors.card, borderColor: colors.primary}
        ],
        full && styles.full,
        round && styles.round,
        style
      ])}
      activeOpacity={0.9}
    >
      {/* {icon ? <Icon
      style = {{padding: 15, width:60, alignItems: 'center'}}
              name={Images.fblogo}
              size={20}
              color={BaseColor.whiteColor}
              solid
            /> : null} */}

{icon ? <Image source={icon} style={{ height: 40, width: 40, margin: 15}} />: null}
      <Text
        style={StyleSheet.flatten([
          styles.textDefault,
          outline && { color: colors.primary, flex:1 },
          styleText
        ])}
        numberOfLines={2}
      >
        {children || "Button"}
      </Text>
      {loading ? (
        <ActivityIndicator
          size="small"
          color={outline ? colors.primary : BaseColor.whiteColor}
          style={{ paddingLeft: 5 }}
        />
      ) : null}
    </TouchableOpacity>
  );
}

SocialButton.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  icon: PropTypes.Image,
  outline: PropTypes.bool,
  full: PropTypes.bool,
  round: PropTypes.bool,
  loading: PropTypes.bool
};

SocialButton.defaultProps = {
  style: {},
  icon: null,
  outline: false,
  full: false,
  round: false,
  loading: false
};
