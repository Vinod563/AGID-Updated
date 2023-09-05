import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AgidScreen } from "./screens/AgidScreen";
import { Agid } from "./screens/Agid";
import { DivWrapper } from "./screens/DivWrapper";
import { Screen3 } from "./screens/Screen3";
import { Screen4 } from "./screens/Screen4";
import { Screen5 } from "./screens/Screen5";
import { Screen6 } from "./screens/Screen6";
import { Screen7 } from "./screens/Screen7";
import { Screen8 } from "./screens/Screen8";
import { Screen9 } from "./screens/Screen9";
import { Screen10 } from "./screens/Screen10";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <AgidScreen />,
  },
  {
    path: "/agid04",
    element: <AgidScreen />,
  },
  {
    path: "/agid01",
    element: <Agid />,
  },
  {
    path: "/agid02",
    element: <DivWrapper />,
  },
  {
    path: "/agid05",
    element: <Screen3 />,
  },
  {
    path: "/agid06",
    element: <Screen4 />,
  },
  {
    path: "/agid07",
    element: <Screen5 />,
  },
  {
    path: "/agid03",
    element: <Screen6 />,
  },
  {
    path: "/agid08",
    element: <Screen7 />,
  },
  {
    path: "/agid09",
    element: <Screen8 />,
  },
  {
    path: "/agid10",
    element: <Screen9 />,
  },
  {
    path: "/agid11",
    element: <Screen10 />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
