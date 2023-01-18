import { RestaurantCard } from "./restaurant/RestaurantCard";
import { restaurantList } from "../../constantData";
import { useEffect, useState } from "react";
import "./body.css";
import Shimmer from "../shimmer/Shimmer";

// functions needs to be outside for cleaner code
const filterData = (searchTxt, restaurantData) => {
  return restaurantData.filter((res) =>
    res.data?.name.toLocaleLowerCase().includes(searchTxt.toLocaleLowerCase())
  );
};

//what is state and why
//what is Hooks
//what is useState

//it is like passing an arguments to functions and can be used as params in our function
const Body = () => {
  //If we just call the API like this we get CORS error bcz browser doesn't allows to do this connection from local host to any api which are on different origins.

  const [searchTxt, setSearchTxt] = useState("");
  const [allRestaurantData, setAllRestaurantData] = useState([]);
  const [filteredRest, setFilteredRest] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);
    setSearchTxt('');
    //API restaurants
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const res = await fetch(
      " https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9654796&lng=77.7184638&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await res.json();
    //optional chaining
    const actualData = data?.data?.cards[2]?.data?.data?.cards;
    setAllRestaurantData(actualData);
    setFilteredRest(actualData);
    // setLoading(false);
  }

  // why we need allRestaurantData when we have filtered data 
  //bcz when we search will have only filtered data , and the data got updated with filtered data , so when we are searching we don't want to loose all restaurants data , so we need this.

  //not render  component  --> early return
  if(!allRestaurantData) return null;

  return (
    <>
      {allRestaurantData.length === 0 ? (
        <Shimmer />
      ) : (
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
                  display: "block",
                  color: "red",
                  fontSize: "36px",
                  margin: "0 auto",
                }}
              >
                No Results
              </div>
            ) : (
              filteredRest?.map((item, index) => {
                return <RestaurantCard {...item.data} key={item.data.id} />;
              })
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
