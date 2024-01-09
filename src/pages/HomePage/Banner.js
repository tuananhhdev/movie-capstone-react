import { Carousel } from "antd";
import React, { useEffect, useState } from "react";
import { listAPI } from "../../services/API";
import { useDispatch } from "react-redux";
import { disableLoading, enableLoading } from "../../redux/LoadingSlice";

import ModalVideo from "react-modal-video";
//new banner
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Banner.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} before:content-[""]`}
      style={{
        ...style,
        display: "block",
        insetInlineEnd: "30px",
        color: "white",
        fontSize: "40px",
      }}
      onClick={onClick}
    >
      <i className="fa-solid fa-angle-right" />
    </div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} before:content-[""]`}
      style={{
        ...style,
        display: "block",
        zIndex: 1,
        insetInlineStart: "20px",
        fontSize: "40px",
        color: "white",
      }}
      onClick={onClick}
    >
      <i className="fa-solid fa-angle-left" />
    </div>
  );
}
const Banner = () => {
  // set trang thai loading ban daau

  const dispatch = useDispatch();
  const [banner, setBanner] = useState([]);
  const [isOpenModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(enableLoading());
    listAPI
      .get_banner()
      .then((res) => {
        setBanner(res.data.content);
        dispatch(disableLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(disableLoading());
      });
    // .finally(() => {
    //   dispatch(disableLoading);
    // });
  }, []);
  console.log(banner);

  const setting = {
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        hashNavigation={{
          watchState: true,
        }}
        navigation={true}
        pagination={{ clickable: true }} // Add this line to enable pagination
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
      >
        {banner.map((i, d) => (
          <SwiperSlide key={d}>
            <div className="w-full md::h-[95vh] sm:h-[70vh] mb:h-[70vh] lg:h-[95vh] relative ">
              <img
                src={i.hinhAnh}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;
