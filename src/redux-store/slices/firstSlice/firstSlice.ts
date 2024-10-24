import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { firstStateType } from "./types/TypesFirstSlice";
import { addUserObj } from "../../../pages/Event/ui/isAdminUsers/EventAdmin/addUserEvent/addUserHook";

const initialState: firstStateType = {
  auth: false,
  isAdmin: false,
  user_entry: "",
  users: [
    {
      username: "dan",
      day: 2,
      event: "Отдых в третьей день, Дан, не забывай про важное",
    },
    { username: "dan", day: 5, event: "Рабочий день начинается, будь готов" },
    { username: "nikita", day: 2, event: "Третий день: внеплановая работа" },
    {
      username: "dan",
      day: 2,
      event: "Но, даже в отдыхе, держи руку на пульсе дел",
    },
    { username: "nikita", day: 6, event: "Заслуженный выходной" },
  ],
};

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
      state.user_entry = action.payload.username;
    },
    authFalse: (state) => {
      state.auth = false;
    },
    addUser: (state, action: PayloadAction<addUserObj>) => {
      state.users.push(action.payload);
    },
  },
});

export const { authTrue, authFalse, addUser } = firstSlice.actions;
export default firstSlice.reducer;
