import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Attribution = ({ musicRef }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (musicRef.current) {
      if (isPlaying) {
        musicRef.current.play();
      } else {
        musicRef.current.pause();
      }
      if (isMuted) {
        musicRef.current.muted = true;
      } else {
        musicRef.current.muted = false;
      }
    }
  }, [musicRef, isPlaying, isMuted]);
  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-center il-rslide"
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      drag
    >
      <div className="lg:w-1/2 sm:w-4/5 bg-gradient-to-tr from-gray-700/20 to-gray-500/20 p-4 rounded-xl backdrop-blur-md flex flex-col items-center gap-4">
        <marquee className="text-sm w-full font-bold" scrollamount="6">
          <i className="fas fa-music text-[10px]"></i>{" "}
          "Gypsy time" by{" "}
          <Link to="https://pixabay.com/users/william_king-33448498/" className="underline" target="_blank">
            William King
          </Link>{" "}
          <i className="fas fa-music text-[10px]"></i>
        </marquee>
        <div className="grid grid-cols-3 w-full">
          <i className={`w-full flex items-center justify-center fas ${isMuted ? "fa-volume-mute text-primary-6" : "fa-volume-up"} cursor-pointer`} onClick={() => setIsMuted(!isMuted)}></i>
          <i className={`w-full flex items-center justify-center fas ${isPlaying ? "fa-pause" : "fa-play"} cursor-pointer`} onClick={() => setIsPlaying(!isPlaying)}></i>
          <i className="w-full flex items-center justify-center fas fa-up-right-from-square cursor-pointer" onClick={() => open("https://pixabay.com/music/acoustic-group-gypsy-time-acoustic-jazz-guitar-143797/")}></i>
        </div>
      </div>
    </motion.div>
  );
};

export default Attribution;
