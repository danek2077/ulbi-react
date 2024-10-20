import styles from "./styles/evGuest.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux-store/store";
import { renderArrLogic } from "../../feature/renderArrLogic";
const EventGuest = () => {
  const users = useSelector((state: RootState) => state.firstSlice.users);
  const isAdmin = useSelector((state: RootState) => state.firstSlice.isAdmin);
  const { elems } = renderArrLogic(users, isAdmin);
  // elems.push(
  //   <div key={Math.random()}>
  //     {flag.day} day
  //     <p>{flag.event}</p>
  //   </div>
  // );

  return <div className={styles.flex}>
    {elems}
  </div>;
};

export default EventGuest;
