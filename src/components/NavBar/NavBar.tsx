import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux-store/store";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import { authFalse } from "../../redux-store/slices/firstSlice/firstSlice";
const NavBar = () => {
  const username = useSelector((state: RootState) => state.firstSlice.username);
  const dispatch = useDispatch();
  return (
    <div>
      <Breadcrumb
        items={[
          {
            title: username,
          },
          {
            title: (
              <Link
                to={"/"}
                onClick={() => {
                  dispatch(authFalse());
                }}
              >
                Выйти
              </Link>
            ),
          },
        ]}
      />
    </div>
  );
};

export default NavBar;
