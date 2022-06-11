import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IconSize, reSize, Sizes, ThemeColor } from '@config';
import NavigationService from '../../navigation/services';
import ReHighlight from './ReHighlight';
import Icon from './Icon';
import { TabActions } from '@react-navigation/native';

/**
 * TabBarProps
 */
type TabBarProps = BottomTabBarProps;

const TABS = [
  {
    screen: NavigationService.ScreenNames.HOME,
    icon: 'home',
  },
  {
    screen: NavigationService.ScreenNames.FIND,
    icon: 'compas',
  },
  {
    screen: NavigationService.ScreenNames.BOOKMARKS,
    icon: 'bookmark',
  },
  {
    screen: NavigationService.ScreenNames.PROFILE,
    icon: 'profile',
  },
];

const ITEM_SIZE = Sizes.WIDTH / 4 - 2.5 * Sizes.DEFAULT_PADDING;

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: Sizes.DEFAULT_PADDING,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: reSize(10),
  },
  tab: {
    width: ITEM_SIZE,
    height: '100%',

    borderRadius: ITEM_SIZE / 2,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    overflow: 'hidden',
    alignItems: 'center',
    borderRadius: ITEM_SIZE / 2,
  },
  activeTab: {
    backgroundColor: ThemeColor.PRIMARY,
    shadowColor: ThemeColor.PRIMARY,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.36,
    shadowRadius: 7,

    elevation: 5,
  },
});

/**
 * TabBar
 */
const TabBar: FC<TabBarProps> = props => {
  const index = props.state.index;
  const { bottom = reSize(10) } = useSafeAreaInsets();

  console.log('bottom:', reSize(20));
  return (
    <View
      style={[
        styles.container,
        {
          height: (bottom || reSize(10)) + ITEM_SIZE + reSize(10),
          paddingBottom: bottom || reSize(10),
        },
      ]}>
      {TABS.map((tab, i) => (
        <View
          style={[styles.tab, index === i && styles.activeTab]}
          key={tab.screen}>
          <ReHighlight
            onPress={() => {
              NavigationService.dispatch(TabActions.jumpTo(tab.screen));
            }}
            style={styles.tabButton}>
            <Icon
              name={tab.icon}
              size={IconSize.BIG}
              color={index === i ? '#fff' : ThemeColor.LIGHT_TEXT}
            />
          </ReHighlight>
        </View>
      ))}
    </View>
  );
};

export default TabBar;
