/**
 * Redux Type Definitions 
 */

export interface IAction {
  type: string;
  payload: any;
}

export interface IJobReducer {
  jobs: IJob[];
  totalJobs: number;
  selectedJobs: IJob[];
}

export interface IUserReducer {
  currentUser: IUser;
}

export interface IRootState {
  user: IUserReducer;
  job: IJobReducer;
}

/**
 * Model Type Definitions
 */

export interface IJob {
  binId: string;
  jobId: number;
  jobName: string;
  binLocation: string;
  companyName: string;
  binSpotLocation: string;
  jobDate: string | Date;
  completed: boolean;
}

export interface IUser {
  name: string;
}

/**
 * React Navigation Native Custom Types and Interfaces
 */

export type RootStackParamList =  {
  Home: {
    currentUser: IUser;
  };
  SignIn: undefined;
}
