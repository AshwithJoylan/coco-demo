import { Font, IconSize, Sizes, ThemeColor } from '@config';
import React, { FC } from 'react';
import { View, StyleSheet, TextInputProps } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from './Icon';

/**
 * SearchProps
 */
type SearchProps = {} & TextInputProps;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    borderRadius: Sizes.BORDER_RADIUS,
    height: Sizes.BUTTON_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: ThemeColor.LIGHT_BACKGROUND,
    paddingHorizontal: Sizes.DEFAULT_PADDING,
  },
  textInput: {
    flex: 1,
    paddingLeft: Sizes.DEFAULT_PADDING,
    ...(Font.REGULAR as any),
    color: ThemeColor.PRIMARY,
  },
});

/**
 * Search
 */
const Search: FC<SearchProps> = ({ style, ...rest }) => {
  return (
    <View style={[styles.container, style]}>
      <Icon size={IconSize.MEDIUM} name="search" color={ThemeColor.PRIMARY} />
      <TextInput
        {...rest}
        placeholderTextColor={ThemeColor.PRIMARY + 90}
        selectionColor={ThemeColor.PRIMARY}
        style={styles.textInput}
      />
    </View>
  );
};

export default Search;
