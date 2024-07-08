import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../../../constantData";
import { addCartItem } from "../../../modules/cartSlice";

const ItemCard = ({ itemCards, length }) => {

  const dispatch =  useDispatch();

  const addToCart = (item) => {
    console.log(item);
    dispatch(addCartItem(item));
  };

  return (
    <div>
      {itemCards?.slice(0, length)?.map((item, index) => {
        let info = item && item.card.info;
        return (
          <div className="item_container" key={info?.id}>
            <div className="item_details flex justify-between h-1/6 py-5">
              <div className="details_container  w-2/3">
                <div className="item_name font-extrabold text-xl mt-2">
                  {info?.name}
                </div>
                <div className="item_price font-bold text-lg mt-2 text-justify">
                  <span className="rupee lining-nums">
                    {info.price ? info.price / 100 : info.defaultPrice / 100}
                  </span>
                </div>
                <div className="item_desc break-words mt-4 text-base">
                  {info?.description}
                </div>
              </div>
              <div className="image_container flex flex-col h-32 relative">
                <div>
                  <img
                    src={IMG_CDN_URL + info?.imageId}
                    alt="menuImg"
                    className="w-48 h-28 object-cover rounded-md"
                  />
                </div>
                <div className="item-add-button w-32 h-12">
                  <div className="text-green-500 cursor-pointer font-extrabold text-base leading-[2.75]" onClick={() => addToCart(info)}>
                    ADD
                  </div>
                </div>
              </div>
            </div>
            <div className="border-solid border border-gray-200" />
          </div>
        );
      })}
    </div>
  );
};

export default ItemCard;
