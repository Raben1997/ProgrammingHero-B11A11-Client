import { createBrowserRouter } from "react-router";
import Root from "../Component/Root/Root";
import Home from "../Pages/Home";
import NotFound from "../Component/NotFound/NotFound";




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
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);