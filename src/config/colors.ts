import { Platform, PlatformColor } from 'react-native';

export const ThemeColor = {
  PRIMARY: '#FF450F',
  DARK_TEXT: Platform.select({
    ios: PlatformColor('darkText'),
    default: '#fff', //PlatformColor('@android:color/darkText'),
  }) as any,
  LIGHT_TEXT: Platform.select({
    ios: PlatformColor('lightText'),
    default: '#ccc', // PlatformColor('@android:color/lightText'),
  }) as any,
  BACKGROUND: Platform.select({
    ios: PlatformColor('background'),
    android: PlatformColor('@android:color/background'),
  }) as any,
  LIGHT_BACKGROUND: Platform.select({
    ios: PlatformColor('lightBackground'),
    default: '#cccccc40', //PlatformColor('@android:color/lightBackground'),
  }) as any,
  TRANSPARENT: 'transparent',
};
