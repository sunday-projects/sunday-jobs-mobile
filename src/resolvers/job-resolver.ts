import { IAction, IJob } from '@/types';

export const completedFetchJobs = (jobs: IJob[]): IAction => ({
  type: 'FETCH_JOBS',
  payload: {
    jobs
  }
});

export const completedAddJob = (job: IJob): IAction => ({
  type: 'ADD_JOB',
  payload: {
    job
  }
});

export const completedUpdateJob = (job: IJob): IAction => ({
  type: 'UPDATE_JOB',
  payload: {
    job
  }
});

export const completedDeleteJob = (job: IJob): IAction => ({
  type: 'DELETE_JOB',
  payload: {
    job
  }
});

export const setTotalJobs = (totalJobs: number): IAction => ({
  type: 'SET_TOTAL_JOBS',
  payload: {
    totalJobs
  }
});

export const setSelectedJobs = (selectedJobs: IJob[]): IAction => ({
  type: 'SET_SELECTED_JOBS',
  payload: {
    selectedJobs
  }
});
