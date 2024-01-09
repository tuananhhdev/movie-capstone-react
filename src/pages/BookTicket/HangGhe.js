import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { datGhe } from "../../redux/ticketSlice";
import "./BookTicket.scss";

const HangGhe = ({ danhSachGhe }) => {
  const dispatch = useDispatch();
  const { arrGheDangDat } = useSelector((state) => state.ticketSlice);
  const renderGhe = () =>
    danhSachGhe?.map((i, d) => {
      let gheVip = i.loaiGhe === "Vip" ? "gheVip" : "";
      let daDat = i.daDat === true ? "gheDaDat" : "";
      let dangDat = "";
      let indexGheDD = arrGheDangDat.findIndex(
        (gheDD) => gheDD.maGhe === i.maGhe
      );
      if (indexGheDD != -1) {
        dangDat = "gheDangDat";
      }
      return (
        <Fragment>
          <button
            onClick={() => {
              let gheDat = {
                maGhe: i.maGhe,
                tenGhe: i.tenGhe,
                maRap: i.maRap,
                loaiGhe: i.loaiGhe,
                stt: i.stt,
                giaVe: i.giaVe,
                daDat: i.daDat,
                taiKhoanNguoiDat: i.taiKhoanNguoiDat,
              };
              const actions = datGhe(gheDat);
              dispatch(actions);
            }}
            key={d}
            disabled={i.daDat}
            className={`ghe ${gheVip} ${daDat} ${dangDat}`}
          >
            {i.daDat ? (
              <span className="font-bold">X</span>
            ) : (
              <span>{i.stt}</span>
            )}
          </button>
          {(d+ 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  return (
    <div className="">
      {renderGhe()}

    </div>
    // <>{renderGhe()}</>
  );
};

export default HangGhe;
