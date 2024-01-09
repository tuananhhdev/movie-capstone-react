import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { listAPI } from "../../services/API";

const MovieShowing = () => {
  const [danhSach, setDanhSach] = useState([]);

  useEffect(() => {
    listAPI
      .get_movie()
      .then((res) => {
        console.log(res);
        setDanhSach(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const findMovieStyle = {
    position: "fixed",
    zIndex: "100",
  };
  return (
    <>
      <Carousel>
        <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4  sm:grid-cols-2 lg:grid-cols-4 sm:mt-12 lg:mt-20 sm:text-left ">
          {danhSach.map((item, index) => {
            return (
              <div key={index} className="container">
                <img
                  style={{
                    width: "210px",
                    height: "314px",
                    objectFit: "cover",
                    borderRadius: "5px",
                    padding: "0px",
                  }}
                  src={item.hinhAnh}
                  alt=""
                />
                <div className="flex">
                  <h2
                    style={{
                      background: "#FB4226",
                      color: "#fff",
                      padding: "4px 5px",
                      borderRadius: "5px",
                      fontSize: "18px",
                      marginTop: "12px",
                    }}>
                    C18
                  </h2>
                  <h2
                    className="font-semibold"
                    style={{
                      fontSize: "18px",
                      marginTop: "12px",
                      marginLeft: "12px",
                    }}>
                    {item.tenPhim}
                  </h2>
                </div>
                <h5 className="truncate mt-5 mb-10">{item.moTa}</h5>
              </div>
            );
          })}
        </div>
      </Carousel>
    </>
  );
};

export default MovieShowing;
