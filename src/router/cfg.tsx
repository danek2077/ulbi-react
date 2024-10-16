import { StrictMode } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "../App.tsx";
import { store } from "../redux-store/store.ts";
import { PrivateRoute, routPath } from "./model/rout-auth.tsx";
import Login from "../pages/Login/Login.tsx";
import Event from "../pages/Event/Event.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </StrictMode>
    ),
    children: [
      {
        path: routPath.LOGIN,
        element: <Login />,
      },
      {
        path: routPath.EVENT,
        element: (
          <PrivateRoute>
            <Event />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
