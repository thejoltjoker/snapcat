import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          index: true,
          element: <HomePage />,
        },
        {
          path: "/profile",

          element: <ProfilePage />,
        },
      ],
    },
  ],
  { basename: "/snapcat/" },
);
