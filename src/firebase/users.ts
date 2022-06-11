import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import { useCallback, useRef, useState, useEffect } from 'react';

type Interest = {
  name: string;
};

type User = {
  name: string;
  id: string;
  interests: string[];
};

type SnapShot =
  FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>;

const mapUsers = (snapShot: SnapShot) => {
  const data: User[] = [];
  snapShot.forEach(doc => {
    data.push({
      id: doc.id,
      ...(doc.data() as any),
    });
  });
  return data;
};

/**
 * hook which returns state for the users and loading
 * @param {Interest} interest selected interest from filter state
 * @returns loading, users,getData
 */
export const useUsers = (interest?: Interest | null) => {
  const usersCollectionRef = useRef(firestore().collection('Users'));
  const [state, setState] = useState<{
    users: User[];
    loading: boolean;
    refreshing: boolean;
  }>({
    users: [],
    loading: false,
    refreshing: false,
  });
  const called = useRef(0);

  const getData = useCallback(
    async (refreshing?: boolean) => {
      if (interest === null) return;
      called.current++;
      setState(st =>
        refreshing ? { ...st, refreshing: true } : { ...st, loading: true },
      );
      try {
        const query =
          interest === undefined
            ? usersCollectionRef.current
            : usersCollectionRef.current.where(
                'interests',
                'array-contains',
                interest.name,
              );
        const querySnapshot = await query.get();
        const data = mapUsers(querySnapshot);
        setState(st =>
          refreshing
            ? { ...st, refreshing: false, users: data }
            : { ...st, loading: false, users: data },
        );
      } catch (error) {
        console.log(error);
        setState(st =>
          refreshing ? { ...st, refreshing: false } : { ...st, loading: false },
        );
      }
    },
    [interest, called],
  );

  console.log('called:', called);
  useEffect(() => {
    getData();
  }, [getData]);

  const refresh = useCallback(() => getData(true), [getData]);

  return { ...state, refresh };
};
