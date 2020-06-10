import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StackHeaderProps } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { Header, Text, Button } from 'react-native-elements';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import { globalTheme } from '@/styles';
import { IRootState, IUser } from '@/types';

export interface ICustomHeader extends StackHeaderProps {}

export default function CustomHeader({ navigation, scene }: ICustomHeader) {
  const currentUser: IUser =
    useSelector((state: IRootState) => state.user.currentUser) ||
    (scene.route.params as any).currentUser;
  const selectedJobs = useSelector(
    (state: IRootState) => state.job.selectedJobs,
  );
  const [totalSelectedJobs, setTotalSelectedJobs] = useState(
    selectedJobs.length,
  );

  useEffect(() => {
    setTotalSelectedJobs(selectedJobs.length);
  }, [selectedJobs]);

  return (
    <Header
      backgroundColor={globalTheme.defaultBlue}
      containerStyle={styles.customHeaderWrapper}>
      <View style={styles.greeterWrapper}>
        <Text h3 h3Style={styles.greeterText}>
          Hello, {currentUser.name}
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
          title={`${'acknowledge'.toUpperCase()}${
            totalSelectedJobs ? ` (${totalSelectedJobs})` : ''
          }`}
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
