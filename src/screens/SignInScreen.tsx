import React from 'react';
import { ScrollView, KeyboardAvoidingView, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Header } from 'react-native-elements';

import { RootStackParamList } from '@/types';
import globalStyles from '@/styles';
import { SignInForm } from '@/components';

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
        // style={globalStyles.defaultContainer}
      style={{
        flex: 1
      }}
      >
      <Header />
      <ScrollView
        removeClippedSubviews={false}
        keyboardShouldPersistTaps={'always'}
      >
          <SignInForm navigation={navigation} />
        </ScrollView>
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
