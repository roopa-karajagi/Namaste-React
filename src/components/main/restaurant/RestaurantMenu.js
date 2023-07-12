import { useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../../constantData";
import Shimmer from "../../shimmer/Shimmer";
import './resMenu.css'
import useRestaurantMenu from "../../../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  // TO read dynamic URL from params
  const { resId } = useParams();

 const { resData , groupData } = useRestaurantMenu(resId);

  return (
    <>
    {
      !resData ? <Shimmer/>  : (
        <div className="menu">
        <div className="menuItem">
          <h1> Restaurant Id : {resId}</h1>
          <h2>{resData.name}</h2>
          <img src={IMG_CDN_URL + resData.cloudinaryImageId} alt="Food" />
          <h3>{resData.areaName}</h3>
          <h3>{resData.city}</h3>
          <h3>{resData.costForTwoMessage}</h3>
          <h3>{resData.avgRating}</h3> 
          </div>
          <div className="menuList">
            <h1> Menu</h1>
            {
              groupData?.card?.card?.itemCards?.slice(0,20).map(item => {
                return (
                  <div className="menuName" key={item?.card?.info?.id}>
                  <ul>
                    <li>{item?.card?.info?.name}</li>
                  </ul>
                  </div>
                )     
              })
            }
          </div>
          </div>
      )
    }
    </>
  );
};

export default RestaurantMenu;
