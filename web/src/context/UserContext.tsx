/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from "react";

export interface IUser {
  id: string;
  name: string;
  email: string;
}

interface IUserContextData {
  user: IUser;
  setUser(data: IUser): void;
}

const UserContext = createContext<IUserContextData>({} as IUserContextData);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<any>({});

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUser(): IUserContextData {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within an UserProvider!!");
  }

  return context;
}
