import { IMG_CDN_URL } from "../../constantData"

const CartItem = ({name,imageId,price, defaultPrice ,category}) => {
    let definedPrice = price ? (price / 100).toFixed(2) : (defaultPrice / 100).toFixed(2); 
    return (
        <div className="item-container flex m-7">
            <div className="image-container">
            <img src={IMG_CDN_URL + imageId} alt="foodItem"  className="rounded h-48 w-64 object-cover"/>
            </div>
            <div className="item-details flex flex-col ml-8 text-lg font-bold flex-1">
            <div className="category">
                <label>Category:</label>
                <span>{category}</span> 
            </div>
            <div className="font-medium">{name}</div>
            <span className="rupee lining-nums">{ definedPrice}</span>
            </div>  
        </div>
    )
}

export default CartItem;