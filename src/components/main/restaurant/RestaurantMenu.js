import { useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../../constantData";
import Shimmer from "../../shimmer/Shimmer";

const RestaurantMenu = () => {

  // TO read dynamic URL from params
  const { resId } = useParams();
  console.log(resId);

  const [ resData , setResData ] = useState(null);
  const [ groupData , setGroupData ] = useState([]);

  useEffect(function () {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const res = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9654796&lng=77.7184638&restaurantId=${resId}`
    );
    const data = await res.json();
    console.log("data .........." , data);
    setResData(data?.data?.cards[0]?.card?.card?.info);
    setGroupData(data?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards)
  }

  console.log("resData" , groupData);

  return (
    <>
    {
      !resData ? <Shimmer/>  : (
        <div>
          <h1> Restaurant Id : {resId}</h1>
          <h2>{resData.name}</h2>
          <img src={IMG_CDN_URL + resData.cloudinaryImageId} alt="Food" />
          <h3>{resData.areaName}</h3>
          <h3>{resData.city}</h3>
          <h3>{resData.costForTwoMessage}</h3>
          <h3>{resData.avgRating}</h3> 
          </div>
      )
    }
    </>
  );
};

export default RestaurantMenu;
