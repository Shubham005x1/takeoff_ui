import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import About from "./components/About"
import Heading from "./components/Navbar"
import CreateGrocery from "./components/CreateGrocery"
import Footer from "./components/Footer"
import Body from "./components/Body.js"
//const parent = React.createElement("h1", {}, "Hello Jesus")
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import { AuthProvider } from 'react-auth-kit'
import { RequireAuth } from 'react-auth-kit'
import GroceryDetails from "./components/GroceryDetails.js"
import Contact from "./components/ContactUs.js"
import JoinTeam from "./components/JoinTeam.js"
const AppLayout = () => {
    return <>

        <Navbar></Navbar>
        {/* <Body></Body> */}
        {/* <About /> */}
        <Outlet></Outlet>
        <Footer></Footer>


    </>
}
//SINGLE PAGE APPLICATION
//NEW WAY OF WRITING ROUTE IN REACT ROUTER DOM
//ANCHOR TAG RELOADS THE PAGE WE DONT WANT THAT SO WE USE LINK TAG
const root = ReactDOM.createRoot(document.getElementById("root"))
const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <AuthProvider
                authType={'cookie'}
                authName={'_auth'}
                cookieDomain={window.location.hostname}
                cookieSecure={false}
            >
                <AppLayout />
            </AuthProvider>
        ),

        // errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Body />,

            },
            {
                path: "/about",
                element: <About />,

            },
            {
                path: "/GroceryDetails/:id",
                element: <GroceryDetails></GroceryDetails>
            },
            {
                path: '/CreateGrocery',
                element: <RequireAuth loginPath="/login"><CreateGrocery /></RequireAuth>,
            },


            {
                path: "/login",
                element: <Login />,

            },

            {
                path: "/contact",
                element: <Contact />,

            },
            {
                path: "/JoinOurTeam",
                element: <JoinTeam />,

            },

        ],
    },
]);
root.render(<RouterProvider router={router} />)
