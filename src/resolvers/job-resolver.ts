import { IAction, IJob } from '@/types';

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
