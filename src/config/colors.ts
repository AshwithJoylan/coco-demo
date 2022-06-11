import { Platform, PlatformColor } from 'react-native';

export const ThemeColor = {
  PRIMARY: '#FF450F',
  DARK_TEXT: Platform.select({
    ios: PlatformColor('darkText'),
    android: PlatformColor('@color/darkText'),
  }) as any,
  LIGHT_TEXT: Platform.select({
    ios: PlatformColor('lightText'),
    android: PlatformColor('@color/lightText'),
  }) as any,
  BACKGROUND: Platform.select({
    ios: PlatformColor('background'),
    android: PlatformColor('@color/appBackground'),
  }) as any,
  LIGHT_BACKGROUND: Platform.select({
    ios: PlatformColor('lightBackground'),
    android: PlatformColor('@color/lightBackground'),
  }) as any,
  TRANSPARENT: 'transparent',
};
