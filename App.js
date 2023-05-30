import React from "react";
import ReactDOM from "react-dom/client";
import Logo_Image from "./images/logo.jpg";
import { swiggy_data as RestaurantList } from "./data";

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

//Title of the APp
const Title = () => (
  <div className="title_comp">
    <a href="/">
      <img className="logo" src={Logo_Image} alt="Food villa" />
    </a>
    <h1 className="title" id="title">
      {" "}
      Food Villa
    </h1>
  </div>
);
const HeaderComponent = () => {
  return (
    <div className="header_comp">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
// config Driven UI: where config are based on what we want to show on UI

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
// const burgerKing = {
//   name: "Burger King",
//   image:
//     "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gyiuf0vilqvtuhvz77vb",
//   cusines: ["Burger", "Amarican"],
//   rating: "4.4",
// };





let imageCDN = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/'


const RestaurantCard = ({name , cuisines , cloudinaryImageId , avgRating}) => {
  // console.log(name, cuisines, cloudinaryImageId, avgRating); //---> data comes as expected
  return (
    <div className="card">
            <img
              src={imageCDN + cloudinaryImageId}
              alt="card_image"
            />
          <h2 className="card-title">{name}</h2>
          <h3 className="card-tags">{cuisines.join(", ")}</h3>
          <h4 className="card-rating">{avgRating}</h4>
        </div>
  );
};

//it is like passing an arguments to functions and can be used as params in our function

// No key(not acceptable)  <<<<<<<<<<<< index key (use inly if don't have anything unique)<< unique key (best practice)
const Body = () => {
  return (
    <div className="rest_body">
      <div className="rest_header">Restaurants</div>
      <div className="rest_list">
        {RestaurantList.map((item, index) => {
            return <RestaurantCard {...item.data} key={item.data.id} />;
          })}
        </div>
      </div>
  );
};

const Footer = () => {
  return <h5>Footer</h5>;
};
//First structure a layout

/// planning before writing any code-------
const AppLayout = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <Body />
      <Footer />
    </React.Fragment>
  );
};
 


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
