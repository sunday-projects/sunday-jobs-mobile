import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { IRootState, RootStackParamList, IUser } from '@/types';

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

export interface IHomeScreenProps {
  navigation: HomeScreenNavigationProp;
  currentUser: IUser;
}

export default function HomeScreen({ navigation, currentUser }: IHomeScreenProps) {
  return (
    <View>
      <Text>EHHH KONTOLasdasdasd!</Text>
    </View>
  );
}
