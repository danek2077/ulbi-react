import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { firstStateType } from "./types/TypesFirstSlice";
import { addUserObj } from "../../../pages/Event/ui/isAdminUsers/EventAdmin/addUserEvent/addUserHook";

const initialState: firstStateType = {
  auth: false,
  isAdmin: false,
  username: "",
  users: [
    {
      dan: [
        { day: 3, event: "Отдых в третьей день, Дан, не забывай про важное" },
        { day: 5, event: "Рабочий день начинается, будь готов" },
        { day: 3, event: "Но, даже в отдыхе, держи руку на пульсе дел" },
      ],
    },
    {
      nikita: [
        { day: 3, event: "Третий день: внеплановая работа" },
        { day: 6, event: "Заслуженный выходной" },
      ],
    },
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
      state.username = action.payload.username;
    },
    authFalse: (state) => {
      state.auth = false;
    },
    addUser: (state, action: PayloadAction<addUserObj>) => {
      const addUserObj = action.payload;
      state.users.map(function (el) {
        const key = Object.keys(el)[0];
        if (key === addUserObj.user_selected) {
          el[key].push({
            event: addUserObj.task_wrote,
            day: addUserObj.day_selected,
          });
        }
      });
    },
  },
});

export const { authTrue, authFalse, addUser } = firstSlice.actions;
export default firstSlice.reducer;
