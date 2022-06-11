import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ThemeColor } from '@config';
import NavigationService from './services';
import AppNavigator from './AppNavigator';
import { NavigationContainer } from '@react-navigation/native';

const MainStack = createStackNavigator();

const MainNavigator: FC = () => {
  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <MainStack.Navigator
        initialRouteName={NavigationService.ScreenNames.App}
        screenOptions={NavigationService.ScreenOptions.MAIN}>
        <MainStack.Screen
          name={NavigationService.ScreenNames.App}
          component={AppNavigator}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
