import { useSelector } from "react-redux";
import { UsersData } from "../../../../redux-store/slices/firstSlice/types/TypesFirstSlice";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../../../../redux-store/store";
type renderTypeGuest = { day: number; events: string[] }[];
export type renderTypeAdmin = {
  day: number;
  users: { [key: string]: string[] }[];
}[];
export const transformed_data_admin = (users: UsersData[]) => {
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
        let user_obj = day_obj.users.find(
          (u) => Object.keys(u)[0] === username
        );
        if (!user_obj) {
          user_obj = { [username]: [] };
          day_obj.users.push(user_obj);
        }
        user_obj[username].push(task.event);
      }
    });
  });
  return { for_render };
};
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
    const users2 = [
      {
        username: "dan",
        day: 3,
        event: "Отдых в третий день, Дан, не забывай про важное",
      },
      { username: "dan", day: 5, event: "Рабочий день начинается, будь готов" },
      { username: "nikita", day: 3, event: "Третий день: внеплановая работа" },
      { username: "nikita", day: 6, event: "Заслуженный выходной" },
    ];
    const for_render: renderTypeAdmin = Array.from({ length: 7 }, (_, i) => ({
      day: i + 1,
      users: [],
    }));
    users2.forEach((user2) => {
      const day_found = for_render.find((u) => u.day === user2.day);
      if (day_found) {
        let user_find = day_found.users.find(
          (u) => Object.keys(u)[0] === user2.username
        );
        if (!user_find) {
          user_find = { [user2.username]: [] };
          day_found.users.push(user_find);
        }
        user_find[user2.username].push(user2.event);
      }
    });
    console.log(for_render);
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
