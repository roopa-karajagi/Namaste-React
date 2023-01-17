import { IMG_CDN_URL } from "../../../constantData";
import './restaurant.css'

export const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
}) => {
  // console.log(name, cuisines, cloudinaryImageId, avgRating); //---> data comes as expected
  return (
    <div className="card">
      <a href="/" className="card-link">
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
        
      </a>
    </div>
  );
};
