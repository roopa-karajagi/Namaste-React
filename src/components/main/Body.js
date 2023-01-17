import { RestaurantCard } from "./restaurant/RestaurantCard";
import { restaurantList } from "../../constantData";
import { useState } from "react";
import './body.css'

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
  //   const searchTxt = "KFC"; -- this is Normal variable declaration , but i add this to input , i can't change the input value
  /***
   * In html if i just write input we can write/change the value but in react it doesn't happens
   * this is one example where html is different than React
   * In react we need to ***bind*** the value to the Field and change the input text
   * e --> synthetic event , has all the info regarding on change element
   * local variables are not preffered in React
   * if we need to maintain a variable , then we need to use React variable.
   * that is State (local variable , which we can update/change the value)
   *  
   * we need to do a data binding in react in the application to update the variable to work
   * State: useState() Hook --> to maintain a local variable we need state in react
   * useState : these state is created using useState Hook , to create local state variable
   * useState returns an array , first element is variable , function to update the variable
   * 
   * const searchValue =  useState()
   * const [searchVal , setSearchVal] = searchValue;
   * 
   * reading and writing the state at the same time and that is called 2 way binding.
   * 
   * react will not re-render the application to display it on UI when there is change in the local variable , so react needs state to render application and display it on UI and react will track these  variable
   * Hooks: it is normal function , but it has specific functions for it
   * 
   * 
   * var searchTxt ='KFC'
   * <input
            type="text"
            className="search-input"
            name="searchTxt"
            placeholder="Search...."
            value={searchTxt}
            onChange={(e) => console.log(e)}
          />

   * 
   */
  const [searchTxt, setSearchTxt] = useState("");
  const [restaurantData, setRestaurantData] = useState(restaurantList);
  const [searchClicked , setSearchClicked] = useState('true');

  //it does not print true --> bcz in javascript it is boolean -- it can not be printed
  //so it should be string 'true' in js to print it

  // diff algorithm reconcilation is happening and changing the that particualr element

  //for oneline function we can declare our function in onchange itself
  //   const handleChange = (e) => {
  //     setSearchTxt(e.target.value);
  //   };

  return (
    <div className="rest_body">
      <div className="rest_header">
        <h1>{restaurantData.length > 0 ? `${restaurantData.length} Restaurants` :'Soorry..., We did not find your restaurant'} </h1>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            name="searchTxt"
            placeholder="Search...."
            value={searchTxt}
            onChange={(e) => setSearchTxt(e.target.value)}
          />
            <h1>{`${searchClicked}`}</h1>
          <button
            type="button"
            className="btn search-btn"
            onClick={() => {
              console.log(searchClicked);
              setSearchClicked(!searchClicked);
              //need to filter Data
              const data = filterData(searchTxt, restaurantData);
              //update the data
              setRestaurantData(data);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="rest-content">
        {restaurantData.length === 0 ? (
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
          restaurantData?.map((item, index) => {
            return <RestaurantCard {...item.data} key={item.data.id} />;
          })
        )}
      </div>
    </div>
  );
};

export default Body;
