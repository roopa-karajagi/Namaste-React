import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../../constantData";
import { Shimmer } from "../../shimmer/Shimmer";
import "./resMenu.css";
import useRestaurantMenu from "../../../utils/useRestaurantMenu";
import { addCartItem, removeItem } from "../../../modules/cartSlice";
import { useDispatch } from "react-redux";
import ItemCard from "./ItemCard";

const RestaurantMenu = () => {
  // TO read dynamic URL from params
  const { resId } = useParams();

  const { resData, groupData } = useRestaurantMenu(resId);
  const [itemCards, setItemCards] = useState();
  const [count, setCount] = useState(20);

  console.log("res Data", resData);
  console.log("Group Data", groupData);

  useEffect(() => {
    console.log("euser");
    if (groupData) {
      console.log("useEffect if");
      setItemCards(groupData?.card?.card?.itemCards);
      if (groupData?.card?.card?.itemCards?.length < count) {
        setCount(groupData?.card?.card?.itemCards?.length);
      }
    }
  }, [groupData]);
  
  let navigate = useNavigate();

  const handleLoadMore = () => {
    let length = itemCards?.length;
    let diff = length - count;
    if (diff > 20) {
      setCount(count + 20);
    } else if (diff < 20) {
      setCount(count + diff);
    }
  };
  const handleBackButton =() => {
        navigate('/')
  }

  return (
    <>
      {!resData ? (
        <Shimmer />
      ) : (
        <div className="restaurant_menu_container">
          <div className="back-button flex cursor-pointer" onClick={handleBackButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </div>
          <div className="RestaurantHeader_container md:w-2/3 lg:w-11/12">
            <div className="RestaurantHeader_wrapper">
              <div className="RestaurantNameAddress_wrapper">
                <div>
                  <p className="text-2xl mb-2 font-bold capitalize text-black">
                    {resData?.name}
                  </p>
                  <p className="text-md mb-1 text-ellipsis text-gray-500">
                    {resData?.cuisines.join(",")}
                  </p>
                </div>
                <div className="RestaurantArea_wrapper h-4">
                  <p className="mb-2">
                    {resData?.areaName} - {resData?.city}
                  </p>
                  <button className="star-rating">
                    <span>
                      <p className="inline normal-nums mr-2">
                        {resData?.avgRatingString}
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 inline"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </span>
                  </button>
                  <div className="total-rating ml-4 text-xl align-middle">
                    <span>{resData?.totalRatingsString}</span>
                  </div>
                </div>
              </div>
              <div className="RestaurantImage_wrapper">
                <img
                  src={IMG_CDN_URL + resData.cloudinaryImageId}
                  alt="img"
                  style={{ height: "150px" }}
                />
              </div>
            </div>
            <hr className="border-dashed border border-gray-300 mb-4" />
            <div className="RestaurantHeader_marginBottom">
              <ul className="RestaurantTimeCost_wrapper font-bold text-black">
                <li className="RestaurantTimeCost_item inline-flex items-center">
                  <svg
                    className="RestaurantTimeCost_icon mr-3"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                  >
                    <circle
                      cx="9"
                      cy="9"
                      r="8.25"
                      stroke="#3E4152"
                      strokeWidth="1.5"
                    ></circle>
                    <path
                      d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
                      fill="#3E4152"
                    ></path>
                  </svg>
                  <span className="text-xl">{resData?.costForTwoMessage}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="Recommended_Menu relative md:w-2/3 lg:w-11/12">
            <div className="main_container">
              <div className="Recommended_title flex justify-between mb-7">
                <div className="font-bold text-2xl">
                  {groupData?.card?.card?.title}({itemCards?.length})
                </div>
                <span> Arrow Mark</span>
              </div>
              <div className="Recommended_menuList">
                {count < itemCards?.length && (
                  <>
                    <ItemCard itemCards={itemCards} length={count} />
                    <div className="load-more relative mt-6 mb-6">
                      <button
                        className="text-slate-500 font-bold px-4 py-2 border border-solid border-slate-400 rounded-md text-xl letter tracking-normal"
                        onClick={handleLoadMore}
                      >
                        {" "}
                        Load More{" "}
                      </button>
                    </div>
                  </>
                )}
                {count === itemCards?.length && (
                  <ItemCard itemCards={itemCards} length={count} />
                )}
              </div>
            </div>
          </div>
        </div>
        // <div className="flex">
        // <div className="menu-container">
        //   <div className="flex flex-col m-10 gap-1">
        //   <h2>{resData.name}</h2>
        //   <img src={IMG_CDN_URL + resData.cloudinaryImageId} alt="Food" className="h-48 w-64" />
        //   <h3>{resData.areaName}</h3>
        //   <h3>{resData.city}</h3>
        //   <h3>{resData.costForTwoMessage}</h3>
        //   <h3>{resData.avgRating}</h3>
        //   </div>
        //   </div>

        //   <div className="menuList">
        //     <h1 className="m-5 font-bold text-4xl"> Menu</h1>
        //     {
        //       groupData?.card?.card?.itemCards?.slice(0,20).map(item => {
        //         const itemInfo = item && item?.card?.info;
        //         return (
        //           <div key={itemInfo.id} className="flex mb-2">
        //             <div className="p-2">{itemInfo.name}</div>
        //             <button className="p-1 border-solid border border-indigo-600 text-blue-600" onClick={() => addFoodItem(itemInfo)}>Add Item</button>
        //             <button className="p-1 ml-2 border-red-500 border-solid border text-red-800" onClick={() => removeFoodItem(itemInfo)}>Remove Item</button>
        //           </div>
        //         )
        //       })
        //     }
        //   </div>
        //   </div>
      )}
    </>
  );
};

export default RestaurantMenu;
