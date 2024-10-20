import { useSelector } from "react-redux";
import {
  UsersData,
  userDataObj,
} from "../../../../redux-store/slices/firstSlice/types/TypesFirstSlice";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../../../../redux-store/store";
type renderType = { day: number; events: string[] }[];
export const renderArrLogic = (users: UsersData[], isAdmin: boolean) => {
  let elems: JSX.Element[] = [];
  let for_render: renderType = [];
  if (!isAdmin) {
    for (let i = 0; i < 7; ) {
      i++;
      for_render.push({ day: i, events: [] });
    }
    const actual_user = useSelector(
      (state: RootState) => state.firstSlice.username
    );
    let tasks_found: userDataObj[] =
      users.find((user) => actual_user in user)?.[actual_user] || [];
    tasks_found.map((task) => {
      for_render.map((renEl) => {
        if (renEl.day === task.day) {
          renEl.events.push(task.event);
        }
      });
    });
    for_render.map((renEl) => {
      elems.push(
        <div key={uuidv4()}>
          <span>day {renEl.day}</span>
          {renEl.events[0] !== undefined ? <br /> : ""}
          {renEl.events[0] !== undefined ? (
            <nav>
              {renEl.events.map((ev, i) => (
                <div key={uuidv4()}>
                  task {i+1}: {ev}
                </div>
              ))}
            </nav>
          ) : (
            ""
          )}
        </div>
      );
    });
  }
  return { elems };
};
