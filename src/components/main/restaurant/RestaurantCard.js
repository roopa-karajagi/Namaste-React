import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../../../constantData";
import './restaurant.css'

export const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  slaString,
  costForTwoString,
  id
}) => {
  // console.log(name, cuisines, cloudinaryImageId, avgRating); //---> data comes as expected
  return (
    <div className="card">
      <Link to={`/restaurant/${id}`} className="card-link">
        <img
        className= "h-48 w-full"
          src={`${IMG_CDN_URL}${cloudinaryImageId}`}
          alt="card_image"
        />
        <div className="card-details">
        <div className="res-name">{name}</div>
        <div className="res-sub">{cuisines.join(", ")}</div>
        </div>
        <div className="card-rating">
          <div className="avg-rating">
            <span className="icon-start"></span>
            <span>{avgRating}</span>
        </div>
        <div>
        <span style={{display:"inline-block",fontSize: "24px" , color: "#000000",padding: " 5px 10px"}}>•</span>
        </div>
        <div className="time">{slaString}</div>
        <span style={{display:"inline-block",fontSize: "24px" , color: "#000000",padding: "5px 10px"}}>•</span>
        <div className="cost"> {costForTwoString}</div>
        </div>
      </Link>
    </div>
  );
};
