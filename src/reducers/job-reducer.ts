import { IJobReducer, IAction, IJob } from '@/types';

const initalState: IJobReducer = {
  jobs: []
};

export default function jobReducer(state = initalState, action: IAction): IJobReducer {
  switch (action.type) {
    case 'ADD_JOB':
      return { ...state, jobs: state.jobs.concat(action.payload.job) };
  
    case 'UPDATE_JOB':
      const updatedJob: IJob = action.payload.job;
      const newJobListAfterUpdate: IJob[] = [...state.jobs];
      const updatedJobIdx = newJobListAfterUpdate.findIndex(job => job.jobId == updatedJob.jobId);
      newJobListAfterUpdate[updatedJobIdx] = updatedJob;
      return { ...state, jobs: newJobListAfterUpdate };
    
    case 'DELETE_JOB':
      const deletedJob: IJob = action.payload.job;
      const newJobListAfterDelete: IJob[] = state.jobs.filter(job => job.jobId != deletedJob.jobId);
      return { ...state, jobs: newJobListAfterDelete };
    
    default:
      return state;
  }
}
