import React, { useRef, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import YouTube from "react-youtube";

const TrailerModal = ({ movie, open, close }) => {
  if (!open) return null;
  const getYouTubeVideoId = (url) => {
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
  };
  const videoId = getYouTubeVideoId(movie.trailer);

  const opts = {
    height: "500px",
    width: "700px",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="fixed inset-0 z-10 h-full bg-black/90">
      <div className="flex justify-end">
        <button className="text-whit mt-10 mr-16 bg-gray-50/20" onClick={close}>
          <AiOutlineClose className="font-bold text-4xl transition duration-300 text-white hover:rotate-180" />
        </button>
      </div>
      <div className="flex items-center justify-center">
        <YouTube videoId={videoId} opts={opts} />
      </div>
    </div>
  );
};

export default TrailerModal;
