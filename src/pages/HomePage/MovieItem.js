import { Button } from "antd";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./MovieItem.scss";
const MovieItem = ({ props }) => {
  return (
    <div className="movie-item">
      <img
        alt="example"
        src={props.hinhAnh}
        style={{ height: "300px", borderRadius: "10px" }}
        className="w-full object-cover transition duration-300"
      />
      <div className="item-content">
        <h1 className="item-title text-white font-bold text-base">
          {props.tenPhim}
        </h1>

        <Link to={`/movie-details/${props.maPhim}`}>
          <div className="flex justify-center items-center">
            <button className="btn-film translate-y-10  w-3/4 py-2 my-3 bg-green-700 text-white rounded font-bold transition ease-in-out delay-15  hover:scale-110 hover:bg-red-700 duration-300">
              Xem Chi Tiết
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MovieItem;
