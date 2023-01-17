import './searchBar.css'
const SearchBar = () =>{
    return (
        <div className="search-container">
        <input
          type="text"
          className="search-input"
          name="searchTxt"
          placeholder="Search...."
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
        />

        <button
          type="button"
          className="btn search-btn"
          onClick={() => {
            //need to filter Data
            const data = filterData(searchTxt, restaurantData);
            //update the data
            setRestaurantData(data);
          }}
        >
          Search
        </button>
      </div>
    )
}

export default SearchBar;