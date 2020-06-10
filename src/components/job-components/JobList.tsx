import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { IJob, IRootState } from '@/types';
import { setSelectedJobs as setSelectedJobsToRedux } from '@/resolvers/job-resolver';
import JobItem from './JobItem';
import JobItemSkeleton from './JobItemSkeleton';

export interface IJobListProps {
  jobs: IJob[];
  loading: boolean;
}

export default function JobList({ jobs, loading }: IJobListProps) {
  const dispatch = useDispatch();
  // const selectedJobs: IJob[] = useSelector(
  //   (state: IRootState) => state.job.selectedJobs,
  // );
  const [selectedJobs, setSelectedJobs] = useState(new Map());

  const onSelectJob = useCallback((binId: string | number) => {
    const newSelectedJobs = new Map(selectedJobs);
    newSelectedJobs.set(binId, !selectedJobs.get(binId));
    setSelectedJobs(newSelectedJobs);
    const selectedJobsArr: IJob[] = [];
    
    newSelectedJobs.forEach((selected, selectedBinId) => {
      const foundJob = jobs.find(job => job.binId == selectedBinId && selected);
      if (foundJob) selectedJobsArr.push(foundJob);
    });

    dispatch(setSelectedJobsToRedux(selectedJobsArr));
  }, [selectedJobs, jobs]);

  const decideRender = () => {
    if (loading) {
      const loadingFlatListData = new Array(10).fill('placeholder');
      return (
        <FlatList
          data={loadingFlatListData}
          renderItem={() => <JobItemSkeleton />}
          keyExtractor={(item: any, index: any) => index}
        />
      );
    } else if (!loading && !jobs.length) {
      return <Text>NO JOBS FOR NOW!</Text>;
    } else {
      return (
        <FlatList
          data={jobs}
          renderItem={({ item }) => (
            <JobItem
              job={item}
              selected={!!selectedJobs.get(item.binId)}
              onSelectJob={onSelectJob}
            />
          )}
          keyExtractor={(job) => job.binId}
          extraData={selectedJobs}
        />
      );
    }
  };

  return <View>{decideRender()}</View>;
}
