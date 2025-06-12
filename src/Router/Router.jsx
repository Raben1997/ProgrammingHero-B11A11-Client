import { createBrowserRouter } from "react-router";
import Root from "../Component/Root/Root";
import Home from "../Pages/Home";
import NotFound from "../Component/NotFound/NotFound";
import AddTutorials from "../Pages/AddTutorials";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import PrivateRouter from "./PrivateRouter";
import FindTutors from "../Pages/FindTutors";
import MyTutorials from "../Pages/MyTutorials";
import MyBookedTutors from "../Pages/MyBookedTutors";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/findtutors',
                element: <FindTutors></FindTutors>
            },
            {
                path: '/addtutorials',
                element: <PrivateRouter><AddTutorials></AddTutorials></PrivateRouter>
            },
            {
                path: '/mytutorials',
                element: <PrivateRouter><MyTutorials></MyTutorials></PrivateRouter>
            },
            {
                path: '/mybookedtutors',
                element: <PrivateRouter><MyBookedTutors></MyBookedTutors></PrivateRouter>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);