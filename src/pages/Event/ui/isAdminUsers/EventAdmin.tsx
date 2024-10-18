import React from "react";
import AddUserEvent from "../AddUserEvent";
import styles from "./styles/evAdmin.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux-store/store";
import { UsersData } from "../../../../redux-store/slices/firstSlice/types/TypesFirstSlice";
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

type DaysArray = DayData[];

const EventAdmin = () => {
  const elems: JSX.Element[] = [];
  const users: UsersData[] = useSelector(
    (state: RootState) => state.firstSlice.readyUser
  );
  const arr = [
    {
      day: 1,
      users: [
        {
          dan: [
            { event: "данечка в 3 день отдыхаешь" },
            { event: "начать работать с 15:00" },
          ],
        },
        {
          nikita: [{ event: "работаешь в выходной, никитос" }],
        },
      ],
    },
  ];
  const func = () => {
    let rez: DaysArray = [];
    for (let i = 1; i < 8; i++) {
      rez.push({ day: i, users: [] });
      users.map(function (el) {
        const key = Object.keys(el)[0];
        el[key].map(function (task) {
          rez.map(function (rezEl) {
            if (rezEl.day === task.day) {
              if (rezEl.users[0] === undefined) {
                let obj: UserEvents = {};

                obj[key] = [];
                rezEl.users.push(obj);
              } else {
                let flag = false;
                rezEl.users.map(function (rezUser) {
                  if (Object.keys(rezUser)[0] === key) {
                    flag = true;
                  }
                });
                if (flag) {
                  let obj2: UserEvents = {};
                  obj2[key] = [];
                  
                }
              }
            }
          });
        });
      });

    }
    console.log(rez);
  };
  func();
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
