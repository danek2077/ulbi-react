import AddUserEvent from "./addUserEvent/AddUserEvent";
import styles from "./evAdmin.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux-store/store";
import { Alert, Calendar } from "antd";
import type { Dayjs } from "dayjs";
import { useState } from "react";
import dayjs from "dayjs";
import React from "react";
import { v4 as uuidv4 } from "uuid";
type FormatedUsersType = {
  date: string;
  users: { username: string; events: string[] }[];
}[];
const EventAdmin = () => {
  const users = useSelector((state: RootState) => state.firstSlice.users);
  const formatted_users = React.useMemo(
    () =>
      users.reduce((acc, cur) => {
        let date_found = acc.find((e) => cur.date === e.date);
        if (!date_found) {
          date_found = { users: [], date: cur.date };
          acc.push(date_found);
        }
        if (date_found) {
          let user_found = date_found.users.find(
            (u) => u.username === cur.username
          );
          if (!user_found) {
            user_found = {
              username: cur.username,
              events: [],
            };
            date_found.users.push(user_found);
          }
          user_found.events.push(cur.event);
        }
        return acc;
      }, [] as FormatedUsersType),
    [users]
  );
  const cellRender = (date: Dayjs) => {
    const formattedDate = date.format("YYYY-MM-DD");
    const users_found = formatted_users.find((u) => formattedDate === u.date);
    if (users_found) {
      return (
        <div style={{ marginTop: -5 }}>
          {users_found.users.map((u) => (
            <div key={uuidv4()}>
              <span>tasks for: {u.username}</span>
              <ul>
                {u.events.map((e) => (
                  <li key={uuidv4()}>{e}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <AddUserEvent users={users} />
      <Calendar cellRender={cellRender}  />
    </div>
  );
};

export default EventAdmin;
