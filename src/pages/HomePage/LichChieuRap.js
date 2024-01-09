import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { listAPI } from "../../services/API";
import LichChieuCumRap from "./LichChieuCumRap";

const LichChieuRap = () => {
  const [rap, setRap] = useState([]);
  // const [maHeThongRap, setMaHeThongRap] = useState("BHDStar");
  useEffect(() => {
    listAPI
      .get_rap()
      .then((res) => setRap(res.data.content))
      .catch((err) => console.log(err));
  }, []);
  // console.log(rap);
  return (
    <>
      <Tabs
        defaultActiveKey="1"
        tabPosition={"left"}
        style={{
          border: "1px solid #8080806e",
        }}
        items={rap.map((item, index) => {
          return {
            label: <img src={item.logo} className="w-10" />,
            key: item.maHeThongRap,
            children: <LichChieuCumRap maHeThongRap={item.maHeThongRap} />,
          };
        })}
      />
    </>
  );
};

export default LichChieuRap;
