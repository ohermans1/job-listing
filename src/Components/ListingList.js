import { useEffect, useState } from "react";
import "./ListingList.scss";
import Listing from "./Listing/Listing";
import Filters from "./Filters/Filters";

const ListingList = () => {
  const [listingData, setListingData] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const getData = () => {
    fetch("./data.json")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setListingData(data);
      })
      .catch(function (err) {
        console.log(err, " error");
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const setOptions = clickedObject => {
    let newFilter = clickedObject.target.innerHTML;
    setSelectedFilters(prevFilters => {
      if (selectedFilters.includes(newFilter)) {
        return [...prevFilters];
      }
      return [...prevFilters, newFilter];
    });
  };

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  const removeFilter = item => {
    setSelectedFilters(currentFilters => {
      return currentFilters.filter(filter => item !== filter);
    });
  };

  return (
    <div className="listing-list">
      <Filters selectedFilters={selectedFilters} clearFilterHandler={clearFilters} removeFilterHandler={removeFilter}></Filters>
      {listingData.map(listing => {
        return <Listing listingDetails={listing} key={listing.id} selectOptions={setOptions} selectedFilters={selectedFilters}></Listing>;
      })}
    </div>
  );
};

export default ListingList;
