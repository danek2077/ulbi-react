import AddUserEvent from "./addUserEvent/AddUserEvent";
import styles from "./evAdmin.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux-store/store";
import { renderArrLogic } from "../../feature/renderArrLogic";

const EventAdmin = () => {
  const users = useSelector((state: RootState) => state.firstSlice.users);
  const isAdmin = useSelector((state: RootState) => state.firstSlice.isAdmin);
  const { elems } = renderArrLogic(users, isAdmin);
  return (
    <div>
      <div className={styles.flex}>{elems}</div>
      <AddUserEvent users={users} />
    </div>
  );
};

export default EventAdmin;
