import React, { useEffect, useState } from "react";
import { listAPI } from "../../services/API";
import { Tabs } from "antd";
import "./LichChieuCumRap.css";
import moment from "moment";
import { Link } from "react-router-dom";

const LichChieuCumRap = ({ maHeThongRap }) => {
  const [cumRap, setCumRap] = useState([]);
  useEffect(() => {
    listAPI
      .get_film_theater(maHeThongRap)
      .then((res) => {
        setCumRap(res.data.content[0]?.lstCumRap);
      })
      .catch((err) => console.log(err));
  }, [maHeThongRap]);
  // console.log(cumRap);
  return (
    <div className="cum_rap">
      <Tabs
        defaultActiveKey="1"
        tabPosition={"left"}
        style={{
          height: 572,
        }}
        items={cumRap.map((item, index) => {
          return {
            label: (
              <div className="text-left space-y-2 lg:w-[300px]">
                <h4 className="text-green-600 truncate uppercase font-medium">
                  {item.tenCumRap}
                </h4>
                <p className="text-gray-100 truncate text-xs">{item.diaChi}</p>
                <p className="text-red-500 text-xs">[chi tiết]</p>
              </div>
            ),
            key: index,
            children: (
              <div id="style-4">
                {item.danhSachPhim.map((i, d) => (
                  <div className="flex space-y-5 p-5" key={d}>
                    <div className="col-left w-24 mr-4">
                      <img src={i.hinhAnh} alt="" />
                    </div>
                    <div className="col-right space-y-3 text-white">
                      <Link to={`/movie-details/${i.maPhim}`}>
                        <div className="font-bold text-xl">
                          <span className="p-2 mr-5 text-white text-xs bg-red-500 rounded-md">
                            C18
                          </span>
                          {i.tenPhim}
                        </div>
                      </Link>
                      <div className="grid grid-cols-2 gap-5">
                        {i.lstLichChieuTheoPhim
                          .splice(0, 4)
                          .map((item, index) => (
                            <Link to={`/book-ticket/${item.maLichChieu}`}>
                              <div className="space-x-2 bg-gray-300 font-bold border mb:text-xs border-gray-400 rounded-md text-base p-3 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-green-700 duration-300 hover:font-bold hover:border-0 ">
                                <span className="text-green-600">
                                  {moment(item.ngayChieuGioChieu).format(
                                    "DD-MM-YYYY"
                                  )}
                                </span>
                                <span className="text-red-500">
                                  {moment(item.ngayChieuGioChieu).format(
                                    "hh-mm"
                                  )}
                                </span>
                              </div>
                            </Link>
                          ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ),
          };
        })}
      />
    </div>
  );
};

export default LichChieuCumRap;
