import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigationProp } from '@react-navigation/stack';

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
    <View style={globalStyles.defaultContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={{
          flex: 1,
        }}>
        <SignInForm navigation={navigation} />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  signInScreenWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  }
});
