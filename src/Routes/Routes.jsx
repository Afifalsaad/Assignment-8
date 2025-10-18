import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import NavBar from "../Components/NavBar";
import Root from "../Root/Root";
import Apps from "../Components/Apps";
import Installed from "../Pages/Installed";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        loader: ()=> fetch('/data.json'),
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
    ],
  },
]);
