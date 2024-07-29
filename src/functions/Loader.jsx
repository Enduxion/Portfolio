import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { loaderArr } from "../resources/utils";

const Loader = ({ setIsLoaded }) => {
  const [currentlyLoading, setCurrentlyLoading] = useState(loaderArr[0]);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    const loadedThen = (src) => {
      setLoadedCount((v) => v + 1);
      setCurrentlyLoading(src.split("/")[src.split("/").length - 1]);
    };
    const loaderFunc = (src) => {
      return new Promise((resolve, reject) => {
        let media;
        if (src.endsWith(".mp4")) {
          media = document.createElement("video");
          media.src = src;
          media.oncanplaythrough = () => {
            loadedThen(src);
            resolve();
          };
        } else if (src.endsWith(".mp3")) {
          media = new Audio();
          media.src = src;
          media.oncanplaythrough = () => {
            loadedThen(src);
            resolve();
          };
        } else {
          media = new Image();
          media.src = src;
          media.onload = () => {
            loadedThen(src);
            resolve();
          };
        }
        media.onerror = reject;
      });
    };
    let timeOutId;
    Promise.all(loaderArr.map(loaderFunc)).then(() => {
      timeOutId = setTimeout(() => {
        setIsLoaded(true);
      }, 500);
    });
    return () => clearTimeout(timeOutId);
  }, []);

  return (
    <motion.div
      className="w-screen h-screen flex z-[150] items-center justify-center flex-col gap-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: loadedCount === loaderArr.length ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-1 items-center justify-center w-full">
        <span className="font-bold tracking-widest text-2xl">Endux</span>
        <motion.span
          className="fa fa-spinner text-2xl"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <span className="tracking-widest">
          Loading:{" "}
          <span className="tracking-widest text-primary-6">
            {currentlyLoading}
          </span>
        </span>
      </div>
      <div className="flex flex-col gap-2 w-full items-center justify-center">
      <motion.span
        className="h-2 flex bg-primary-4 self-start rounded-full ml-[10%]"
        animate={{ width: `${(loadedCount / loaderArr.length) * 80}%` }}
        transition={{ duration: 0.3 }}
      />{" "}
      <span className="">
        {Math.floor((loadedCount / loaderArr.length) * 100)}%
      </span>
      </div>
    </motion.div>
  );
};

export default Loader;
