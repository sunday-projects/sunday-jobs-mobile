import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <NavigationContainer>
      <SafeAreaView></SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  highlight: {
    fontWeight: '700',
  }
});
