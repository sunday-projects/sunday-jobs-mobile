import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, CheckBox, Text } from 'react-native-elements';
import moment from 'moment';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import { IJob } from '@/types';

export interface IJobItemProps {
  job: IJob;
}

export default function JobItem({ job }: IJobItemProps) {
  return (
    <Card containerStyle={styles.jobItemCard}>
      <View style={[styles.inline, styles.jobCompletionView]}>
        <CheckBox checked={job.completed} />
        <Text>{job.jobName}</Text>
      </View>
      <View style={styles.jobDescriptionView}>
        <View style={[styles.inline, styles.jobStatusView]}>
          <Text h4>{job.companyName}</Text>
          <FontistoIcon name="angle-right" size={24} color="black" />
          <Text h4>{job.binLocation}</Text>
        </View>
        <View style={[styles.inline, styles.jobAddressView]}>
          <EntypoIcon name="location" size={24} color="black" />
          <Text>{job.binSpotLocation}</Text>
        </View>
      </View>
      <View style={[styles.inline, styles.jobDateView]}>
        <Text>{moment(job.jobDate).format('LL')}</Text>
        <Text>|</Text>
        <Text>{moment(job.jobDate).format('LT')}</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  inline: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  jobItemCard: {
    shadowOffset: {
      height: 20,
      width: 20,
    },
  },
  jobCompletionView: {},
  jobDescriptionView: {},
  jobStatusView: {},
  jobAddressView: {},
  jobDateView: {},
});
