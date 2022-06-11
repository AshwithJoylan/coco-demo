import { Dimensions, Platform, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const guidelineBaseWidth = 460;

console.log('S:', WINDOW_WIDTH);
/**
 * Gives the resized value for the size
 * @param size Size in number
 * @returns size according to the screen width
 *
 * ```
 * style={{ width: reSize(12) }}
 * ```
 */
export const reSize = (size: number) => {
  const sizeResize = (WINDOW_WIDTH / guidelineBaseWidth) * size;
  return sizeResize > size ? size : sizeResize;
};

export const Sizes = {
  DEFAULT_PADDING: reSize(20),
  HEIGHT: WINDOW_HEIGHT,
  WIDTH: WINDOW_WIDTH,
  BUTTON_HEIGHT: reSize(60),
  BORDER_RADIUS: reSize(12),
  BORDER_RADIUS_MAX: reSize(30),
};

/**
 * useHeaderHeight
 * @returns returns {headerHeight,header,statusBarHeight}
 */
export const useHeaderHeight = (): {
  headerHeight: number;
  header: number;
  statusBarHeight: number;
} => {
  const layout = useWindowDimensions();
  const { top: statusBarHeight } = useSafeAreaInsets();
  const isLandscape = layout.width > layout.height;

  let headerHeight;

  if (Platform.OS === 'ios') {
    if (isLandscape && !Platform.isPad) {
      headerHeight = 32;
    } else {
      headerHeight = 44;
    }
  } else if (Platform.OS === 'android') {
    headerHeight = 56;
  } else {
    headerHeight = 64;
  }

  return {
    headerHeight: headerHeight + statusBarHeight,
    header: headerHeight,
    statusBarHeight,
  };
};
