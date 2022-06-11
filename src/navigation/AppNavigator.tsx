import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import NavigationService from './services';

import BottomTab from './BottomTabNavigator';
import TripDetails from '../screens/TripDetails';
import AppsList from '../screens/AppsList';
import Users from '../screens/Users';

const AppStack = createStackNavigator();

const AppNavigator: FC = () => {
  return (
    <AppStack.Navigator
      initialRouteName={NavigationService.ScreenNames.APPS_LIST}
      screenOptions={NavigationService.ScreenOptions.APP}>
      <AppStack.Screen
        options={NavigationService.ScreenOptions.BOTTOM_TABS}
        name={NavigationService.ScreenNames.BOTTOM_TABS}
        component={BottomTab}
      />
      <AppStack.Screen
        options={NavigationService.ScreenOptions.TRIP_DETAILS}
        name={NavigationService.ScreenNames.TRIP_DETAILS}
        component={TripDetails}
      />
      <AppStack.Screen
        options={NavigationService.ScreenOptions.APPS_LIST}
        name={NavigationService.ScreenNames.APPS_LIST}
        component={AppsList}
      />
      <AppStack.Screen
        options={NavigationService.ScreenOptions.FIREBASE_DEMO}
        name={NavigationService.ScreenNames.FIREBASE_DEMO}
        component={Users}
      />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
