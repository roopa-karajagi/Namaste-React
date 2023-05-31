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
  //local state Variables
  // this also works
  // const searchValue = useState('');
  // const [searchTxt, setSearchTxt] = searchValue;
  const [ searchTxt , setSearchTxt] = useState('');
  const [restaurantData, setRestaurantData] = useState(restaurantList);
  const [searchClicked , setSearchClicked] = useState('true');
  
  // const [searchClicked , setSearchClicked] = useState(false);
  // this works when we write it like this --> <h1>{`${searchClicked}`}</h1>

  // but doesn't work in javascript tags
  // <h1>{searchClicked}</h1> --> it doesn't print true/false here 
  
  //bcz --> bcz in javascript it is boolean -- it can not be printed

  //so it should be string 'true' in js to print it

  // diff algorithm reconcilation is happening and changing that particualr element

  //for oneline function we can declare our function in onchange itself
  //   const handleChange = (e) => {
  //     setSearchTxt(e.target.value);
  //   };

 // <button onClick={(e) => deleteItem(e , elemnt)}> Delete</button>
//  can also be written without e(event name as arguments) , we can pass directly what we want to pass
//  <button onClick={() => deleteItem(elemnt)}> Delete</button>

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
            <h1>{searchClicked}</h1>
          <button
            type="button"
            className="btn search-btn"
            onClick={() => {
              console.log(searchClicked);
              searchClicked === 'true' ? setSearchClicked('false') : setSearchClicked('true');
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
