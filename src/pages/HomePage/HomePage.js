import React from "react";
import Banner from "./Banner";
import LichChieuRap from "./LichChieuRap";
// import MovieShowing from "./MovieShowing";
import ListFilm from "./ListFilm";
const HomePage = () => {
  return (
    <div className="bg-slate-950">
      <Banner />

      {/* <MovieShowing /> */}
      <div className="container space-y-10 py-10">
        <ListFilm />
        <div className="md:hidden mb:hidden lg:block sm:hidden">
          <LichChieuRap />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
