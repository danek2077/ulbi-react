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
    let for_render: renderTypeAdmin = Array.from({ length: 7 }, (_, i) => ({
      day: i + 1,
      users: [],
    }));
    users.forEach((user) => {
      const username = Object.keys(user)[0];
      const tasks = Object.values(user)[0];
      tasks.forEach((task) => {
        let day_obj = for_render.find((day) => day.day === task.day);
        if (day_obj) {
          const xzkak = for_render[day_obj.day - 1].users.find(
            (u) => Object.keys(u)[0] === username
          );
          if (xzkak === undefined) {
            for_render[day_obj.day - 1].users.push({ [username]: [] });
          }
          const find_xz = for_render[day_obj.day - 1].users.find(
            (u) => Object.keys(u)[0] === username
          );
          if (find_xz) {
            find_xz[username].push(task.event);
          }
        }
      });
    });
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
