import React from "react";
import styles from "./styles/evGuest.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux-store/store";
import { userDataObj } from "../../../../redux-store/slices/firstSlice/types/TypesFirstSlice";
const EventGuest = () => {
  const elems = [];
  const arr: userDataObj[] = useSelector(
    (state: RootState) => state.firstSlice.readyUser
  );
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
      elems.push(<div key={Math.random()}>{i + 1} day</div>);
    }
  }
  return <div className={styles.flex}>{elems}</div>;
};

export default EventGuest;
