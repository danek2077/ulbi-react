import React from "react";
import AddUserEvent from "../AddUserEvent";
import styles from "./styles/evAdmin.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux-store/store";
import { UsersData } from "../../../../redux-store/slices/firstSlice/types/TypesFirstSlice";
const EventAdmin = () => {
  const elems: JSX.Element[] = [];
  const users: UsersData[] = useSelector(
    (state: RootState) => state.firstSlice.readyUser
  );
  const tasksArr: JSX.Element[] = [];
  for (let i = 0; i < 7; ) {
    users.map(function (el) {
      const username = Object.keys(el);
      //tasksArr
      tasksArr.push(<nav key={Math.random()}></nav>);
      let counterTask = 1;
      let tasksDivs: JSX.Element[] = [];
      Object.values(el).map(function (arr) {
        arr.map(function (task) {
          tasksDivs.push(
            <div key={Math.random()}>
              task {counterTask}: {task.event}
            </div>
          );
          counterTask++;
        });
      });
      tasksArr[tasksArr.length - 1] = React.cloneElement(
        tasksArr[tasksArr.length - 1],
        {},
        ...tasksDivs
      );
    });
    i = 10;
  }

  // elems.push(
  //   <div key={Math.random()}>
  //     <span>{i} day</span>
  //     <div>
  //       <span>tasks for {key}</span>
  //       <nav>
  //         {el[key].map((event_task) => (
  //           <div key={Math.random()}>{event_task.event}</div>
  //         ))}
  //       </nav>
  //     </div>
  //   </div>
  // );
  return (
    <div>
      {tasksArr}
      {/* <div className={styles.flex}>
        <div key={Math.random()}>
          <span>1 day</span>
          <div>
            <span>tasks for dan</span>
            <nav>
              <div>task 1: die</div>
              <div>task 2: not die</div>
            </nav>
          </div>
        </div>
      </div> */}
      <AddUserEvent />
    </div>
  );
};

export default EventAdmin;
