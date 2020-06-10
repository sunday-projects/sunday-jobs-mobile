import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { IJob } from '@/types';
import JobItem from './JobItem';
import JobItemSkeleton from './JobItemSkeleton';

export interface IJobListProps {
  jobs: IJob[];
  loading: boolean;
}

export default function JobList({ jobs, loading }: IJobListProps) {
  const decideRender = () => {
    if (loading) {
      const loadingFlatListData = new Array(10).fill('placeholder');
      return (
        <FlatList
          data={loadingFlatListData}
          renderItem={() => (
            <JobItemSkeleton />
          )}
          keyExtractor={(item: any, index: any) => index}
        />
      );
    } else if (!loading && !jobs.length) {
      return <Text>NO JOBS FOR NOW!</Text>
    } else {
      return (
        <FlatList
          data={jobs}
          renderItem={(job) => (
            <JobItem job={job.item} />
          )}
          keyExtractor={(job) => job.binId}
        />
      );
    }
  }

  return (
    <View>
      {decideRender()}
    </View>
  );
}
