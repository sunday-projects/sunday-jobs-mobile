import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Keyboard,
} from 'react-native';
import { Input, Image, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { completedSignIn } from '@/resolvers/user-resolver';
import globalStyles from '@/styles';

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
      await AsyncStorage.setItem(
        'currentUser',
        JSON.stringify({ name: signInData.name }),
      );
      dispatch(completedSignIn({ name: signInData.name }));
      navigation.navigate('Home', { currentUser: { name: signInData.name } });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.defaultContainer}>
        <Image
          source={require('@/assets/images/solaytic.png')}
          style={styles.logo}
        />
        <View style={styles.signInForm}>
          <Input
            placeholder="Jordan Belford"
            onChangeText={(text) => handleChangeSignInData('name', text)}
            label="Your Name"
            value={signInData.name}
            leftIcon={<Icon name="user" size={24} color="black" />}
          />
          <Input
            placeholder="Password"
            label="Password"
            value={signInData.password}
            leftIcon={<Icon name="lock" size={24} color="black" />}
            secureTextEntry={true}
          />
          <Button title="Sign In" type="solid" onPress={handleUserSignIn} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  signInForm: {
    width: wp('100%'),
    flex: 1,
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 200,
  },
});
