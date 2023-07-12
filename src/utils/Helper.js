// functions needs to be outside for cleaner code
export const filterData = (searchTxt, restaurantData) => {
    return restaurantData.filter((res) =>
      res.data?.name.toLocaleLowerCase().includes(searchTxt.toLocaleLowerCase())
    );
  };
  