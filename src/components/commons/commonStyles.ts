import { StyleSheet } from 'react-native';
import { Sizes, ThemeColor, reSize } from '@config';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColor.BACKGROUND,
  },
  whiteText: { color: '#fff' },
  primaryText: { color: ThemeColor.PRIMARY },
  lightText: { color: ThemeColor.LIGHT_TEXT },

  regularText: { fontWeight: '500' },

  primaryBackground: {
    backgroundColor: ThemeColor.PRIMARY,
  },
  pill: {
    alignSelf: 'flex-start',
    paddingHorizontal: reSize(18),
    borderRadius: Sizes.BORDER_RADIUS_MAX,
    paddingVertical: reSize(4),
  },
});
