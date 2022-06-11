import { Sizes, ThemeColor } from '@config';
import { I18nTextTranslations } from '@i18n';
import React, { FC } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import commonStyles from './commonStyles';
import I18nText from './I18nText';
import ReHighlight from './ReHighlight';

type PrimaryButtonProps = {
  style?: StyleProp<ViewStyle>;
  title?: I18nTextTranslations;
  borderRadius?: number;
};

const styles = StyleSheet.create({
  container: {
    borderRadius: Sizes.BORDER_RADIUS,
    backgroundColor: ThemeColor.PRIMARY,
    shadowColor: ThemeColor.PRIMARY,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 7,

    elevation: 5,
  },
});

export const PrimaryButton: FC<PrimaryButtonProps> = ({
  style,
  title,
  children,
  borderRadius,
}) => {
  return (
    <ReHighlight {...{ borderRadius }} style={[styles.container, style]}>
      {!!title ? (
        <I18nText text={title} style={commonStyles.whiteText} />
      ) : (
        children
      )}
    </ReHighlight>
  );
};
