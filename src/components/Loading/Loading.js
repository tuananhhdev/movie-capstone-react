import React from "react";
import Lottie from "react-lottie";
import * as loadingAnimation from "./../../assets/animations/loading-animation.json";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      className="fixed inset-0 bg-white  flex items-center"
      style={{ zIndex: 9999 }}
    >
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default Loading;
