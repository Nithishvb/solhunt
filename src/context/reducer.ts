import { Action, AppState } from "./context";

export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "ADD_USER":
      return { userAccount: [...state.userAccount, action.payload.userData] };
    case "REMOVE_USER":
        return { userAccount: [] }
    default:
      return state;
  }
}
