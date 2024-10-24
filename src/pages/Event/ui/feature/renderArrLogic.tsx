import { useSelector } from "react-redux";
import { UsersData } from "../../../../redux-store/slices/firstSlice/types/TypesFirstSlice";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../../../../redux-store/store";
type renderTypeGuest = { day: number; events: string[] }[];
export type renderTypeAdmin = {
  day: number;
  users: { [key: string]: string[] }[];
}[];
const transformed_data_admin = (users: UsersData[]) => {
  const for_render: renderTypeAdmin = Array.from({ length: 7 }, (_, i) => ({
    day: i + 1,
    users: [],
  }));
  users.forEach((user2) => {
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
  return { for_render };
};
export const renderArrLogic = (users: UsersData[], isAdmin: boolean) => {
  let elems: JSX.Element[] = [];
  if (!isAdmin) {
    let for_render: renderTypeGuest = Array.from({ length: 7 }, (_, i) => ({
      day: i + 1,
      events: [],
    }));
    const actual_user = useSelector(
      (state: RootState) => state.firstSlice.user_entry
    );
    const users_filtered = users.filter((u) => actual_user === u.username);
    users_filtered.forEach((user) => {
      const day_found = for_render.find((u) => u.day === user.day);
      if (day_found) {
        day_found.events.push(user.event);
      }
    });
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
    const { for_render } = transformed_data_admin(users);
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
