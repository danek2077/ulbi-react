import { userDataObj } from "../../../redux-store/slices/firstSlice/types/TypesFirstSlice";

export const elemsHook = (arr: userDataObj[], isAdmin: boolean) => {
  const elems = [];
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
      elems.push(
        <div key={Math.random()}>
          {i + 1} day
          <p></p>
        </div>
      );
    }
  }
  return { elems };
};
