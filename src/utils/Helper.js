// functions needs to be outside for cleaner code
export const filterData = (searchTxt, restaurantData) => {
    return restaurantData.filter((res) =>
      res.info?.name.toLocaleLowerCase().includes(searchTxt.toLocaleLowerCase())
    );
  };

export const cartQuantity = (cartItems) => {
  return cartItems.reduce((acc , curr) => {
  return acc + curr.quantity;
},0);
}
  