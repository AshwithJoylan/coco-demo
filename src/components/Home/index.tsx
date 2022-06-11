import React, { FC, useCallback } from 'react';
import { StyleSheet, View, useColorScheme, Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { BlurView } from '@react-native-community/blur';
import { reSize, Sizes, ThemeColor } from '@config';
import Images from '@images';
import Pill from '../commons/Pill';
import { H2, P1 } from '../commons/Texts';
import HeaderLeft from '../commons/HeaderLeft';
import { NavigationService } from '@navigation';

const CARD_SIZE = Sizes.WIDTH - 5 * Sizes.DEFAULT_PADDING;

export const styles = StyleSheet.create({
  title: {
    marginTop: '4%',
    paddingHorizontal: Sizes.DEFAULT_PADDING,
  },
  container: {
    paddingTop: Sizes.DEFAULT_PADDING,
  },
  searchContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingHorizontal: Sizes.DEFAULT_PADDING,
    marginTop: '4%',
  },
  search: {
    flex: 1,
    marginRight: Sizes.DEFAULT_PADDING,
  },
  filterButton: {
    width: Sizes.BUTTON_HEIGHT,
    height: Sizes.BUTTON_HEIGHT,
    borderRadius: Sizes.BORDER_RADIUS,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    height: '100%',
    paddingTop: '20%', //4 * Sizes.DEFAULT_PADDING,
  },
  card: {
    overflow: 'hidden',
    marginRight: Sizes.DEFAULT_PADDING,
    height: '100%',
    width: CARD_SIZE,
    borderRadius: Sizes.BORDER_RADIUS_MAX,
  },
  listContentContainer: {
    paddingHorizontal: Sizes.DEFAULT_PADDING,
  },
  listContainer: {
    flex: 1,
    paddingBottom: '6%', //2 * Sizes.DEFAULT_PADDING,
  },
  infoContainer: {
    alignSelf: 'stretch',
    position: 'absolute',
    right: Sizes.DEFAULT_PADDING,
    alignItems: 'flex-start',
    left: Sizes.DEFAULT_PADDING,
    borderRadius: Sizes.BORDER_RADIUS_MAX,
    bottom: Sizes.DEFAULT_PADDING,
    padding: Sizes.DEFAULT_PADDING,
  },
  innerContainer: {
    marginTop: reSize(10),
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subContainer: {
    flex: 1,
  },
  prince: { marginTop: reSize(4) },
  cart: {
    width: Sizes.BUTTON_HEIGHT,
    height: Sizes.BUTTON_HEIGHT,
    borderRadius: Sizes.BUTTON_HEIGHT / 2,
  },
});

type ListProps = {
  data: any;
};

export const List: FC<ListProps> = ({ data }) => {
  const scrollX = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler(event => {
    scrollX.value = event.contentOffset.x;
  });
  const renderItem = useCallback(
    ({ item, index }: { index: number; item: any }) => (
      <HomeCard {...{ item, index, scrollX }} />
    ),
    [scrollX],
  );
  const keyExtractor = useCallback((item: number) => item.toString(), []);

  return (
    <View style={styles.listContainer}>
      <Animated.FlatList
        scrollEventThrottle={16}
        {...{ onScroll, keyExtractor, renderItem }}
        horizontal
        data={data}
        contentContainerStyle={styles.listContentContainer}
        pagingEnabled
        snapToInterval={Sizes.DEFAULT_PADDING + CARD_SIZE}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

type HomeCardProps = {
  item: any;
  index: number;
  scrollX: Animated.SharedValue<number>;
};

export const HomeCard: FC<HomeCardProps> = ({ item, index, scrollX }) => {
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * CARD_SIZE,
      index * CARD_SIZE,
      (index + 1) * CARD_SIZE,
    ];
    const outputRange = [0, -Sizes.DEFAULT_PADDING, 0];
    return {
      transform: [
        {
          translateY: interpolate(
            scrollX.value,
            inputRange,
            outputRange,
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  }, []);

  const isDark = useColorScheme() === 'dark';

  return (
    <Pressable
      onPress={() => {
        NavigationService.navigate(NavigationService.ScreenNames.TRIP_DETAILS, {
          item,
        });
      }}
      style={styles.cardContainer}>
      <Animated.View style={[styles.card, animatedStyle]}>
        <FastImage
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
          source={Images.TURKEY}
        />
        <BlurView
          blurType={isDark ? 'dark' : 'light'}
          blurAmount={20}
          style={styles.infoContainer}>
          <Pill>Turkey</Pill>
          <View style={styles.innerContainer}>
            <View style={styles.subContainer}>
              <H2>Cappadocia</H2>
              <P1 style={styles.prince}>$50.00</P1>
            </View>
            <HeaderLeft
              color={ThemeColor.DARK_TEXT}
              icon="cart"
              style={styles.cart}
            />
          </View>
        </BlurView>
      </Animated.View>
    </Pressable>
  );
};
