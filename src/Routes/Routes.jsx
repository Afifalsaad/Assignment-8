import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import NavBar from "../Components/NavBar";
import Root from "../Root/Root";
import Apps from "../Components/Apps";
import Installed from "../Pages/Installed";
import AppDetails from "../Components/AppDetails";
import ErrorPage from '../Components/ErrorPage'

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/installed",
        Component: Installed,
      },
      {
        path: '/appDetails/:id',
        Component: AppDetails,
      }
    ],
  },
]);
