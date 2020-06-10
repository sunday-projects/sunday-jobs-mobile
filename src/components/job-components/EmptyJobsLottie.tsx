import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { Text } from 'react-native-elements';

import { globalTheme } from '@/styles';

export default class EmptyJobsLottie extends Component {
  styles = StyleSheet.create({
    wrapper: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      color: globalTheme.defaultGrey
    }
  });

  render() {
    return (
      <View style={this.styles.wrapper}>
        <LottieView
          source={require('@/assets/lottie-animations/empty-notifications.json')}
          autoPlay
          autoSize
          loop
        />
        <Text h3 h3Style={this.styles.text}>No available jobs for now.</Text>
      </View>
    );
  }
}
