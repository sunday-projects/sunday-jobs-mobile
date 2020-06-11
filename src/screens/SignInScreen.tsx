import React from 'react';
import { ScrollView, KeyboardAvoidingView, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '@/types';
import globalStyles from '@/styles';
import { SignInForm, SignInHeader } from '@/components';

export type SignInScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignIn'
>;

export interface ISignInScreenProps {
  navigation: SignInScreenNavigationProp;
}

export default function SignInScreen({ navigation }: ISignInScreenProps) {
  return (
    <KeyboardAvoidingView
      behavior={'padding'}
      style={{
        flexGrow: 1,
      }}>
      {/* <ScrollView> */}
      <SignInHeader />
      <SignInForm navigation={navigation} />
      {/* </ScrollView> */}
    </KeyboardAvoidingView>
  );
}

// const styles = StyleSheet.create({
//   signInScreenWrapper: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     flex: 1,
//   }
// });
