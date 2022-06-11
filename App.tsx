import React, { FC } from 'react';
import { PlatformColor, StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import '@i18n';
import MainNavigator from '@navigation';
import { commonStyles } from '@commons';
import { ThemeColor } from '@config';

const StatusBarComponent = () => {
  console.log(PlatformColor('@android:color/background'));
  const isDark = useColorScheme() === 'dark';
  return (
    <StatusBar
      backgroundColor={ThemeColor.TRANSPARENT}
      translucent
      barStyle={isDark ? 'light-content' : 'dark-content'}
    />
  );
};

/**
 * AppProps
 */
type AppProps = {};

/**
 * App
 */
const App: FC<AppProps> = () => {
  return (
    <SafeAreaProvider style={commonStyles.container}>
      <StatusBarComponent />
      <MainNavigator />
    </SafeAreaProvider>
  );
};

export default App;
