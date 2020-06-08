import { IUser, IUserReducer, IAction } from '@/types';

const initialState: IUserReducer = {
  currentUser: {} as IUser,
};

export default function userReducer(
  state = initialState,
  action: IAction,
): IUserReducer {
  switch (action.type) {
    case 'SIGN_IN':
      return { ...state, currentUser: action.payload.user };

    case 'SIGN_OUT':
      return { ...state, currentUser: <IUser>{} };

    default:
      return state;
  }
}
