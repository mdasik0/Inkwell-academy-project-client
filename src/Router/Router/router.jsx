import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Component/Pages/HomePage/Home/Home";
import Error from "../../Component/Pages/ErrorPage/Error";
import SignUp from "../../Component/Authentication/SignUp/SignUp";
import SignIn from "../../Component/Authentication/SignIn/SignIn";
import Instructors from "../../Component/Pages/Instructors/Instructors";
import Classes from "../../Component/Pages/Classes/Classes";
import DashBoard from "../../Layout/Dashboard";

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
        {
            path:'instructors',
            element:<Instructors></Instructors>
        },
        {
            path:'classes',
            element:<Classes></Classes>
        },
      ]
    },
    {
      path:'dashBoard',
      element:<DashBoard></DashBoard>,
    }
  ]);

export default router;