import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { commonStyles, TabBar } from '@commons';
import NavigationService from './services';

import Home from '../screens/Home';
import { View } from 'react-native';

const OtherScreen = () => <View style={commonStyles.container} />;

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator: FC = () => {
  return (
    <BottomTab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={NavigationService.ScreenOptions.TAB_NAVIGATOR}
      initialRouteName={NavigationService.ScreenNames.HOME}>
      <BottomTab.Screen
        options={NavigationService.ScreenOptions.HOME}
        name={NavigationService.ScreenNames.HOME}
        component={Home}
      />
      <BottomTab.Screen
        name={NavigationService.ScreenNames.FIND}
        component={OtherScreen}
      />
      <BottomTab.Screen
        name={NavigationService.ScreenNames.BOOKMARKS}
        component={OtherScreen}
      />
      <BottomTab.Screen
        name={NavigationService.ScreenNames.PROFILE}
        component={OtherScreen}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
