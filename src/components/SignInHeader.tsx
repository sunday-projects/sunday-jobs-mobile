import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { Header } from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { globalTheme } from '@/styles';

export interface ISignInHeaderProps {}

export interface ISignInHeaderState {}

export default class SignInHeader extends Component<
  ISignInHeaderProps,
  ISignInHeaderState
> {
  render() {
    return (
      <View style={styles.container}>
        <Header containerStyle={styles.header} />
        <View style={styles.logoContainer}>
          <Image
            source={require('@/assets/images/solaytic.png')}
            style={styles.logo}
            resizeMode={'contain'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  logoContainer: {
    borderRadius: wp('50%'),
    backgroundColor: '#fff',
    elevation: 50,
    position: 'absolute',
    top: hp('5%'),
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  header: {
    elevation: 50,
    height: hp('15%'),
    backgroundColor: globalTheme.defaultBlue,
  },
  container: {
    height: hp('30%'),
    alignItems: 'center',
  },
});
