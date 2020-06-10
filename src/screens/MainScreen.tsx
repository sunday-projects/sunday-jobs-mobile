import React, { useEffect, useCallback } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import { useSelector, useDispatch } from 'react-redux';

import { IRootState } from '@/types';
import { completedSignIn, completedSignOut } from '@/resolvers/user-resolver';
import { HomeScreen, SignInScreen } from '@/screens';

const Stack = createStackNavigator();

export interface IMainScreenProps {}

export default function MainScreen({}: IMainScreenProps) {
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
      console.error(err);
      dispatch(completedSignOut());
    }
  }, [AsyncStorage]);

  useEffect(() => {
    if (!currentUser.name) {
      checkCurrentUser();
    }
  }, []);

  return (
    <Stack.Navigator>
      {currentUser.name ? (
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{ currentUser }}
        />
      ) : (
        <Stack.Screen name="SignIn" component={SignInScreen} />
      )}
    </Stack.Navigator>
  );
}
