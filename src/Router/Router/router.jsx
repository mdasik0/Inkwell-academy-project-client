import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Component/Pages/HomePage/Home/Home";
import Error from "../../Component/Pages/ErrorPage/Error";
import SignUp from "../../Component/Authentication/SignUp/SignUp";
import SignIn from "../../Component/Authentication/SignIn/SignIn";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'signUp',
            element:<SignUp></SignUp>
        },
        {
            path:'signIn',
            element:<SignIn></SignIn>
        },
      ]
    },
  ]);

export default router;