import React, { FC } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import commonStyles from './commonStyles';
import { P2 } from './Texts';
import { ThemeColor } from '@config';

/**
 * PillProps
 */
type PillProps = {
  style?: StyleProp<ViewStyle>;
  isActive?: boolean;
  backgroundType?: 'BACKGROUND' | 'LIGHT_BACKGROUND';
};

/**
 * Pill
 */
const Pill: FC<PillProps> = ({
  children,
  backgroundType = 'BACKGROUND',
  style,
  isActive,
}) => {
  return (
    <View
      style={[
        commonStyles.pill,
        { backgroundColor: ThemeColor[backgroundType] },
        isActive && commonStyles.primaryBackground,
        style,
      ]}>
      <P2
        style={[
          commonStyles.primaryText,
          commonStyles.regularText,
          isActive && commonStyles.whiteText,
        ]}>
        {children}
      </P2>
    </View>
  );
};

export default Pill;
