const VideoComponent = ({ src }) => {
  return (
    <video
      className="w-full h-screen object-cover select-none fixed left-1/2 -translate-x-1/2 top-0 bgVid -z-10 opacity-40"
      id="bgVid"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default VideoComponent;
