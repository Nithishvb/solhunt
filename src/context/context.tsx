"use client";

import React, { createContext, ReactNode, useContext, useReducer } from "react";
import { reducer } from "./reducer";
import WalletContextProvider from "@/walletProvider/walletProvider";

export interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

export interface AppState {
  userAccount: any[];
}

const InitialState: AppState = {
  userAccount: [],
};

export type Action = { type: "ADD_USER"; payload: any } | { type: "REMOVE_USER" , payload: any };

const AppContext = createContext<AppContextType>({
    state: InitialState,
    dispatch: () => {}
});

export const Context = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, InitialState);

  return (
    <WalletContextProvider>
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    </WalletContextProvider>
  );
};

export const useAppContext = () => useContext(AppContext);
