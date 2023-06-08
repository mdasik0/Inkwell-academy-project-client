import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Component/Pages/HomePage/Home/Home";
import Error from "../../Component/Pages/ErrorPage/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'signUp',
            element:<Error></Error>
        }
      ]
    },
  ]);

export default router;