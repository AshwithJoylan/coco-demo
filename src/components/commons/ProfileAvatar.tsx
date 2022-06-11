import React, { FC } from 'react';
import { StyleSheet, Image } from 'react-native';
import { reSize, ThemeColor, useHeaderHeight } from '@config';
import Images from '@images';
import ReHighlight from './ReHighlight';

/**
 * ProfileAvatarProps
 */
type ProfileAvatarProps = {};

const styles = StyleSheet.create({
  container: {
    borderRadius: reSize(25),
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    overflow: 'hidden',
    padding: reSize(10),
    backgroundColor: ThemeColor.LIGHT_BACKGROUND,
  },
  avatar: {
    flex: 1,
  },
});

/**
 * ProfileAvatar
 */
const ProfileAvatar: FC<ProfileAvatarProps> = () => {
  const { header } = useHeaderHeight();
  return (
    <ReHighlight style={[styles.container, { width: header }]}>
      <Image
        source={Images.AVATAR}
        resizeMode="contain"
        style={styles.avatar}
      />
    </ReHighlight>
  );
};

export default ProfileAvatar;
