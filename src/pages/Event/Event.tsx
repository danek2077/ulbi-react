import { useSelector } from "react-redux";
import { RootState } from "../../redux-store/store";
import styles from "./styles/event.module.scss";
import { elemsHook } from "./model/elemsHook";
import AddUserEvent from "./ui/AddUserEvent";
import EventAdmin from "./ui/isAdminUsers/EventAdmin";
import EventGuest from "./ui/isAdminUsers/EventGuest";

const Event = () => {
  const isAdmin = useSelector((state: RootState) => state.firstSlice.isAdmin);

  return <div>{isAdmin ? <EventAdmin /> : <EventGuest />}</div>;
};

export default Event;
