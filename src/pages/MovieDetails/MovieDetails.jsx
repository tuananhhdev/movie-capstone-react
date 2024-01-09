// import React, { useEffect, useState } from "react";
import { Rate, Tabs } from "antd";
import nhabanu from "./../../assets/nha-ba-nu.jpg";
import "./MovieDetails.css";
import "./../HomePage/LichChieuCumRap.css";
import { useEffect, useState } from "react";
import { listAPI } from "../../services/API";
import { Link, useLocation, useParams } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import moment from "moment";
import TrailerModal from "../../components/TrailerModal/TrailerModal";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { disableLoading, enableLoading } from "../../redux/LoadingSlice";
const MovieDetails = () => {
  const [openTraiLer, setOpenTrailer] = useState(false);

  const [movieId, setMovied] = useState([]);
  const { maPhim } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(enableLoading());
    listAPI
      .detail_film(maPhim)
      .then((res) => {
        setMovied(res.data.content);
        dispatch(disableLoading());
      })
      .catch((err) => {
        dispatch(disableLoading());
        console.log(err);
      });
  }, []);
  // console.log(movieId);
  const { hinhAnh, tenPhim, moTa, danhGia, ngayKhoiChieu, heThongRapChieu } =
    movieId;

  return (
    <div className=" bg-slate-950  mx-auto">
      <TrailerModal
        open={openTraiLer}
        close={() => setOpenTrailer(false)}
        movie={movieId}
      />
      <div className=" container py-10 md:block sm:block lg:flex gap-10 px-10">
        <img
          src={hinhAnh}
          alt=""
          className="object-cover w-[300px] h-[400px] rounded-xl "
        />
        <div className="title space-y-5 pt-5 lg:w-1/2 md:w-full text-white">
          <h1 className="text-white font-bold text-xl uppercase">
            <span className="text-green-500">Tên Phim: </span> {tenPhim}
          </h1>
          <h1 className="text-white font-bold">
            <span className="text-green-500">Ngày Chiếu: </span>
            {moment(ngayKhoiChieu).format("DD-MM-YYYY ")}
          </h1>
          <div className="rating">
            <h1 className="text-yellow-500 font-bold flex">
              Đánh Giá:{" "}
              <span className="text-yellow-500 ml-2 font-bold flex items-center">
                {danhGia} <AiFillStar />
              </span>{" "}
            </h1>
          </div>
          <p className="text-justify">{moTa}</p>
          <button
            className="px-5 py-3 bg-green-700 text-white rounded font-bold transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-300"
            onClick={() => setOpenTrailer(true)}
          >
            Xem Trailer
          </button>
        </div>
      </div>
      <div className=" cum_rap container py-5 w-full">
        <Tabs
          defaultActiveKey="1"
          tabPosition={"left"}
          style={{
            height: 572, // Set your desired fixed height here
            overflowY: "auto",
          }}
          items={(heThongRapChieu || []).map((item, index) => {
            return {
              label: (
                <img src={item.logo} className="w-10" alt={item.maHeThongRap} />
              ),
              key: item.maHeThongRap,
              children: (
                <div className="space-y-3 mt-5 px-2">
                  {item.cumRapChieu.map((i, d) => (
                    <>
                      <div
                        className="font-medium text-xl text-green-500"
                        key={i}
                      >
                        {i.tenCumRap}
                      </div>
                      <div className="grid mb:grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-5 pr-5">
                        {i.lichChieuPhim.map((item, index) => (
                          <Link to={`/book-ticket/${item.maLichChieu}`}>
                            <div className="space-x-2 bg-gray-300 font-bold border mb:text-xs border-gray-400 rounded-md text-base p-3 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-green-700 duration-300 hover:font-bold hover:border-0 ">
                              <span className="text-green-600">
                                {moment(item.ngayChieuGioChieu).format(
                                  "DD-MM-YYYY"
                                )}
                              </span>
                              <span className="text-red-500">
                                {moment(item.ngayChieuGioChieu).format("hh-mm")}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </>
                  ))}
                </div>
              ),
            };
          })}
        />
      </div>
    </div>
  );
};

export default MovieDetails;
