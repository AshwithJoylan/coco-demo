import React, { FC } from 'react';
import { StyleSheet, ViewProps } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  AnimateProps,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Sizes } from '@config';

/**
 * ReHighlightProps
 */
export type ReHighlightProps = AnimateProps<ViewProps> & {
  onPress?: () => void;
  disabled?: boolean;
  highlightColor?: string;
  borderRadius?: number;
};

/**
 * ReHighlight
 */
const ReHighlight: FC<ReHighlightProps> = ({
  children,
  disabled,
  style,
  borderRadius,
  highlightColor = '#00000050',
  onPress,
  ...rest
}) => {
  const opacity = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const tapGesture = Gesture.Tap()
    .onBegin(() => {
      opacity.value = withTiming(1, { duration: 70 });
    })
    .enabled(!disabled)
    .onTouchesCancelled(() => {
      opacity.value = withTiming(0, { duration: 400 });
    })
    .onEnd((_, success) => {
      opacity.value = withTiming(0, { duration: 400 });
      if (success) {
        if (onPress) runOnJS(onPress)();
      }
    });

  return (
    <GestureDetector gesture={tapGesture}>
      <Animated.View {...rest} style={style}>
        {children}
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            {
              borderRadius:
                borderRadius !== undefined ? borderRadius : Sizes.BORDER_RADIUS,
              backgroundColor: highlightColor,
            },
            animatedStyles,
          ]}
        />
      </Animated.View>
    </GestureDetector>
  );
};

export default ReHighlight;
