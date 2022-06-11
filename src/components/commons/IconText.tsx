import { IconSize, reSize, ThemeColor } from '@config';
import React, { FC } from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import commonStyles from './commonStyles';
import Icon from './Icon';
import { P1 } from './Texts';

/**
 * IconTextProps
 */
type IconTextProps = {
  icon: string;
  text: string | number;
} & ViewProps;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: reSize(10),
  },
});

/**
 * IconText
 */
const IconText: FC<IconTextProps> = ({ style, icon, text, ...rest }) => {
  return (
    <View {...rest} style={[styles.container, style]}>
      <Icon size={IconSize.MEDIUM} name={icon} color={ThemeColor.PRIMARY} />
      <P1 style={[styles.text, commonStyles.lightText]}>{text}</P1>
    </View>
  );
};

export default IconText;
