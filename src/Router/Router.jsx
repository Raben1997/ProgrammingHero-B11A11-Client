import { createBrowserRouter } from "react-router";
import Root from "../Component/Root/Root";
import Home from "../Pages/Home";
import NotFound from "../Component/NotFound/NotFound";
import AddTutorials from "../Pages/AddTutorials";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import PrivateRouter from "./PrivateRouter";




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
                path: '*',
                element: <NotFound></NotFound>
            },
            {
                path: '/addtutorials',
                element: <PrivateRouter><AddTutorials></AddTutorials></PrivateRouter>
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