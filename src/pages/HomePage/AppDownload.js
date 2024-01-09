import React from "react";
import { Carousel } from "antd";
import { NavLink } from "react-router-dom";
const AppDemo = () => {
  const contentStyle = [
    {
      background: "url(./img/app_slider1.jpg)",
      height: "425px !important",
      with: "196px !important",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    {
      background: "url(./img/app_slider2.jpg)",
      height: "425px !important",
      with: "196px !important",
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: "20px",
    },
    {
      background: "url(./img/app_slider3.jpg)",
      height: "425px",
      with: "196px",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    {
      background: "url(./img/app_slider4.jpg)",
      height: "425px",
      with: "196px",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    {
      background: "url(./img/app_slider5.jpg)",
      height: "425px",
      with: "196px",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    {
      background: "url(./img/app_slider6.jpg)",
      height: "425px",
      with: "196px",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  ];
  const renderSlider = () => {
    return contentStyle.map((item, index) => {
      return (
        <div key={index}>
          <div style={item}></div>
        </div>
      );
    });
  };
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        background: "url(./img/backapp.b46ef3a1.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "500px",
      }}>
      <div className="row text-white container justify-content-evenly align-items-center my-auto">
        <div className="col-6 col-sm">
          <h4
            className="font-bold"
            style={{ fontSize: "32px", marginBottom: "40px" }}>
            Ứng dụng tiện lợi dành cho
          </h4>
          <h4
            className="font-bold"
            style={{
              fontSize: "32px",
              marginBottom: "40px",
            }}>
            người yêu điện ảnh
          </h4>
          <p
            className="font-bold"
            style={{
              marginBottom: "50px",
            }}>
            Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
            đổi quà hấp dẫn.
          </p>
          <a
            className="cursor-pointer hover:bg-orange-800 duration-400"
            href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197"
            role="button"
            style={{
              background: "#FB4226",
              padding: "15px",
              borderRadius: "6px",
              textDecoration: "none",
              color: "#fff",
            }}>
            App miễn phí - Tải về ngay!
          </a>
          <div
            className="flex"
            style={{
              alignItems: "center",
            }}>
            <p
              style={{
                marginTop: "40px",
              }}>
              TIX có hai phiên bản
            </p>
            <div
              style={{
                transform: "translateY(20px)",
              }}>
              <a
                style={{}}
                className="mx-1"
                href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197"
                target="_blank">
                IOS
              </a>

              <span>&</span>
              <a
                className=" mx-1"
                href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                role="button"
                target="_blank">
                ANDROID
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-6 col-sm p-0"
          style={{
            background: "url(./img/background_app.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            height: "400px",
            width: "200px",
          }}>
          <Carousel autoplay dots={false}>
            {renderSlider()}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default AppDemo;
