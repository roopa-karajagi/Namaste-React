import React from "react";
import ReactDOM from "react-dom/client";
//Named Import
import HeaderComponent from "./components/header/Header";
import Section from './components/section/Banner'
import Body from "./components/main/Body";
import Footer from "./components/footer/Footer";


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
      <Section />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
