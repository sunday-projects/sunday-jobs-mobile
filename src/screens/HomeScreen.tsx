import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { RootStackParamList, IUser } from '@/types';
import { JobsTabScreen } from '@/screens/tab-screens';
import { globalTheme } from '@/styles';

const Tab = createBottomTabNavigator();

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

export interface IHomeScreenProps {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
  currentUser: IUser;
}

export default function HomeScreen({
  navigation,
  route,
  currentUser,
}: IHomeScreenProps) {
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

          return <MaterialIcon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: globalTheme.defaultBlue,
        inactiveTintColor: globalTheme.defaultGrey
      }}
    >
      <Tab.Screen name="Jobs" component={JobsTabScreen} />
    </Tab.Navigator>
  );
}
