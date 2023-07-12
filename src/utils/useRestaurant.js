import { useEffect, useState } from "react";

const useRestaurant = async () => {

    const [allRestaurantData , setAllRestaurantData] = useState(null);

    useEffect(() => {
        //API restaurants
        getRestaurants();
      }, []);
    
      async function getRestaurants() {
        const res = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9654796&lng=77.7184638&page_type=DESKTOP_WEB_LISTING"
        );
        const data = await res.json();
        //optional chaining
        const actualData = data?.data?.cards[2]?.data?.data?.cards;
        console.log("actual data" , actualData);
        setAllRestaurantData(actualData);
      }

      return { allRestaurantData };
}

export default useRestaurant;