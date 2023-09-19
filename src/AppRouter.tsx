import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import { Contact, Home, Register } from "./pages";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
