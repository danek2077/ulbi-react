import Login from "../../pages/Login/Login";
import Event from "../../pages/Event/Event";
import { useSelector } from "react-redux";
import { RootState } from "../../redux-store/store";
import { useNavigate } from "react-router-dom";
import React from "react";
export enum routPath {
  LOGIN = "/",
  EVENT = "/event",
}

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const auth = useSelector((state: RootState) => state.firstSlice.auth);
  const navigate = useNavigate();
  if (auth) {
    return children;
  } else {
    React.useEffect(() => {
      navigate("/");
    }, []);
  }
};
