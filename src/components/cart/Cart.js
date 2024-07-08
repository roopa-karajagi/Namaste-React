import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { addCartItem, clearCart, removeItem } from "../../modules/cartSlice";
import { cartQuantity } from "../../utils/Helper";
import './cart.css'

const Cart = () => {
  //Major Performance  Improvement --> subscribe only to the specific portion of the store
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  console.log("cartItems In Cart" , cartItems);
  //Perform issue --> when we subscribe to whole store --> whenever store changes it will render the cartSlice and rerender the cart page
  //store = useSelector(store => store);

  const handleClearItems = () => {
    dispatch(clearCart());
  };

  const handleAddItem = (item) => {
    dispatch(addCartItem(item))
  }

  const removeCartItem = (itemId , quantity) => {
    dispatch(removeItem(itemId , quantity));
  }

  
  return (
    <div className="cart-content">
      <div className="m-8">
      <div className="cart-header flex justify-between m-7">
        <div className="font-bold text-2xl inline-block">
          Items Added: {cartQuantity(cartItems)}
        </div>
        <button
          className="p-2 text-black font-semibold text-md"
          onClick={() => handleClearItems()}
        >
          Clear All
        </button>
      </div>
      <div className="mt-8 border-dashed border-t-2 border-gray-300">
        {cartItems.map((item) => (
          <div className="flex justify-between" key={item.id}>
          <CartItem  {...item}/>
          <div className="cart-buttons">
                <div className="remove-btn font-bold text-2xl" onClick={() => removeCartItem(item.id , item.quantity)}> - </div>
                <div className="font-bold text-2xl">{item.quantity}</div>
                <div className="add-btn font-bold text-2xl" onClick={() => handleAddItem(item)}> + </div>
            </div>
            </div>
        ))}
       
      </div>
    </div>
    </div>
  );
};

export default Cart;
