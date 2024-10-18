import { UsersData } from "../../../../../redux-store/slices/firstSlice/types/TypesFirstSlice";

export const transformUserData = (
  users: UsersData[]
): { day: number; users: UsersData[] }[] => {
  let result = [];
  for (let i = 1; i <= 7; i++) {
    let dayObj = { day: i, users: [] as any[] };
    users.forEach((userObj) => {
      Object.keys(userObj).forEach((userName) => {
        const eventsForDay = userObj[userName].filter((task) => task.day === i);
        if (eventsForDay.length > 0) {
          let userEvents = {
            [userName]: eventsForDay.map((task) => ({ event: task.event })),
          };
          dayObj.users.push(userEvents);
        }
      });
    });
    result.push(dayObj);
  }
  return result;
};