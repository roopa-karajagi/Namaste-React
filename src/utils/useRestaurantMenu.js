import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../constantData";

const useRestaurantMenu = (resId) => {

    const [ resData , setResData ] = useState(null);
    const [ groupData , setGroupData ] = useState(null);

    //api to fetch the data

    useEffect(function () {
        getRestaurants();
      }, []);
    
      async function getRestaurants() {
        const url = FETCH_MENU_URL + resId + '&submitAction=ENTER'
        const res = await fetch(url);
        const data = await res.json();
        setResData(data?.data?.cards[0]?.card?.card?.info);
        setGroupData(data?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1])
      }

      //return the new data

      return {
        resData , groupData
      }
}

export default useRestaurantMenu;