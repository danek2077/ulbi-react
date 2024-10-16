import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { useSelector } from "react-redux";
import { RootState } from "../../redux-store/store";
import styles from "./styles/event.module.scss";
import { Root } from "react-dom/client";

const Event = () => {
  const isAdmin = useSelector((state: RootState) => state.firstSlice.isAdmin);
  const arr = useSelector(
    (state: RootState) => state.firstSlice.readyUser
  );
  let elems = [];
  for (let i = 0; i < 6; i++) {
    const flag = arr.find((el) => el.day === i + 1);
    if (flag) {
      elems.push(
        <div key={Math.random()}>
          {flag.day} day
          <p>{flag.event}</p>
        </div>
      );
    } else {
      elems.push(
        <div key={Math.random()}>
          {i + 1} day
          <p></p>
        </div>
      );
    }
  }
  return (
    <div>
      <div className={styles.flex}>{elems}</div>
    </div>
  );
};

export default Event;
