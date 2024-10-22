import styles from "./styles/evGuest.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux-store/store";
import { renderArrLogic } from "../../feature/renderArrLogic";
const EventGuest = () => {
  const users = useSelector((state: RootState) => state.firstSlice.users);
  const isAdmin = useSelector((state: RootState) => state.firstSlice.isAdmin);
  const { elems } = renderArrLogic(users, isAdmin);
  return <div className={styles.flex}>{elems}</div>;
};

export default EventGuest;
