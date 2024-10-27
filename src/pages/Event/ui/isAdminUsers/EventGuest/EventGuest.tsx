import React from "react";
import type { Dayjs } from "dayjs";
import { Calendar } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux-store/store";
import { v4 as uuidv4 } from "uuid";
const EventGuest = () => {
  const users = useSelector((state: RootState) => state.firstSlice.users);
  const user_entry = useSelector(
    (state: RootState) => state.firstSlice.user_entry
  );
  const cellRender = (date: Dayjs) => {
    const formattedDate = date.format("YYYY-MM-DD");
    const users_filtered = users.filter(
      (el) => el.date === formattedDate && el.username === user_entry
    );
    if (users_filtered.length > 0) {
      return (
        <ul style={{ marginTop: -5 }}>
          {users_filtered.map((u) => (
            <li key={uuidv4()}>{u.event}</li>
          ))}
        </ul>
      );
    }
  };
  return (
    <div>
      <Calendar cellRender={cellRender} />
    </div>
  );
};

export default EventGuest;
