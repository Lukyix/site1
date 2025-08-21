import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/dashboard/Dashboard";
import Signin from "./pages/login/Signin";
import PrivateRoute from "./components/PrivateRoute";
import NewBlog from "./pages/dashboard/blogs/NewBlog";
import Forgot_passwd from "./pages/login/passwd/Forgot_passwd";
import Change_passwd from "./pages/login/passwd/Change_passwd";
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
      <Forgot_passwd />
    ),
  },
  {
    path: ROUTES.FORGOT_PASSWORD,
    element: (
      <Change_passwd />
    ),
  },
  { path: "*", element: <NotFound /> },

]);
