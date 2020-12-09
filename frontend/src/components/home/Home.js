import React, { useState } from "react";

import SearchArea from "./SearchArea";
import HomeListingsPreview from "./HomeListingsPreview";
import HomeListingsPreviewTwo from "./HomeListingsPreviewTwo";
import FirstHomeAdvertisment from "./FirstHomeAdvertisment";

const Home = () => {
  const [listings, setListings] = useState([]);

  return (
    <div>
      <SearchArea setListings={setListings}/>
      <FirstHomeAdvertisment />
      <HomeListingsPreview listings={listings} />
      <HomeListingsPreviewTwo />
    </div>
  );
};

export default Home;
