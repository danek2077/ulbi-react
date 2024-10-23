import { useSelector } from "react-redux";
import { UsersData } from "../../../../redux-store/slices/firstSlice/types/TypesFirstSlice";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../../../../redux-store/store";
type renderTypeGuest = { day: number; events: string[] }[];
type renderTypeAdmin = { day: number; users: { [key: string]: string[] }[] }[];
export const renderArrLogic = (users: UsersData[], isAdmin: boolean) => {
  let elems: JSX.Element[] = [];
  if (!isAdmin) {
    let for_render: renderTypeGuest = [];
    const actual_user = useSelector(
      (state: RootState) => state.firstSlice.username
    );
    const user_found = users.find((user) => actual_user in user);
    const tasks = Object.values(user_found as UsersData)[0];
    for (let i = 1; i < 8; i++) {
      for_render.push({
        day: i,
        events: tasks
          .filter((task) => task.day === i)
          .map((task) => task.event),
      });
    }
    for_render.map((renEl) => {
      elems.push(
        <div key={uuidv4()}>
          <span>day {renEl.day}</span>
          {renEl.events[0] !== undefined && (
            <nav>
              {renEl.events.map((ev, i) => (
                <div key={uuidv4()}>
                  task {i + 1}: {ev}
                </div>
              ))}
            </nav>
          )}
        </div>
      );
    });
  }
  if (isAdmin) {
    let for_render: renderTypeAdmin = [];
    for (let i = 1; i < 8; i++) {
      let arrUsers: { [key: string]: string[] }[] = [];
      users.forEach((user) => {
        let key = Object.keys(user)[0];
        let obj: { [key: string]: string[] } = {};
        user[key].forEach((el) => {
          if (el.day === i) {
            if (!obj[key]) {
              obj[key] = [];
            }
            obj[key].push(el.event);
          }
        });
        if (Object.keys(obj)[0] !== undefined) {
          arrUsers.push(obj);
        }
      });
      for_render.push({ day: i, users: arrUsers });
    }
    // const resultData: renderTypeAdmin = [
    //   {
    //     day: 1,
    //     users: [{ dan: ["rabota", "aboba"] }, { nikitos: ["boba", "biba"] }],
    //   },
    //   {
    //     day: 2,
    //     users: [{ dan: ["lopo", "mega"] }],
    //   },
    //   {
    //     day: 3,
    //     users: [],
    //   },
    //   {
    //     day: 4,
    //     users: [],
    //   },
    //   {
    //     day: 5,
    //     users: [],
    //   },
    //   {
    //     day: 6,
    //     users: [],
    //   },
    //   {
    //     day: 7,
    //     users: [],
    //   },
    // ];
    for_render.map((renEl) => {
      renEl.users.map((user) => {
        Object.values(user)[0];
      });
      elems.push(
        <div key={uuidv4()}>
          <span>{renEl.day} day</span>
          {renEl.users.map((user) => {
            return (
              <div key={uuidv4()}>
                <span>{Object.keys(user)[0]}</span>
                {Object.values(user)[0].map((task, i) => (
                  <div key={uuidv4()}>{`task ${i + 1}: ${task}`}</div>
                ))}
              </div>
            );
          })}
        </div>
      );
    });
  }
  return { elems };
};
