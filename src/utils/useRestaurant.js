import { useEffect, useState } from "react";
import { FETCH_RESTAURANT_URL } from "../constantData";

const useRestaurant = async () => {

    const [allRestaurantData , setAllRestaurantData] = useState(null);

    useEffect(() => {
        //API restaurants
        getRestaurants();
      }, []);
    
      async function getRestaurants() {
        const res = await fetch(FETCH_RESTAURANT_URL);
        const data = await res.json();
        //optional chaining
        const actualData = data?.data?.cards[2]?.data?.data?.cards;
        console.log("actual data" , actualData);
        setAllRestaurantData(actualData);
      }

      return { allRestaurantData };
}

export default useRestaurant;