import React from 'react';
import {
  NavigationAction,
  createNavigationContainerRef,
  NavigationState,
  StackActions,
  ParamListBase,
} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  StackNavigationOptions,
  TransitionSpecs,
} from '@react-navigation/stack';
import { Font, reSize, Sizes, ThemeColor } from '@config';
import { HeaderLeft, ProfileAvatar, ReHighlight } from '@commons';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

const navigationRef = createNavigationContainerRef();

/**
 * Navigate to a route in current navigation tree.
 * @param name — Name of the route to navigate to.
 * @param params — Params object for the route.
 */
const navigate = (routeName: string, params?: object) => {
  if (navigationRef.isReady()) {
    navigationRef.current?.navigate(routeName as never, params as never);
  }
};

const canGoBack = () => navigationRef.current?.canGoBack();

/**
 * Go back to the previous route in history
 */
const goBack = () => {
  if (navigationRef.isReady() && navigationRef.current?.canGoBack()) {
    navigationRef.current?.goBack();
  }
};

/**
 * replace
 */
const replace = (name: string, params?: object) => {
  if (navigationRef.isReady()) {
    navigationRef.current?.dispatch(StackActions.replace(name, params));
  }
};

/**
 * Dispatch an action or an update function to the router.
 * The update function will receive the current state,
 *
 * @param action Action object or update function.
 */
const dispatch = (
  action: NavigationAction | ((state: NavigationState) => NavigationAction),
) => {
  if (navigationRef.isReady()) {
    navigationRef.current?.dispatch(action);
  }
};

/**
 * Update the param object for the route.
 * The new params will be shallow merged with the old one.
 *
 * @param params Params object for the current route.
 */
const setParams = (params: Partial<ParamListBase[any]>) => {
  if (navigationRef.isReady()) {
    navigationRef.current?.setParams(params as never);
  }
};

const push = (screen: any, params: any) => {
  if (navigationRef.isReady()) {
    navigationRef.current?.dispatch(StackActions.push(screen, params));
  }
};

const ScreenNames = {
  Auth: 'Auth',
  App: 'App',
  HOME: 'Home',
  FIND: 'Find',
  BOOKMARKS: 'Bookmarks',
  PROFILE: 'Profile',
  BOTTOM_TABS: 'Tab',
  TRIP_DETAILS: 'TripDetails',
  APPS_LIST: 'AppList',
  FIREBASE_DEMO: 'FirebaseDemo',
};

const ScreenOptions = {
  APP: {
    headerMode: 'float',
    ...TransitionSpecs.TransitionIOSSpec,
    headerTitleStyle: {
      ...Font.HEADER,
    },

    headerBackgroundContainerStyle: {
      backgroundColor: ThemeColor.BACKGROUND,
    },
    headerRightContainerStyle: { paddingRight: Sizes.DEFAULT_PADDING },
    headerLeftContainerStyle: { paddingLeft: Sizes.DEFAULT_PADDING },
    headerStyle: {
      backgroundColor: ThemeColor.BACKGROUND,
    },
    cardStyle: {
      backgroundColor: ThemeColor.BACKGROUND,
    },
    headerShadowVisible: false,
    headerTintColor: ThemeColor.DARK_TEXT,
    headerLeft: () => <HeaderLeft onPress={NavigationService.goBack} />,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerTitleAlign: 'center',
  } as StackNavigationOptions,
  MAIN: {
    cardStyle: { backgroundColor: ThemeColor.BACKGROUND },
    headerShown: false,
    headerTitleAlign: 'center',
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  } as StackNavigationOptions,
  HOME: {
    headerTitle: 'TOURX',
    headerTintColor: ThemeColor.PRIMARY,
    headerLeftContainerStyle: {
      paddingLeft: reSize(8),
    },
    headerLeft: () => <HeaderLeft isMenuIcon />,
    headerRight: () => <ProfileAvatar />,
    headerTitleAlign: 'center',
  } as BottomTabNavigationOptions,
  BOTTOM_TABS: {
    headerShown: false,
  },
  TAB_NAVIGATOR: {
    headerTitleStyle: {
      ...Font.HEADER,
    },
    headerTitleAlign: 'center',
    headerBackgroundContainerStyle: {
      backgroundColor: ThemeColor.BACKGROUND,
    },
    headerRightContainerStyle: { paddingRight: Sizes.DEFAULT_PADDING },
    headerLeftContainerStyle: { paddingLeft: Sizes.DEFAULT_PADDING },
    headerStyle: {
      backgroundColor: ThemeColor.BACKGROUND,
    },
    tabBarStyle: {
      backgroundColor: ThemeColor.BACKGROUND,
      borderTopWidth: 0,
    },
    tabBarButton: props => (
      <ReHighlight {...(props as any)}>{props.children}</ReHighlight>
    ),
    tabBarInactiveTintColor: ThemeColor.LIGHT_TEXT,
    tabBarActiveTintColor: '#fff',
    tabBarShowLabel: false,

    tabBarActiveBackgroundColor: ThemeColor.PRIMARY,
    cardStyle: {
      backgroundColor: ThemeColor.BACKGROUND,
    },
    headerShadowVisible: false,
    headerTintColor: ThemeColor.DARK_TEXT,
  } as BottomTabNavigationOptions,
  TRIP_DETAILS: {
    title: 'Trip Details',
    headerTransparent: true,
    headerStyle: {
      backgroundColor: ThemeColor.TRANSPARENT,
    },
    headerRight: () => <HeaderLeft icon="bookmark" />,
    headerTitleStyle: { fontWeight: '600' },
    headerBackgroundContainerStyle: {
      backgroundColor: ThemeColor.TRANSPARENT,
    },
  } as StackNavigationOptions,
  APPS_LIST: {
    title: 'Apps List',
  } as StackNavigationOptions,
  FIREBASE_DEMO: {
    title: 'FIREBASE DEMO',
  } as StackNavigationOptions,
};
const NavigationService = {
  ScreenNames,
  goBack,
  navigate,
  canGoBack,
  replace,
  push,
  dispatch,
  setParams,
  navigationRef,
  ScreenOptions,
};

export default NavigationService;
