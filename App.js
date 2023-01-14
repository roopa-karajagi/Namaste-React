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
// const burgerKing = {
//   name: "Burger King",
//   image:
//     "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gyiuf0vilqvtuhvz77vb",
//   cusines: ["Burger", "Amarican"],
//   rating: "4.4",
// };

//props -- properties

//arguments and parameters
// function fn (params1 , pass2){

// }
// fn(args1 , args2);

// First Method

//Using destructuring props
/******
 * when we call the components like this , we can destructure the data and use it like this
 * <RestaurantCard1 restaurant ={RestaurantList[3]}/>
 * 
 * 
    const RestaurantCard1 = ({restaurant}) => {
  const {name , cuisines , cloudinaryImageId , avgRating} = restaurant.data
  console.log(name, cuisines , cloudinaryImageId , avgRating); --> data comes as expected
  };
  *****/

// second Method

//property destructuring will not work directly
// when we call the component like this and it has child properties
/*****
 * 
 * <RestaurantCard1 restaurant ={RestaurantList[0].data}/>
 * 
 * 
const RestaurantCard = ({name , cuisines , cloudinaryImageId , avgRating }) => {
console.log(name, cuisines , cloudinaryImageId , avgRating); //---> undefined
};
 */

// 3rd Method
//individual destructring of properties and this work when we call our component as
/***
 * 
 * <RestaurantCard
name={RestaurantList[0].data.name}
cuisines={RestaurantList[0].data.cuisines}
cloudinaryImageId={RestaurantList[0].data.cloudinaryImageId}
avgRating={RestaurantList[0].data.avgRating}
/> 

const RestaurantCard = ({name , cuisines , cloudinaryImageId , avgRating }) => {
  console.log(name, cuisines , cloudinaryImageId , avgRating); //---> data comes as expected
  };

***/

// 4th Method
// using spread operator and destructuring properties
/****
   *spread all the properties of data and use it in component
   * Componenet Calling
   * 
   *  <RestaurantCard
          {...RestaurantList[0].data}
        />
        <RestaurantCard
           {...RestaurantList[1].data}
        />
        <RestaurantCard
           {...RestaurantList[2].data}
        />

        *****render of component********

        const RestaurantCard = ({name , cuisines , cloudinaryImageId , avgRating }) => {
        console.log(name, cuisines , cloudinaryImageId , avgRating); //---> data comes as expected
  };
   */

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  // console.log(name, cuisines, cloudinaryImageId, avgRating); //---> data comes as expected
  return (
    <div className="card">
      <a href="/" className="card-link">
        <div className="card-details">
          <div className="img_card">
            <img
              src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${cloudinaryImageId}`}
              width={254}
              height={160}
              alt="card_image"
            />
          </div>
          <h2>{name}</h2>
          <h3>{cuisines.join(", ")}</h3>
          <h4>{avgRating}</h4>
        </div>
      </a>
    </div>
  );
};

//it is like passing an arguments to functions and can be used as params in our function
const Body = () => {
  return (
    <div className="rest_body">
      <div className="rest_header">Restaurants</div>
      <div className="rest_list">
        <div className="card-group">
          {RestaurantList.map((item, index) => {
            return <RestaurantCard {...item.data} key={item.data.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return <h5>Footer</h5>;
};
//First structure a layout
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
