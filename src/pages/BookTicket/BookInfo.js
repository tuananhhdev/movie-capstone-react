import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { listAPI } from "../../services/API";
import { message } from "antd";

const BookInfo = ({ thongTinPhim }) => {
  const { arrGheDangDat } = useSelector((state) => state.ticketSlice);
  const nav = useNavigate();
  console.log(thongTinPhim);
  const datVeBtn = () => {
    if (!localStorage.getItem("user_info")) {
      message.error("Vui lòng đăng nhập để đặt vé");
      return setTimeout(() => {
        nav("/login");
      }, 2000);
    } else {
      if (arrGheDangDat.length > 0) {
        let data = {
          maLichChieu: thongTinPhim.maLichChieu,
          danhSachVe: arrGheDangDat,
        };
        listAPI
          .bookTicket(data)
          .then((res) => {
            message.success(res.data.content);
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          })
          .catch((err) => {
            console.log(err);
            message.error("có lỗi xảy ra");
          });
      } else {
        message.error("Vui lòng chọn ghế");
      }
    }
  };
  return (
    <>
      <div className="border-white border p-5 shadow-2xl shadow-box space-y-5 rounded-lg">
        <h1 className="text-green-600 text-4xl font-bold">
          {thongTinPhim?.tenPhim}
        </h1>
        <h1 className="text-gray-500 border-b border-y-white justify-between font-bold text-base">
          Cụm rạp :
          <span className="text-white font-[500] ml-1 text-lg">
            {thongTinPhim?.tenCumRap}
          </span>
        </h1>
        <h1 className="text-gray-500 border-b border-y-white justify-between font-bold text-base">
          Địa chỉ :
          <span className="text-white font-[500] ml-1 text-lg">
            {" "}
            {thongTinPhim?.diaChi}
          </span>
        </h1>
        <h1 className="text-gray-500 border-b border-y-white justify-between font-bold text-base">
          Rạp :
          <span className="text-white font-[500] ml-1 text-lg">
            {" "}
            {thongTinPhim?.tenRap}
          </span>
        </h1>
        <h1 className="text-gray-500 border-b border-y-white justify-between font-bold text-base">
          Ngày giờ chiếu :
          <span className="text-white font-[500] ml-1 text-lg">
            {thongTinPhim?.ngayChieu}
          </span>
          <span className="text-red-400 font-[500] ml-1 text-lg text-right">
            {thongTinPhim?.gioChieu}
          </span>
        </h1>
        <h1 className="text-gray-500 mt-0 py-4 border-b border-y-white  flex min-h-[8rem] justify-between font-bold text-base break-words">
          Chọn ghế:
          <div className="flex flex-wrap">
            {arrGheDangDat.map((i, index) => {
              return (
                <span key={index} className="text-white ml-1 text-lg">
                  {i.tenGhe},
                </span>
              );
            })}
          </div>
        </h1>
        <h1 className="text-white mt-0 py-4 border-b  border-gray-700/60 rounded-md border p-2 flex justify-between font-bold text-base">
          Tổng tiền:{" "}
          <span className="text-white  ml-1 text-lg">
            {arrGheDangDat
              .reduce((tongTien, ghe, index) => {
                return (tongTien += ghe.giaVe);
              }, 0)
              .toLocaleString()}{" "}
            VND
          </span>
        </h1>
        <div className="flex justify-center items-center">
          <button
            onClick={() => {
              datVeBtn();
            }}
            className="w-3/4 py-2 my-3 bg-green-700 text-white rounded font-bold transition ease-in-out delay-15  hover:scale-110 hover:bg-red-700 duration-300"
          >
            Đặt vé
          </button>
        </div>
      </div>
    </>
  );
};

export default BookInfo;
