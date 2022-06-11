import React, { FC, memo } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { reSize, ThemeColor, useHeaderHeight } from '@config';
import Icon from './Icon';
import ReHighlight from './ReHighlight';
import { NavigationService } from '@navigation';

/**
 * HeaderLeftProps
 */
type HeaderLeftProps = {
  isMenuIcon?: boolean;
  onPress?: () => void;
  icon?: string;
  style?: StyleProp<ViewStyle>;
  color?: string;
};

/**
 * HeaderLeft
 */
const HeaderLeft: FC<HeaderLeftProps> = props => {
  const { isMenuIcon, icon, onPress, style, color } = props;
  const { header } = useHeaderHeight();
  return NavigationService.canGoBack() ? (
    <ReHighlight
      {...{ onPress }}
      borderRadius={reSize(40)}
      style={[styles.container, { height: '100%', width: header }, style]}>
      <Icon
        name={isMenuIcon ? 'menu' : icon || 'arrow-left'}
        size={reSize(26)}
        color={
          isMenuIcon ? ThemeColor.DARK_TEXT : color || ThemeColor.LIGHT_TEXT
        }
      />
    </ReHighlight>
  ) : (
    <View />
  );
};

export default memo(
  HeaderLeft,
  (prevProps, nextProps) =>
    prevProps.isMenuIcon === nextProps.isMenuIcon &&
    prevProps.icon === nextProps.icon &&
    prevProps.color === nextProps.color,
);

const styles = StyleSheet.create({
  container: {
    borderRadius: reSize(40),
    backgroundColor: ThemeColor.BACKGROUND,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
