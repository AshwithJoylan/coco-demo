import { textStyles } from '@config';
import React, { FC } from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';

type TextProps = RNTextProps;

export const H1: FC<TextProps> = ({ children, style, ...rest }) => {
  return (
    <RNText {...rest} style={[textStyles.H1, style]}>
      {children}
    </RNText>
  );
};

export const H2: FC<TextProps> = ({ children, style, ...rest }) => {
  return (
    <RNText {...rest} style={[textStyles.H2, style]}>
      {children}
    </RNText>
  );
};

export const P1: FC<TextProps> = ({ children, style, ...rest }) => {
  return (
    <RNText {...rest} style={[textStyles.P1, style]}>
      {children}
    </RNText>
  );
};

export const P2: FC<TextProps> = ({ children, style, ...rest }) => {
  return (
    <RNText {...rest} style={[textStyles.P2, style]}>
      {children}
    </RNText>
  );
};
