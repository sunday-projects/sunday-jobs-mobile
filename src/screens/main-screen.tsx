import React, { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useSelector, useDispatch } from 'react-redux';

import { completedSignIn, completedSignOut } from '@/resolvers/user-resolver';
import { IRootState } from '@/types';

export interface IMainScreenProps {}

export default function MainScreen(props: IMainScreenProps) {
  const dispatch = useDispatch();
  const currentUser = useSelector(
    (state: IRootState) => state.user.currentUser,
  );

  const checkCurrentUser = useCallback(async () => {
    try {
      const currentUserFromAsyncStorage = await AsyncStorage.getItem(
        'currentUser',
      );
      currentUserFromAsyncStorage
        ? dispatch(completedSignIn(JSON.parse(currentUserFromAsyncStorage)))
        : dispatch(completedSignOut());
    } catch (err) {
      // Comment below on production, set error handler in advance.
      console.log(err);
      dispatch(completedSignOut());
    }
  }, [AsyncStorage]);

  useEffect(() => {
    if (!currentUser) {
      checkCurrentUser();
    }
  }, []);

  return <View></View>;
}
