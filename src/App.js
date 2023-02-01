import React, { Children } from "react";
import ReactDOM from "react-dom/client";
//Named Import
import HeaderComponent from "./components/header/Header";
import Body from "./components/main/Body";
import Footer from "./components/footer/Footer";
import { createBrowserRouter , RouterProvider ,Outlet } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import ErrorComp from "./components/error/Error";
import Section from "./components/section/Banner";
import RestaurantMenu from "./components/main/restaurant/RestaurantMenu";


//default Import
/***** 
 * import { Title } from './components/Header'
 * /

/***
 *  - Header
 *      - logo(Title)
 *       - delivery location(optional)
 *        - nav Items(right)
 *         - cart
 *  - Body
 *      - Search Bar
 *    - Reastaturant list
 *         - Reastaurant Card(Information -- Many Cards)
 *              -Image
 *              -Name
 *              - Rating
 *              -cusines(food varieties)
 *
 *
 *    - Footer
 *      -- links
 *      -- social Icons
 *      -- copyright
 *
 */

// React.createElement ==> Object ==> render HTML(DOM)
// Key and Id is different : React keeps track of key to comapre the elements


// config Driven UI:

const config = [
  {
    type: "carousel",
    cards: [
      {
        offerName: "50% off",
      },
      {
        offerName: "No Delivery Charge",
      },
    ],
  },
  {
    type: "restaurants",
    cards: [
      {
        name: "Burger King",
        image:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gyiuf0vilqvtuhvz77vb",
        cusines: ["Burger", "Amarican"],
        rating: "4.4",
      },
      {
        name: "KFC",
        image:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gyiuf0vilqvtuhvz77vb",
        cusines: ["Burger", "Amarican"],
        rating: "4.4",
      },
    ],
  },
];

//First structure a layout
const AppLayout = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
        <Outlet />
      <Footer />
    </React.Fragment>
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


const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout />,
    errorElement: <ErrorComp />,
    children: [ 
      {
        path:'/',
        element:<Body />
      },
      {
      path: '/about',
      element: <About />
    },
  {
    path:'/contact',
    element:<Contact/>
  },
  {
    path:'/restaurant/:resId',
    element:<RestaurantMenu/>
  }
]
}]
  )

const root = ReactDOM.createRoot(document.getElementById("root"));

//to provide router to react to render the component
root.render(<RouterProvider router={appRouter} />);
