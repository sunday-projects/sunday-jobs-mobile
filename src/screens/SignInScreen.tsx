import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import { Input, Button } from 'react-native-elements';

import { RootStackParamList } from '@/types';
import { completedSignIn } from '@/resolvers/user-resolver';

type SignInScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignIn'
>;

export interface ISignInScreenProps {
  navigation: SignInScreenNavigationProp;
}

export default function SignInScreen({ navigation }: ISignInScreenProps) {
  const dispatch = useDispatch();
  const [signInData, setSignInData] = useState({
    name: '',
    password: '',
  });

  const handleChangeSignInData = (
    type: 'name' | 'password',
    val: string,
  ): void => {
    switch (type) {
      case 'name':
        setSignInData({ ...signInData, name: val });
        break;

      case 'password':
        setSignInData({ ...signInData, password: val });
    }
  };

  const handleUserSignIn = async () => {
    try {
      await AsyncStorage.setItem('currentUser', JSON.stringify({ name: signInData.name }));
      dispatch(completedSignIn({ name: signInData.name }));
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <View>
      <Input
        placeholder="Jordan Belford"
        onChangeText={(text) => handleChangeSignInData('name', text)}
        label="Your Name"
        value={signInData.name}
        leftIcon={<Icon name="user" size={24} color="black" />}
      />
      <Button
        title="Sign In"
        type="solid"
      />
    </View>
  );
}
