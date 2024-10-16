import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { RootState } from "./redux-store/store";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const auth = useSelector((state: RootState) => state.firstSlice.auth);
  return (
    <div>
      {auth && <NavBar />}
      <Outlet />
    </div>
  );
}

export default App;
