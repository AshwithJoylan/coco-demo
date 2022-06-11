import { commonStyles, P1, P2 } from '@commons';
import React, { FC, useCallback, useMemo, useState } from 'react';
import { View } from 'react-native';
import { Interest } from '@firebase';
import { UsersList, TopList, ListContext } from '../components/Users';

/**
 * UsersProps
 */
type UsersProps = {};

/**
 * Users
 */
const Users: FC<UsersProps> = () => {
  const [selectedInterest, setSelectedInterest] = useState<
    Interest | undefined | null
  >(null);

  const updateSelectedInterests = useCallback(
    (interest: Interest) => {
      setSelectedInterest(st =>
        st?.name === interest.name ? undefined : interest,
      );
    },
    [setSelectedInterest],
  );

  const initialInterests = useCallback(() => {
    setSelectedInterest(undefined);
  }, []);
  return (
    <ListContext.Provider
      value={{ updateSelectedInterests, selectedInterest, initialInterests }}>
      {useMemo(
        () => (
          <View style={commonStyles.container}>
            <TopList />
            <UsersList />
          </View>
        ),
        [],
      )}
    </ListContext.Provider>
  );
};

export default Users;
