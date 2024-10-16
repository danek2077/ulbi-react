import { useSelector } from "react-redux";
import { RootState } from "../../redux-store/store";
import styles from "./styles/event.module.scss";
import { elemsHook } from "./model/elemsHook";

const Event = () => {
  const isAdmin = useSelector((state: RootState) => state.firstSlice.isAdmin);
  const usersData = useSelector(
    (state: RootState) => state.firstSlice.readyUser
  );
  const { elems } = elemsHook(usersData);

  return (
    <div>
      <div className={styles.flex}>{elems}</div>
    </div>
  );
};

export default Event;
