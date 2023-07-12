import { RestaurantCard } from "./restaurant/RestaurantCard";
import { useEffect, useState } from "react";
import "./body.css";
import Shimmer from "../shimmer/Shimmer";
import Section from "../section/Banner";
import { filterData } from "../../utils/Helper";
import { FETCH_RESTAURANT_URL } from "../../constantData";
import useOnline from "../../utils/useOnline";


//what is state and why
//what is Hooks
//what is useState 

// To keep an UI update with data whatever the user changes or modify we need local state which can not be done using local variable

//it is like passing an arguments to functions and can be used as params in our function


const Body = () => {


  //If we just call the API like this we get CORS error bcz browser doesn't allows to do this connection from local host to any api which are on different origins.

  // const [loading, setLoading] = useState(false);

  const [searchTxt, setSearchTxt] = useState("");
  const [filteredRest , setFilteredRest] = useState([]);
  const [allRestaurantData , setAllRestaurantData] = useState([]);


  //by adding an custom hook on this, we need to wait for sometime to render the application ,as we are doing async operation on the hook, so it didn't render my body

  // const  { allRestaurantData }  = useRestaurant();
  // console.log("useResutal" , useRestaurant());

  // why we need allRestaurantData when we have filtered data 
  /*
  *
  *bcz when we search will have only filtered data,and the data got updated with filtered data , so when we are searching we don't want to loose all restaurants data , so we need this.
  *
  * *
  */

 

  useEffect(() => {
    //API restaurants
    setSearchTxt('');
    getRestaurants();
  }, []);

  // useState --> comes from react package(which is writen by fb developer) which is used in defining the local state to use in compoenents

  async function getRestaurants() {
    const res = await fetch(FETCH_RESTAURANT_URL);
    const data = await res.json();
    //optional chaining
    const actualData = data?.data?.cards[2]?.data?.data?.cards;
    console.log("actual data" , actualData);
    
    setAllRestaurantData(actualData);
    setFilteredRest(actualData);
  }

  // console.log(allRestaurantData);
  // why we need allRestaurantData when we have filtered data 
  //bcz when we search will have only filtered data , and the data got updated with filtered data , so when we are searching we don't want to loose all restaurants data , so we need this.

  //not render  component  --> early return or we can use optional chaing

  // else will get undefined error for the first time

  // To avoid render of component we can use below code
  // if(!allRestaurantData) return null;
  //any name can be given
  const isOnline = useOnline();

  //windows key + . --> to get the shortcut for emojis

  // console.log("online in BOdy" , isOnline);
  if(!isOnline) {
    return <h1> 🔴 OOPS!!! Check your Internet connection</h1>
  }
  
  //not render  component  --> early return
  if(!allRestaurantData) return null;
  return allRestaurantData?.length === 0 ? <Shimmer /> : (
    <>
      <Section />
         <div className="rest_body">
           <div className="rest_header">
             <h1>
               {filteredRest.length === 0
                 ? "Sorry!!! We could not find your Restaurants"
                 : `${filteredRest.length} Restaurants`}
             </h1>
             <div className="search-container">
               <input
                 type="text"
                 className="search-input"
                 name="searchTxt"
                 placeholder="Search...."
                 value={searchTxt}
                 onChange={(e) => setSearchTxt(e.target.value)}
               />
               <button
                 type="button"
                 className="btn search-btn"
                 onClick={() => {
                   //need to filter Data
                   const data = filterData(searchTxt, allRestaurantData);
                   //update the data
                   setFilteredRest(data);
                 }}
               >
                 Search
               </button>
             </div>
           </div>
           <div className="rest-content">
             {filteredRest.length === 0 ? (
               <div
                 className="error"
                 style={{
                   gridColumn: "1 / span 4",
                   color: "red",
                   fontSize: "36px",
                   margin:"0 auto"
                 }}
               >
                 No Matching Results to your Filter!!
               </div>
             ) : (
               filteredRest?.map((item, index) => {
                 return <RestaurantCard {...item.data} key={item.data.id} />;
               })
             )}
           </div>
         </div>
     </>
  )

  //above code can be written like below under {} or like above
  // return (
  //   <>
  //     {allRestaurantData.length === 0 ? (
  //       <Shimmer />
  //     ) : (
  //       <>
  //       <Section />
  //       <div className="rest_body">
  //         <div className="rest_header">
  //           <h1>
  //             {filteredRest.length === 0
  //               ? "Sorry!!! We could not find your Restaurants"
  //               : `${filteredRest.length} Restaurants`}
  //           </h1>
  //           <div className="search-container">
  //             <input
  //               type="text"
  //               className="search-input"
  //               name="searchTxt"
  //               placeholder="Search...."
  //               value={searchTxt}
  //               onChange={(e) => setSearchTxt(e.target.value)}
  //             />
  //             <button
  //               type="button"
  //               className="btn search-btn"
  //               onClick={() => {
  //                 //need to filter Data
  //                 const data = filterData(searchTxt, allRestaurantData);
  //                 //update the data
  //                 setFilteredRest(data);
  //               }}
  //             >
  //               Search
  //             </button>
  //           </div>
  //         </div>

  //         <div className="rest-content">
  //           {filteredRest.length === 0 ? (
  //             <div
  //               className="error"
  //               style={{
  //                 display: "block",
  //                 color: "red",
  //                 fontSize: "36px",
  //                 margin: "0 auto",
  //               }}
  //             >
  //               No Results
  //             </div>
  //           ) : (
  //             filteredRest?.map((item, index) => {
  //               return <RestaurantCard {...item.data} key={item.data.id} />;
  //             })
  //           )}
  //         </div>
  //       </div>
  //       </>
  //     )}
  //   </>
  // );
};

export default Body;
