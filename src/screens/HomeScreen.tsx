import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { RootStackParamList, IUser } from '@/types';
import { JobsTabScreen } from '@/screens/tab-screens';

const Tab = createBottomTabNavigator();

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
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          switch (route.name) {
            case 'Jobs':
              iconName = 'work';
              break;
            
            default:
              iconName = 'work';
              break;
          }

          return <MaterialIcon name={iconName} size={size} color={color} />
        }
      })}
    >
      <Tab.Screen name="Jobs" component={JobsTabScreen} />
    </Tab.Navigator>
  );
}
