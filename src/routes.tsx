import React from "react";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import { Register } from "./modules/auth/pages/Register";

export function Router(): React.ReactElement {
  const common: RouteObject[] = [
    {
      path: "/",
      element: <Navigate to="/register" />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ];
  const GetRoutes = (): React.ReactElement | null => {
    return useRoutes([...common]);
  };
  return <GetRoutes />;
}
