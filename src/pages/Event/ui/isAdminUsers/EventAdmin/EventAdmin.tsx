import React from "react";
import AddUserEvent from "./addUserEvent/AddUserEvent";
import styles from "./evAdmin.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux-store/store";
import { UsersData } from "../../../../../redux-store/slices/firstSlice/types/TypesFirstSlice";
import { renderArrLogic } from "../../feature/renderArrLogic";

const EventAdmin = () => {
  const users = useSelector((state: RootState) => state.firstSlice.users);
  const isAdmin = useSelector((state: RootState) => state.firstSlice.isAdmin);
  const { elems } = renderArrLogic(users, isAdmin);

  return (
    <div className={styles.flex}>
      <div>
        <span>day 1</span>
        <div>
          <div>
            <span>tasks for dan</span>
            <div>task 1: work hard</div>
            <div>task 2: slow work</div>
          </div>
          <div>
            <span>tasks for nikitos</span>
            <div>task 1: work hard</div>
            <div>task 2: slow work</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventAdmin;
