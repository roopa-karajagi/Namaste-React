import { Link } from 'react-router-dom'
import { IMG_CDN_URL } from "../../../constantData";
import './restaurant.css'

export const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  sla,
  costForTwo,
  id
}) => {
  // console.log(name, cuisines, cloudinaryImageId, avgRating); //---> data comes as expected
  return (
    <div className="card p-4 shadow-md bg-slate-50">
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
          <div className="avg-rating flex items-center justify-around">
            <span className="icon-start"></span>
            <span className='lining-nums'>{avgRating}</span>
        </div>
        <div>
        <span style={{display:"inline-block",fontSize: "28px" , color: "#000000",padding: " 5px 8px"}}>•</span>
        </div>
        <div className="time lining-nums min-w-12">{sla?.slaString}</div>
        <span style={{display:"inline-block",fontSize: "28px" , color: "#000000",padding: "5px 8px"}}>•</span>
        <div className="cost lining-nums min-w-24"> {costForTwo}</div>
        </div>
      </Link>
    </div>
  );
};
