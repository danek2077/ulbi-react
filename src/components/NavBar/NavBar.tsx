import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux-store/store";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import { authFalse } from "../../redux-store/slices/firstSlice/firstSlice";
import styles from "./styles/NavStyles.module.scss";
const NavBar = () => {
  const username = useSelector(
    (state: RootState) => state.firstSlice.user_entry
  );
  const dispatch = useDispatch();
  return (
    <div className={styles.margin}>
      <Breadcrumb
        style={{ color: "green" }}
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
