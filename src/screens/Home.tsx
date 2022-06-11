import React, { FC } from 'react';
import { View } from 'react-native';
import { commonStyles, I18nText, Icon, PrimaryButton, Search } from '@commons';
import { IconSize } from '@config';
import { List, styles } from '../components/Home';

/**
 * HomeProps
 */
type HomeProps = {};

/**
 * Home
 */
const Home: FC<HomeProps> = () => {
  return (
    <View style={[commonStyles.container, styles.container]}>
      <I18nText style={styles.title} text="text.discover" type="H1" />
      <View style={styles.searchContainer}>
        <Search style={styles.search} placeholder="Search Places" />
        <PrimaryButton style={styles.filterButton}>
          <Icon name="filter" color="#fff" size={IconSize.BIG} />
        </PrimaryButton>
      </View>
      <List data={[1, 2, 3]} />
    </View>
  );
};

export default Home;
