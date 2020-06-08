import { IAction, IUser } from '@/types';

export const completedSignIn = (user: IUser): IAction => ({
  type: 'SIGN_IN',
  payload: {
    user
  }
});

export const completedSignOut = (): IAction => ({
  type: 'SIGN_OUT',
  payload: {}
});