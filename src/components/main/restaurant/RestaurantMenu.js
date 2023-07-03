import { useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../../constantData";
import Shimmer from "../../shimmer/Shimmer";
import './resMenu.css'

const RestaurantMenu = () => {

  // TO read dynamic URL from params
  const { resId } = useParams();
  console.log(resId);

  const [ resData , setResData ] = useState(null);
  const [ groupData , setGroupData ] = useState([]);

  useEffect(function () {
    getRestaurants();
  }, []);

  // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=15.3647083&lng=75.1239547&restaurantId=98313&submitAction=ENTER

  async function getRestaurants() {
    const res = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=15.3647083&lng=75.1239547&restaurantId=${resId}&submitAction=ENTER`
    );
    const data = await res.json();
    console.log("data .........." , data);
    setResData(data?.data?.cards[0]?.card?.card?.info);
    setGroupData(data?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1])
  }

  // console.log("resData" , groupData);

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
                  <div className="menuName">
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
