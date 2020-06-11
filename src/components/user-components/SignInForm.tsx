import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import { completedSignIn } from '@/resolvers/user-resolver';
import { globalTheme } from '@/styles';

// Type import
import { SignInScreenNavigationProp } from '@/screens/SignInScreen';

export interface ISignInFormProps {
  navigation: SignInScreenNavigationProp;
}

export default function SignInForm({ navigation }: ISignInFormProps) {
  const dispatch = useDispatch();
  const [signInData, setSignInData] = useState({
    name: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    signInData.name.length ? setDisableButton(false) : setDisableButton(true);
  }, [signInData]);

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
    setLoading(true);
    try {
      await AsyncStorage.setItem(
        'currentUser',
        JSON.stringify({ name: signInData.name }),
      );
      dispatch(completedSignIn({ name: signInData.name }));
      navigation.navigate('Home', { currentUser: { name: signInData.name } });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      Alert.alert('Failed to sign in, please try again or restart the application!');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.signInForm}>
        <Input
          placeholder="Your name"
          onChangeText={(text) => handleChangeSignInData('name', text)}
          value={signInData.name}
          leftIcon={
            <Icon
              name="user"
              size={hp('3.5%')}
              color={globalTheme.defaultGrey}
            />
          }
          inputContainerStyle={styles.inputContainer}
          leftIconContainerStyle={styles.inputLeftIconContainer}
          inputStyle={styles.input}
        />
        <Input
          placeholder="Password"
          value={signInData.password}
          leftIcon={
            <Icon
              name="lock"
              size={hp('3.5%')}
              color={globalTheme.defaultGrey}
            />
          }
          secureTextEntry={true}
          onChangeText={(text) => handleChangeSignInData('password', text)}
          inputContainerStyle={styles.inputContainer}
          leftIconContainerStyle={styles.inputLeftIconContainer}
          inputStyle={styles.input}
        />
        <Button
          loading={loading}
          disabled={disableButton}
          title={'sign in'.toUpperCase()}
          type="solid"
          buttonStyle={styles.signInButton}
          onPress={handleUserSignIn}
          titleStyle={styles.signInButtonTitle}
          containerStyle={styles.signInButtonContainer}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: hp('5%'),
  },
  signInForm: {
    paddingHorizontal: 25,
  },
  logo: {
    width: 200,
    height: 200,
  },
  signInButtonContainer: {
    elevation: 10,
  },
  signInButton: {
    backgroundColor: globalTheme.defaultBlue,
    paddingVertical: 13,
  },
  signInButtonTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 23,
  },
  inputLeftIconContainer: {
    backgroundColor: '#fff',
    marginRight: 10,
    height: hp('8%'),
    width: wp('15%'),
    borderRadius: 6,
  },
  inputContainer: {
    borderBottomWidth: 0,
  },
  input: {
    backgroundColor: '#fff',
    padding: 20,
    height: hp('8%'),
    borderRadius: 6,
  },
});
