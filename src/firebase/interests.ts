import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import { useCallback, useRef, useState, useEffect } from 'react';

export type Interest = {
  name: string;
  id: string;
};

type SnapShot =
  FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>;

const mapInterests = (snapShot: SnapShot) => {
  const data: Interest[] = [];
  snapShot.forEach(doc => {
    data.push({
      id: doc.id,
      ...(doc.data() as any),
    });
  });
  return data;
};

/**
 * hook which returns state for the interests
 * @param onSuccess function to call when data is fetched first time
 * @returns loading, interests
 */
export const useInterests = (onSuccess?: () => void) => {
  const interestsCollectionRef = useRef(firestore().collection('interests'));
  const [state, setState] = useState<{
    interests: Interest[];
    loading: boolean;
  }>({
    interests: [],
    loading: false,
  });

  const getData = useCallback(async () => {
    setState(st => ({ ...st, loading: true }));
    try {
      const querySnapshot = await interestsCollectionRef.current.get();
      const data = mapInterests(querySnapshot);
      setState(st => ({ ...st, loading: false, interests: data }));
      onSuccess?.();
    } catch (error) {
      console.log(error);
      setState(st => ({ ...st, loading: false }));
    }
  }, [onSuccess]);

  useEffect(() => {
    getData();
  }, []);

  return { ...state };
};
