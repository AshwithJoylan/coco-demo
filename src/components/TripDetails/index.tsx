import { IconSize, reSize, Sizes, ThemeColor } from '@config';
import Images from '@images';
import React, { FC } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import FastImage, { FastImageProps } from 'react-native-fast-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PrimaryButton } from '../commons/Buttons';
import commonStyles from '../commons/commonStyles';
import I18nText from '../commons/I18nText';
import Icon from '../commons/Icon';
import IconText from '../commons/IconText';
import ReHighlight from '../commons/ReHighlight';

const AnimatedFastImage = Animated.createAnimatedComponent<FastImageProps>(
  FastImage as any,
);

const ITEM_SIZE =
  (Sizes.WIDTH - 2 * Sizes.DEFAULT_PADDING - 3 * reSize(10)) / 4;

export const styles = StyleSheet.create({
  topContainer: {
    height: Sizes.HEIGHT / 1.8,
    // margin: reSize(10),
    borderRadius: Sizes.BORDER_RADIUS_MAX,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    overflow: 'hidden',
  },
  image: {
    width: Sizes.WIDTH,
    height: '100%',
  },
  bottomList: {
    position: 'absolute',
    bottom: Sizes.DEFAULT_PADDING,
    left: 0,
    right: 0,
    height: ITEM_SIZE,
  },
  bottomImageContainer: {
    height: ITEM_SIZE,
    width: ITEM_SIZE,
    borderRadius: Sizes.BORDER_RADIUS_MAX,
  },
  button: {
    overflow: 'hidden',
    marginRight: reSize(10),
    height: ITEM_SIZE,
    width: ITEM_SIZE,
    borderRadius: reSize(22),
  },
  border: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: reSize(22),
    borderColor: '#fff',
  },
  borderIOS: {
    borderRadius: reSize(22),
    ...StyleSheet.absoluteFillObject,
    borderColor: ThemeColor.BACKGROUND,
  },
  bottomImage: {
    width: '100%',

    height: '100%',
    borderRadius: reSize(22),
  },
  contentContainer: { paddingHorizontal: Sizes.DEFAULT_PADDING },
  scrollContainer: {
    alignSelf: 'stretch',
    paddingTop: 2 * Sizes.DEFAULT_PADDING,
    paddingHorizontal: Sizes.DEFAULT_PADDING,
  },
  title: {
    marginTop: Sizes.DEFAULT_PADDING,
  },
  ratingListContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    marginTop: reSize(10),
  },
  separator: {
    marginLeft: reSize(30),
  },
  description: {
    marginTop: Sizes.DEFAULT_PADDING,
    color: ThemeColor.LIGHT_TEXT,
  },
  bookNowButton: {
    alignSelf: 'stretch',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 2 * Sizes.DEFAULT_PADDING,
    right: 2 * Sizes.DEFAULT_PADDING,
    height: Sizes.BUTTON_HEIGHT,
    flexDirection: 'row',
    borderRadius: Sizes.BUTTON_HEIGHT / 2,
  },
  circle: {
    width: reSize(20),
    height: reSize(20),
    borderRadius: reSize(10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginLeft: reSize(10),
  },
  topSubContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
  },
  topInnerContainer: {
    flex: 1,
  },
});

const list = [Images.TURKEY, Images.TURKEY, Images.TURKEY, Images.TURKEY];

type BoxImageProps = {
  item: any;
  index: number;
  scrollX: Animated.SharedValue<number>;
  onPress: () => void;
};

const size2 = reSize(2);
const size6 = reSize(6);

const BoxImage: FC<BoxImageProps> = ({ index, item, scrollX, onPress }) => {
  const animatedStyles = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * Sizes.WIDTH,
      index * Sizes.WIDTH,
      (index + 1) * Sizes.WIDTH,
    ];
    const outputRange = [size2, size6, size2];
    return {
      borderWidth: interpolate(
        scrollX.value,
        inputRange,
        outputRange,
        Extrapolate.CLAMP,
      ),
    };
  }, []);
  return (
    <ReHighlight style={[styles.button]} {...{ onPress }}>
      <FastImage
        resizeMode="cover"
        style={[styles.bottomImage]}
        source={item}
      />
      <Animated.View
        style={[
          Platform.select({ ios: styles.borderIOS, android: styles.border }),
          animatedStyles,
        ]}
      />
    </ReHighlight>
  );
};

const keyExtractor = (_: any, i: number) => i.toString();

export const ImageSlider: FC = () => {
  const scrollX = useSharedValue(0);

  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  const onScroll = useAnimatedScrollHandler(event => {
    scrollX.value = event.contentOffset.x;
  });

  console.log('rendered');

  return (
    <View style={styles.topContainer}>
      <Animated.ScrollView
        horizontal
        ref={scrollRef}
        decelerationRate="fast"
        {...{ onScroll }}
        scrollEventThrottle={16}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToInterval={Sizes.WIDTH}>
        {list.map((item, index) => (
          <FastImage style={styles.image} key={index} source={item} />
        ))}
      </Animated.ScrollView>
      <View style={styles.bottomList}>
        <Animated.FlatList
          data={list}
          horizontal
          contentContainerStyle={styles.contentContainer}
          showsHorizontalScrollIndicator={false}
          keyExtractor={keyExtractor}
          renderItem={({ item, index }) => (
            <BoxImage
              {...{ item, index, scrollX }}
              onPress={() => {
                scrollRef.current?.scrollTo({
                  x: index * Sizes.WIDTH,
                  y: 0,
                  animated: true,
                });
              }}
            />
          )}
        />
      </View>
    </View>
  );
};

export const RatingList = () => {
  return (
    <View style={styles.ratingListContainer}>
      <IconText icon="star" text={'4.0'} />
      <IconText style={styles.separator} icon="clock" text={`30 mins`} />
      <IconText style={styles.separator} icon="location" text={`20 km`} />
    </View>
  );
};

export const BookNowButton: FC = () => {
  const { bottom = Sizes.DEFAULT_PADDING } = useSafeAreaInsets();
  return (
    <PrimaryButton
      borderRadius={Sizes.BUTTON_HEIGHT / 2}
      style={[
        styles.bookNowButton,
        { bottom: bottom || Sizes.DEFAULT_PADDING },
      ]}>
      <I18nText text="text.bookNow" style={commonStyles.whiteText} />
      <View style={styles.circle}>
        <Icon
          size={IconSize.MEDIUM}
          color={ThemeColor.PRIMARY}
          name="arrow-right"
        />
      </View>
    </PrimaryButton>
  );
};
