import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Component/Pages/HomePage/Home/Home";
import Error from "../../Component/Pages/ErrorPage/Error";
import SignUp from "../../Component/Authentication/SignUp/SignUp";
import SignIn from "../../Component/Authentication/SignIn/SignIn";
import Instructors from "../../Component/Pages/Instructors/Instructors";
import Classes from "../../Component/Pages/Classes/Classes";
import DashBoard from "../../Layout/Dashboard";
import MySelectedClasses from "../../Component/Pages/DashBoardPage/MySelectedClasses/MySelectedClasses";
import MyEnrolledClass from "../../Component/Pages/DashBoardPage/MyEnrolledClass/MyEnrolledClass";
import PaymentHistory from "../../Component/Pages/DashBoardPage/PaymentHistroy/PaymentHistory";
import AddaClass from "../../Component/Pages/DashBoardPage/Instructor/AddaClass/AddaClass";
import MyClasses from "../../Component/Pages/DashBoardPage/Instructor/MyClasses/MyClasses";
import ManageClasses from "../../Component/Pages/DashBoardPage/Instructor/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../../Component/Pages/DashBoardPage/Instructor/Admin/ManageUsers/ManageUsers";
import Payment from "../../Component/Pages/DashBoardPage/Payment/Payment";
import PrivateRoute from "../PrivateRouter/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "signIn",
        element: <SignIn></SignIn>,
      },

      {
        path: "instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
    ],
  },
  {
    path: "dashBoard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "selectedClasses",
        element: <MySelectedClasses></MySelectedClasses>,
      },
      {
        path: "enrolledClasses",
        element: <MyEnrolledClass></MyEnrolledClass>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "addAClass",
        element: <AddaClass></AddaClass>,
      },
      {
        path: "myClass",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "manageClasses",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "payment/:id",
        element: <Payment></Payment>,
      },
    ],
  },
]);

export default router;
