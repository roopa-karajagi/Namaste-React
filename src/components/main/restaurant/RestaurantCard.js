import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../../../constantData";
import './restaurant.css'

export const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  costForTwoString,
  id
}) => {
  // console.log(name, cuisines, cloudinaryImageId, avgRating); //---> data comes as expected
  return (
    <div className="card">
      <Link to={`/restaurant/${id}`} className="card-link">
        <img
          src={`${IMG_CDN_URL}${cloudinaryImageId}`}
          height={180}
          alt="card_image"
        />
        <div className="card-in">
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <button type="button" className="avg-rate">{avgRating}</button>
        </div>
        <div className="card-order">
          <div className="cost">{costForTwoString}</div>
          <button className="btn-cost">Order Now </button>
        </div>
      </Link>
    </div>
  );
};
