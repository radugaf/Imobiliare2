import React, { useState } from "react";

import SearchArea from "./SearchArea";
import HomeListingsPreview from "./HomeListingsPreview";
import HomeListingsPreviewTwo from "./HomeListingsPreviewTwo";
import FirstHomeAdvertisment from "./FirstHomeAdvertisment";

const Home = () => {
  const [listings, setListings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [listingsPerPage, setListingsPerPage] = useState(3);
  const [active, setActive] = useState(1);

  const indexOfLastListing = currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;
  const currentListings = listings.slice(
    indexOfFirstListing,
    indexOfLastListing
  );

  const visitPage = (page) => {
    setCurrentPage(page);
    setActive(page);
  };

  const previous_number = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      setActive(currentPage - 1);
    }
  };

  const next_number = () => {
    if (currentPage !== Math.ceil(listings.length / 3)) {
      setCurrentPage(currentPage + 1);
      setActive(currentPage + 1);
    }
  };

  return (
    <div>
      <SearchArea setListings={setListings}/>
      <FirstHomeAdvertisment />
      <HomeListingsPreview listings={currentListings} />
      <HomeListingsPreviewTwo />
    </div>
  );
};

export default Home;
