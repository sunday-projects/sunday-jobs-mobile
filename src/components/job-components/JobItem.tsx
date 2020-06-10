import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, CheckBox, Text } from 'react-native-elements';
import moment from 'moment';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import { IJob } from '@/types';
import { globalTheme } from '@/styles';

export interface IJobItemProps {
  job: IJob;
  selected: boolean;
  onSelectJob: (binId: string | number) => void;
}

export default function JobItem({ job, selected, onSelectJob }: IJobItemProps) {
  return (
    <Card containerStyle={styles.jobItemCard}>
      <View style={[styles.inline, styles.jobCompletionView]}>
        <CheckBox
          checked={selected}
          title={job.jobName.toUpperCase()}
          containerStyle={styles.checkBox}
          textStyle={styles.checkBoxText}
          size={35}
          onPress={() => onSelectJob(job.binId)}
        />
      </View>
      <View style={styles.jobDescriptionView}>
        <View style={[styles.inline, styles.jobStatusView]}>
          <Text h4 h4Style={[styles.h4Text, styles.jobCompany]}>
            {job.companyName}
          </Text>
          <FontistoIcon
            style={styles.arrow}
            name="angle-right"
            size={24}
            color={globalTheme.defaultGrey}
          />
          <Text h4 h4Style={styles.h4Text} style={styles.binLocation}>
            {job.binLocation}
          </Text>
        </View>
        <View style={[styles.inline, styles.jobAddressView]}>
          <EntypoIcon
            name="location"
            size={24}
            color={globalTheme.defaultBlue}
          />
          <Text style={styles.jobAddress}>{job.binSpotLocation}</Text>
        </View>
      </View>
      <View style={[styles.inline, styles.jobDateView]}>
        <Text style={styles.jobDate}>{moment(job.jobDate).format('LL')}</Text>
        <Text style={[styles.pipe, styles.jobDate]}>|</Text>
        <Text style={styles.jobDate}>{moment(job.jobDate).format('LT')}</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  inline: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 8,
  },
  jobItemCard: {
    shadowOffset: {
      height: 20,
      width: 20,
    },
  },
  jobCompletionView: {},
  checkBox: {
    marginLeft: 0,
    backgroundColor: '#fff',
    borderWidth: 0
  },
  checkBoxText: {
    fontSize: 16,
    fontWeight: 'normal'
  },
  jobDescriptionView: {},
  jobStatusView: {
    justifyContent: 'space-between',
  },
  jobCompany: {
    flexGrow: 5,
    flexBasis: 0,
  },
  arrow: {
    flexGrow: 1,
    flexBasis: 0,
  },
  binLocation: {
    flexGrow: 2,
    flexBasis: 0,
  },
  jobAddressView: {},
  jobAddress: {
    marginLeft: 15,
    fontSize: 16,
  },
  jobDateView: {
    marginTop: 40,
  },
  pipe: {
    marginHorizontal: 20,
  },
  h4Text: {
    fontSize: 18,
  },
  jobDate: {
    fontSize: 16,
    color: globalTheme.defaultGrey,
  },
});
