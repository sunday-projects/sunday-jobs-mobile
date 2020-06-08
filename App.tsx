import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as ReduxProvider } from 'react-redux';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';

import store from '@/stores';
import { MainScreen } from '@/screens';

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <SafeAreaView>
          <MainScreen />
        </SafeAreaView>
      </NavigationContainer>
    </ReduxProvider>
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
