import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/dashboard/Dashboard";
import Signin from "./pages/login/Signin";
import PrivateRoute from "./components/PrivateRoute";
import NewBlog from "./pages/dashboard/blogs/NewBlog";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/signin", element: <Signin /> },
  {
    path: "/Dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "dashboard/blogs/NewBlog",
    element: (
      <PrivateRoute>
        <NewBlog />
      </PrivateRoute>
    ),
  },
]);
