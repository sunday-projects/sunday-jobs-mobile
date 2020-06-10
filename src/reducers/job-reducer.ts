import { IJobReducer, IAction, IJob } from '@/types';

const initalState: IJobReducer = {
  jobs: [],
  totalJobs: 0,
  selectedJobs: []
};

export default function jobReducer(
  state = initalState,
  action: IAction,
): IJobReducer {
  switch (action.type) {
    case 'FETCH_JOBS':
      const newJobListAfterFetch = state.jobs.concat(action.payload.jobs);
      return {
        ...state,
        jobs: newJobListAfterFetch,
        totalJobs: newJobListAfterFetch.length
      };

    case 'ADD_JOB':
      const newJobListAfterAdd = state.jobs.concat(action.payload.job);
      return {
        ...state,
        jobs: newJobListAfterAdd,
        totalJobs: newJobListAfterAdd.length,
      };

    case 'UPDATE_JOB':
      const updatedJob: IJob = action.payload.job;
      const newJobListAfterUpdate: IJob[] = [...state.jobs];
      const updatedJobIdx = newJobListAfterUpdate.findIndex(
        (job) => job.jobId == updatedJob.jobId,
      );
      newJobListAfterUpdate[updatedJobIdx] = updatedJob;
      return {
        ...state,
        jobs: newJobListAfterUpdate,
        totalJobs: newJobListAfterUpdate.length,
      };

    case 'DELETE_JOB':
      const deletedJob: IJob = action.payload.job;
      const newJobListAfterDelete: IJob[] = state.jobs.filter(
        (job) => job.jobId != deletedJob.jobId,
      );
      return {
        ...state,
        jobs: newJobListAfterDelete,
        totalJobs: newJobListAfterDelete.length,
      };
    
    case 'SET_TOTAL_JOBS':
      return {
        ...state,
        totalJobs: action.payload.totalJobs
      };

    case 'SET_SELECTED_JOBS':
      return {
        ...state,
        selectedJobs: action.payload.selectedJobs
      };

    default:
      return state;
  }
}
