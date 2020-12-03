import React from "react";

import SearchArea from "./SearchArea";
import HomeListingsPreview from "./HomeListingsPreview";
import HomeListingsPreviewTwo from "./HomeListingsPreviewTwo";
import FirstHomeAdvertisment from "./FirstHomeAdvertisment";

const Home = () => {
  return (
    <div>
      <SearchArea />
      <FirstHomeAdvertisment />
      <HomeListingsPreview />
      <HomeListingsPreviewTwo />
    </div>
  );
};

export default Home;
