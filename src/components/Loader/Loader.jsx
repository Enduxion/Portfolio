import { useEffect } from "react";
import { bg, bga, bgp, bgc, bgAud, pfpImg } from "../../resources/utils";

const MediaArr = [pfpImg, bg, bga, bgp, bgc, bgAud];

const Loader = ({ setIsLoaded }) => {

  useEffect(() => {
    let loaded = 0;
    const totalMedia = MediaArr.length;

    const handleLoad = () => {
      loaded++;
      console.log(loaded, totalMedia);
      if (loaded === totalMedia) {
        setIsLoaded(true);
      }
    };

    MediaArr.forEach((src) => {
      console.log(src);
      let media;
      if (src.endsWith(".mp4")) {
        media = document.createElement("video");
        media.src = src;
        media.oncanplaythrough = handleLoad
      } else if (src.endsWith(".mp3")) {
        media = new Audio();
        media.src = src;
        media.oncanplaythrough = handleLoad
      } else {
        media = new Image();
        media.src = src;
        media.onload = handleLoad;
        media.onerror = handleLoad;
      }
    })
  }, [])
  
  return (
    <div className="w-screen h-screen flex z-[150] items-center justify-center">
      Loading...
    </div>
  )
}

export default Loader;