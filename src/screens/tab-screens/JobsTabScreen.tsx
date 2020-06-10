import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View } from 'react-native';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-community/async-storage';

import { IJob, IRootState } from '@/types';
import { api } from '@/utils';
import { setTotalJobs, completedFetchJobs } from '@/resolvers/job-resolver';
import { JobList } from '@/components';

export interface IJobsTabScreenProps { }

export default function JobsTabScreen({ }: IJobsTabScreenProps) {
  const dispatch = useDispatch();
  const jobs = useSelector((state: IRootState) => state.job.jobs);
  const [loading, setLoading] = useState(false);

  const fetchJobs = useCallback(async () => {
    setLoading(true);
    try {
      let jobsFromAsyncStorage: IJob[] | any = await AsyncStorage.getItem('jobs');
      
      if (jobsFromAsyncStorage) {
        jobsFromAsyncStorage = JSON.parse(jobsFromAsyncStorage);
        dispatch(setTotalJobs(jobsFromAsyncStorage.length));
        dispatch(completedFetchJobs(jobsFromAsyncStorage));
        setLoading(false);
      } else {
        const { data } = await api.get(`/e/collection/${Config.COLLECTION_ID}/all-bins`);
        const binIdArr = data.records;
        const bins: IJob[] = [];
  
        dispatch(setTotalJobs(binIdArr.length));
  
        for (const binId of binIdArr) {
          const { data } = await api.get(`/b/${binId.id}`);
          bins.push({ ...data, binId: binId.id });
        }
  
        dispatch(completedFetchJobs(bins));
        setLoading(false);
  
        await AsyncStorage.setItem('jobs', JSON.stringify(bins));
      }

    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchJobs();
  }, []);
  
  return (
    <View>
      <JobList jobs={jobs} loading={loading} />
    </View>
  );
}
