import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as ReduxProvider } from 'react-redux';
import { StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import store from '@/stores';
import { MainScreen } from '@/screens';

export interface IAppProps {}

export default function App(props: IAppProps) {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <MainScreen />
      </NavigationContainer>
    </ReduxProvider>
  );
}

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
  },
});
