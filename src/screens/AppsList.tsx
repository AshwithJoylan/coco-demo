import { commonStyles, I18nText, ReHighlight } from '@commons';
import { Sizes, ThemeColor } from '@config';
import { I18nTextTranslations } from '@i18n';
import { NavigationService } from '@navigation';
import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';

/**
 * AppsListProps
 */
type AppsListProps = {};

const Item: FC<{ text: I18nTextTranslations; screen: string }> = ({
  text,
  screen,
}) => {
  return (
    <ReHighlight
      borderRadius={0}
      onPress={() => NavigationService.navigate(screen)}
      style={{
        alignSelf: 'stretch',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: ThemeColor.LIGHT_TEXT,
        paddingVertical: Sizes.DEFAULT_PADDING,
        paddingHorizontal: Sizes.DEFAULT_PADDING,
      }}>
      <I18nText {...{ text }} />
    </ReHighlight>
  );
};

/**
 * AppsList
 */
const AppsList: FC<AppsListProps> = () => {
  return (
    <View style={commonStyles.container}>
      <Item
        text="text.firebaseDemo"
        screen={NavigationService.ScreenNames.FIREBASE_DEMO}
      />
      <Item
        text="text.uiDemo"
        screen={NavigationService.ScreenNames.BOTTOM_TABS}
      />
    </View>
  );
};

export default AppsList;
