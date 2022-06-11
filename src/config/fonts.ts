import { StyleSheet } from 'react-native';
import { ThemeColor } from './colors';
import { reSize } from './mixins';

export const FontSize = {
  H1: reSize(26),
  H2: reSize(20),
  P1: reSize(16),
  P2: reSize(14),
};

const FontFamily = {
  POPPINS_BOLD: 'Poppins-Bold',
  POPPINS_LIGHT: 'Poppins-Light',
  POPPINS_REGULAR: 'Poppins-Regular',
};

export const IconSize = {
  BIG: reSize(24),
  MEDIUM: reSize(18),
};

export const Font = {
  HEADER: {
    fontFamily: FontFamily.POPPINS_BOLD,
    fontWeight: '700',
    fontSize: FontSize.H2,
  },
  REGULAR: {
    fontFamily: FontFamily.POPPINS_REGULAR,
    fontWeight: '400',
    fontSize: FontSize.P1,
    color: ThemeColor.DARK_TEXT,
  },
};

export const textStyles = StyleSheet.create({
  H1: {
    fontSize: FontSize.H1,
    fontFamily: FontFamily.POPPINS_BOLD,
    fontWeight: '700',
    color: ThemeColor.DARK_TEXT,
  },
  H2: {
    fontSize: FontSize.H2,
    fontFamily: FontFamily.POPPINS_BOLD,
    fontWeight: '600',
    color: ThemeColor.DARK_TEXT,
  },
  P1: {
    fontSize: FontSize.P1,
    fontFamily: FontFamily.POPPINS_REGULAR,
    color: ThemeColor.DARK_TEXT,
  },
  P2: {
    fontSize: FontSize.P2,
    fontFamily: FontFamily.POPPINS_LIGHT,
    fontWeight: '400',
    color: ThemeColor.DARK_TEXT,
  },
});
