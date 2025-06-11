import { createBrowserRouter } from "react-router";
import Root from "../Component/Root/Root";
import Home from "../Pages/Home";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home></Home>
            }
        ]
    },
]);