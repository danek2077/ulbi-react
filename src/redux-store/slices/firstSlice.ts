import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
type userDataObj = { day: number; event: string };
type UsersData = { [key: string]: userDataObj[] };

export interface firstState {
  auth: boolean;
  isAdmin: boolean | null;
  username: string;
  users: UsersData[];
  readyUser: userDataObj[];
}

const initialState: firstState = {
  auth: false,
  isAdmin: null,
  username: "",
  users: [
    {
      admin: [
        { day: 3, event: "Eventdane4ka" },
        { day: 5, event: "Eventnikitka" },
      ],
    },
    {
      dan: [{ day: 3, event: "dane4ka" }],
    },
    {
      nikita: [{ day: 5, event: "nikitka" }],
    },
  ],
  readyUser: [],
};
initialState.users.map(function (el) {
  const key = Object.keys(el)[0];
  if (key === "nikita") {
    initialState.readyUser = el[key];
  }
});
console.log(initialState.readyUser);
export const firstSlice = createSlice({
  name: "first",
  initialState,
  reducers: {
    authTrue: (
      state,
      action: PayloadAction<{ access: boolean; username: string }>
    ) => {
      state.auth = true;
      state.isAdmin = action.payload.access;
      state.username = action.payload.username;
      state.users.map(function (el) {
        const key = Object.keys(el)[0];
        if (key === action.payload.username) {
          state.readyUser = el[key];
        }
      });
    },
    authFalse: (state) => {
      state.auth = false;
    },
  },
});

export const { authTrue, authFalse } = firstSlice.actions;
export default firstSlice.reducer;
