import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import { Contact, Home, Register } from "./pages";
import { store } from "./app/store";
import { Provider } from "react-redux";

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
      ],
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "register",
      element: <Register />,
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
};

export default AppRouter;
