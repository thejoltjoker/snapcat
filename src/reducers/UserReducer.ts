import { User } from "../models/User";

export enum UserActionType {
  UPDATE,
}

export interface UserAction {
  type: UserActionType;
  payload: User;
}

export const UserReducer = (user: User, action: UserAction) => {
  switch (action.type) {
    case UserActionType.UPDATE: {
      return {
        ...user,
        ...action.payload,
      };
    }
  }
  throw new Error("Unknown action: " + action.type);
};
