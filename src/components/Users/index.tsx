import React, { createContext, FC, useContext } from 'react';
import {
  ActivityIndicator,
  FlatList,
  PlatformColor,
  StyleSheet,
  View,
} from 'react-native';

import { Interest, useInterests, useUsers } from '@firebase';
import { reSize, Sizes, ThemeColor } from '@config';
import { P1, P2 } from '../commons/Texts';
import Pill from '../commons/Pill';
import ReHighlight from '../commons/ReHighlight';

const styles = StyleSheet.create({
  topContainer: {
    alignSelf: 'stretch',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: Sizes.DEFAULT_PADDING,
    flexDirection: 'row',
    paddingVertical: Sizes.DEFAULT_PADDING,
  },
  listItem: {
    alignSelf: 'stretch',
    paddingVertical: reSize(10),
    paddingHorizontal: Sizes.DEFAULT_PADDING,
    borderBottomWidth: StyleSheet.hairlineWidth,
    // borderBottomColor: PlatformColor('@color/lightText'),
  },
});

type ListContextType = {
  selectedInterest?: Interest | null;
  initialInterests: () => void;
  updateSelectedInterests: (interest: Interest) => void;
};

export const ListContext = createContext<ListContextType>({
  updateSelectedInterests: () => {},
  initialInterests: () => {},
});

export const TopList: FC = () => {
  const { selectedInterest, updateSelectedInterests, initialInterests } =
    useContext(ListContext);
  const { loading, interests } = useInterests(initialInterests);
  return (
    <View style={styles.topContainer}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        interests.map(interest => (
          <ReHighlight
            onPress={() => updateSelectedInterests(interest)}
            borderRadius={reSize(30)}
            key={interest.id}
            style={{ marginRight: reSize(10), marginBottom: reSize(10) }}>
            <Pill
              isActive={selectedInterest?.name === interest.name}
              backgroundType="LIGHT_BACKGROUND">
              {interest.name}
            </Pill>
          </ReHighlight>
        ))
      )}
    </View>
  );
};

export const UsersList: FC = () => {
  const { selectedInterest } = useContext(ListContext);
  const { users, loading, refresh, refreshing } = useUsers(selectedInterest);
  return loading ? (
    <ActivityIndicator />
  ) : (
    <FlatList
      data={users}
      onRefresh={refresh}
      {...{ refreshing }}
      renderItem={({ item }) => (
        <View style={styles.listItem}>
          <P1>{item.name}</P1>
          <P2 style={{ textTransform: 'capitalize' }}>
            Interests: {item.interests.reduce((a, b) => a + ', ' + b)}
          </P2>
        </View>
      )}
    />
  );
};
