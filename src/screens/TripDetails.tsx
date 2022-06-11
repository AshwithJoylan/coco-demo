import { commonStyles, H1, P2, Pill, PrimaryButton } from '@commons';
import { Sizes } from '@config';
import React, { FC } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  ImageSlider,
  styles,
  RatingList,
  BookNowButton,
} from '../components/TripDetails';

/**
 * TripDetailsProps
 */
type TripDetailsProps = {};

/**
 * TripDetails
 */
const TripDetails: FC<TripDetailsProps> = () => {
  const { bottom = Sizes.DEFAULT_PADDING } = useSafeAreaInsets();
  return (
    <View style={commonStyles.container}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom:
            (bottom || Sizes.DEFAULT_PADDING) +
            Sizes.BUTTON_HEIGHT +
            2 * Sizes.DEFAULT_PADDING,
        }}>
        <ImageSlider />
        <View style={styles.scrollContainer}>
          <View style={styles.topSubContainer}>
            <View style={styles.topInnerContainer}>
              <Pill backgroundType="LIGHT_BACKGROUND">Turkey</Pill>
              <H1 style={styles.title}>Cappadocia</H1>
            </View>
            <H1>$ 50.00</H1>
          </View>
          <RatingList />
          <P2 style={styles.description}>
            The earliest record of the name of Cappadocia dates from the late
            6th century BC, when it appears in the trilingual inscriptions of
            two early Achaemenid kings, Darius I and Xerxes, as one of the
            countries (Old Persian dahyu-) of the Persian Empire.
            {'\n'}Subsequent research suggests that the adverb katta meaning
            'down, below' is exclusively Hittite, while its Luwian equivalent is
            zanta.[4] Therefore, the recent modification of this proposal
            operates with the Hittite katta peda-, literally "place below" as a
            starting point for the development of the toponym Cappadocia.
          </P2>
        </View>
      </ScrollView>
      <BookNowButton />
    </View>
  );
};

export default TripDetails;
