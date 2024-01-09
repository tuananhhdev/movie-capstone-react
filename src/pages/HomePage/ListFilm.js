import { Button, Card, Carousel, Image } from "antd";
import React, { useEffect, useState } from "react";
import { listAPI } from "../../services/API";
// import YouTube from "react-youtube";
import { useDispatch } from "react-redux";
import { disableLoading, enableLoading } from "../../redux/LoadingSlice";
import MovieItem from "./MovieItem";
//list film
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { NavLink } from "react-router-dom";

const ListFilm = () => {
  const [listFilm, setListFilm] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(enableLoading());
    listAPI
      .get_list_film()
      .then((res) => {
        setListFilm(res.data.content);
        // dispatch(disableLoading());
      })
      .catch((err) => {
        console.log(err);
        // dispatch(disableLoading());
      });
  }, []);
  const contentStyle = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  console.log(listFilm);
  const setting = {
    autoplay: true,
  };
  return (

    // <div className="">
    //   <div className="max-w-screen-xl mx-auto px-4 py-10">
    //     <h2 className="text-3xl font-bold mb-6">Danh sách phim</h2>
    //     <div className="grid grid-cols-4 gap-5">
    //       {listFilm.map((movie, index) => (
    //         <MovieItem
    //           key={movie.maPhim}
    //           movieId={movie.maPhim}
    //           image={movie.hinhAnh}
    //           movieName={movie.tenPhim}
    //           description={movie.moTa}
    //         />
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="lg:px-20 sm:px-8 mb:px-8">
        <h2 className="text-3xl font-bold mb-6 text-green-500 text-center">
          Danh sách phim
        </h2>

        <Swiper
          className=""
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={5}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            300: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          scrollbar={{ draggable: true }}
        >
          {listFilm.map((i, d) => (
            <SwiperSlide key={d}>
              <NavLink to={`/movie-details/${i.maPhim}`}>
                <MovieItem props={i} />
              </NavLink>
            </SwiperSlide>

          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ListFilm;
