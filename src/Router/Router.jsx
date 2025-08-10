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
import UpdateTutorial from "../Component/UpdateTutorial/UpdateTutorial";
import LanguageFilter from "../Component/LanguageFilter/LanguageFilter";
import TutorDetails from "../Component/TutorDetails/TutorDetails";
import Loading from "../Component/Loading/Loading";
import Contact from "../Pages/Contact";




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
                element: <FindTutors></FindTutors>,
            },
            {
                path: '/findtutors/:language',
                element: <LanguageFilter></LanguageFilter>
            },
            {
                path: '/tutordetails/:id',
                element: <PrivateRouter><TutorDetails></TutorDetails></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:3000/tutorials/${params.id}`),
                hydrateFallbackElement: <Loading></Loading>
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
                path: '/updatetutorial/:id',
                element: <UpdateTutorial></UpdateTutorial>,
                loader: ({ params }) => fetch(`http://localhost:3000/tutorials/${params.id}`),
                hydrateFallbackElement: <Loading></Loading>
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
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);