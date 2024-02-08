import { Dispatch, createContext, useContext } from "react";
import { User } from "../models/User";
import { UserAction } from "../reducers/UserReducer";

interface IUserContext {
  user: User | null;
  dispatch: Dispatch<UserAction>;
}

export const UserContext = createContext<IUserContext>({
  user: null,
  dispatch: () => {},
});

export const useUserContext = () => useContext(UserContext);
