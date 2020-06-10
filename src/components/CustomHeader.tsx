import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackHeaderProps } from '@react-navigation/stack';
import { Header, Text, Button } from 'react-native-elements';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import { globalTheme } from '@/styles';

export interface ICustomHeader extends StackHeaderProps {}

export default function CustomHeader({ navigation }: ICustomHeader) {
  return (
    <Header
      backgroundColor={globalTheme.defaultBlue}
      containerStyle={styles.customHeaderWrapper}>
      <View style={styles.greeterWrapper}>
        <Text h3 h3Style={styles.greeterText}>
          Hello, Jake!
        </Text>
      </View>
      <View style={styles.jobActionsWrapper}>
        <Button
          title={`${'reject'.toUpperCase()}`}
          type="outline"
          titleStyle={{
            color: 'pink',
          }}
          buttonStyle={styles.actionButton}
        />
        <Button
          title={`${'acknowledge'.toUpperCase()}`}
          type="outline"
          buttonStyle={styles.actionButton}
        />
      </View>
    </Header>
  );
}

const styles = StyleSheet.create({
  customHeaderWrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    height: hp('20%'),
    elevation: 10,
  },
  greeterWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: wp('100%'),
    marginBottom: hp('5%'),
    paddingHorizontal: wp('5%'),
  },
  greeterText: {
    color: '#fff',
    textAlign: 'right',
  },
  jobActionsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('100%'),
    marginTop: hp('5%'),
    paddingHorizontal: wp('5%'),
  },
  actionButton: {
    backgroundColor: '#fff',
    width: wp('42%'),
  },
});
