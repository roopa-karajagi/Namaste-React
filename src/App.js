import React, { lazy ,Suspense} from "react";
import ReactDOM from "react-dom/client";
//Named Import
import HeaderComponent from "./components/header/Header";
import Body from "./components/main/Body";
import Footer from "./components/footer/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import ErrorComp from "./components/error/Error";
import Section from "./components/section/Banner";
import RestaurantMenu from "./components/main/restaurant/RestaurantMenu";
import Shimmer from "./components/shimmer/Shimmer";
// import InstaMart from "./components/Instamart/instamart";

const InstaMart = lazy(() => import("./components/Instamart/instamart"));
//dynamic loading --> upon on demand loading --> upon render --> react suspense loading

//if we don't use suspense --> then react will render -->  will not show up the page for the first time -->
//so we need to use suspense --> so that react will wait until the component loads. --> it will render only when we click on that component

//we can use fallback in suspense to show the user until page loads


// Never ever load dynamic component inside another component ..it should be seperate..

//when we load the application in lazy it will render at the time we click on it ..it doesn't render when we load our application
//but once it is loaded , we can use it for further sequence bcz it is SPA.


//First structure a layout
const AppLayout = () => {
  return (
    <div className="wrapper">
      <HeaderComponent />
        <Outlet />
      <Footer />
    </div>
  );
};

// React is Single Page Application --SPA
// --there is no refresh of page / network call when we are working on SPA

/***
 * there are 2 types of Routing
 * Client Side Routing
 * Server Side Routing -- every time there is change of route it should get it from backend, we have page refresh every when we do this
 * client side render --> According Route we are just rendering a component
 *
 *
 */

// Outlet is the place we fill configuration of routes --> all the children of the applayout goes inside outlet --> it is the structure where react router dom connects DOM with our defined routes like below connected with outlet

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComp />,
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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path:"/instamart",
        element: <Suspense fallback={<Shimmer/>}><InstaMart /></Suspense>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//to provide router to react to render the component
root.render(<RouterProvider router={appRouter} />);
