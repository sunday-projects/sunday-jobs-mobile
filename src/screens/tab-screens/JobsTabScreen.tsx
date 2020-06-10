import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text } from 'react-native';
import Config from 'react-native-config';

import { IJob } from '@/types';
import { api } from '@/utils';
import { setTotalJobs, completedFetchJobs } from '@/resolvers/job-resolver';

export interface IJobsTabScreenProps { }

export default function JobsTabScreen({ }: IJobsTabScreenProps) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const fetchAllBinIds = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await api.get(`/e/collection/${Config.COLLECTION_ID}/all-bins`);
      const binIdArr = data.records;
      const bins: IJob[] = [];

      dispatch(setTotalJobs(binIdArr.length));

      for (const binId of binIdArr) {
        const { data } = await api.get(`/b/${binId.id}`);
        bins.push(data);
      }

      dispatch(completedFetchJobs(bins));
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchAllBinIds();
  }, []);
  
  return (
    <View>
      <Text>This is JOB LIST!</Text>
    </View>
  );
}
