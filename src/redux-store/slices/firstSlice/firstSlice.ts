import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { firstStateType } from "./types/TypesFirstSlice";

const initialState: firstStateType = {
  auth: false,
  isAdmin: false,
  username: "",
  users: [
    {
      dan: [
        { day: 3, event: "данечка в 3 день отдыхаешь" },
        { day: 5, event: "тут ты работаешь" },
      ],
    },
    {
      nikita: [
        { day: 3, event: "работаешь в выходной, никитос" },
        { day: 6, event: "отдыхай" },
      ],
    },
  ],
  readyUser: [],
};

export const firstSlice = createSlice({
  name: "first",
  initialState,
  reducers: {
    authTrue: (
      state,
      action: PayloadAction<{ access: boolean; username: string }>
    ) => {
      state.readyUser = [];
      state.auth = true;
      state.isAdmin = action.payload.access;
      state.username = action.payload.username;
      if (action.payload.access === true) {
        Object.values(state.users.map((el) => state.readyUser.push(el)));
      } else {
        state.users.map(function (el) {
          const key = Object.keys(el)[0];
          if (key === action.payload.username) {
            state.readyUser = el[key];
          }
        });
      }
    },
    authFalse: (state) => {
      state.auth = false;
    },
  },
});

export const { authTrue, authFalse } = firstSlice.actions;
export default firstSlice.reducer;
