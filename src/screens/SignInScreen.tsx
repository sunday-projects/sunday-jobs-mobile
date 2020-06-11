import React from 'react';
import {
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
  StyleSheet,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView contentContainerStyle={styles.signInScreenWrapper}>
        <SignInHeader />
        <SignInForm navigation={navigation} />
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  signInScreenWrapper: {
    flexGrow: 1,
    paddingBottom: hp('4%'),
  },
});
