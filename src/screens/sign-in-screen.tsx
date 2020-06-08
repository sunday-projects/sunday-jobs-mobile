import React, { useState } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

export interface ISignInScreenProps { }

export default function SignInScreen(props: ISignInScreenProps) {
  const [signInData, setSignInData] = useState({
    name: '',
    password: ''
  });

  const handleChangeSignInData = (type: 'name' | 'password', val: string): void => {
    switch (type) {
      case 'name':
        setSignInData({ ...signInData, name: val });
        break;
      
      case 'password':
        setSignInData({ ...signInData, password: val });
    }
  }
  
  return (
    <View>
      <Input
        placeholder='Jordan Belford'
        onChangeText={(text) => handleChangeSignInData('name', text)}
        label='Your Name'
        value={signInData.name}
        leftIcon={
          <Icon
            name='user'
            size={24}
            color='black'
          />
        }
      />
      <Input
        
      />
    </View>
  );
}
