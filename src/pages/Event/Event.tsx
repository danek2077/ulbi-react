import { useSelector } from "react-redux";
import { RootState } from "../../redux-store/store";
import EventAdmin from "./ui/isAdminUsers/EventAdmin/EventAdmin";
import EventGuest from "./ui/isAdminUsers/EventGuest/EventGuest";

const Event = () => {
  const isAdmin = useSelector((state: RootState) => state.firstSlice.isAdmin);

  return <div>{isAdmin ? <EventAdmin /> : <EventGuest />}</div>;
};

export default Event;
