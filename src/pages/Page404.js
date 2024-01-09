import React from "react";
import * as Page_404 from "./../assets/animations/Page_404.json";
import Lottie from "react-lottie";
import { NavLink } from "react-router-dom";

const Page404 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Page_404,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <Lottie options={defaultOptions} height={400} width={700} />
      <button className="py-2 px-5 text-xl mt-3 rounded-md bg-slate-800 text-white hover:bg-green-800 duration-500">
        <NavLink to={"/"}>Về trang chủ</NavLink>
      </button>
    </div>
  );
};

export default Page404;
