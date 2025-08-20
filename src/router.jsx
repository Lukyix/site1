import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/dashboard/Dashboard";
import Signin from "./pages/login/Signin";
import PrivateRoute from "./components/PrivateRoute";
import NewBlog from "./pages/dashboard/blogs/NewBlog";
import Forgot from "./pages/login/passwd/Forgot";
import NotFound from "./pages/404/NotFound";


import { ROUTES } from "./routes";


export const router = createBrowserRouter([
  { path: ROUTES.HOME, element: <App /> },
  { path: ROUTES.LOGIN, element: <Signin /> },
  {
    path: ROUTES.DASHBOARD,
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: ROUTES.NEW_BLOG,
    element: (
      <PrivateRoute>
        <NewBlog />
      </PrivateRoute>
    ),
  },
  {
    path: ROUTES.FORGOT_PASSWORD_EMAIL,
    element: (
      <Forgot />
    ),
  },
  { path: "*", element: <NotFound /> },

]);
