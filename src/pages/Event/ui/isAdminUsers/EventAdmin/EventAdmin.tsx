import React from "react";
import AddUserEvent from "./addUserEvent/AddUserEvent";
import styles from "./evAdmin.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux-store/store";
import { UsersData } from "../../../../../redux-store/slices/firstSlice/types/TypesFirstSlice";
import { transformUserData } from "./model/EvAdmin";
type Event = {
  event: string;
};
type UserEvents = {
  [username: string]: Event[];
};
type DayData = {
  day: number;
  users: UserEvents[];
};
export type DaysArray = DayData[] | any;
const EventAdmin = () => {
  const elems: JSX.Element[] = [];

  // elems.push(
  //   <div key={Math.random()}>
  //     <span key={Math.random()}>{el.day}</span>
  //     <div key={Math.random()}>
  //       {Object.values(el.users).map(function (userarr) {
  //         let i = 0;
  //         return (
  //           <>
  //             <span key={Math.random()}>
  //               tasks for {Object.keys(userarr)}
  //             </span>
  //             <nav key={Math.random()}>
  //               {Object.values(userarr).map((us) =>
  //                 us.map(function (ev) {
  //                   i++;
  //                   return (
  //                     <div key={Math.random()}>
  //                       task {i}: {ev.event}
  //                     </div>
  //                   );
  //                 })
  //               )}
  //             </nav>
  //           </>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );

  return (
    <div>
      <div className={styles.flex}>{elems}</div>
      <AddUserEvent days={"s"} />
    </div>
  );
};

export default EventAdmin;
