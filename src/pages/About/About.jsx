import Transition from "../../functions/Transition";
import pfpImg from "../../assets/images/pfp2.png";
import bgVid from "../../assets/videos/bga.mp4";
import bgAud from "../../assets/audio/bga.mp3";

// Music by <a href="https://pixabay.com/users/william_king-33448498/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=144998">William_King</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=144998">Pixabay</a>

const About = () => {
  return (
    <div className="section flex p-4">
      <video
        className="w-full h-screen object-cover select-none absolute left-1/2 -translate-x-1/2 top-0 bgVid -z-10 opacity-40"
        id="bgVid"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bgVid} type="video/mp4" />
      </video>
      <audio className="absolute top-0 left-0 hidden" autoPlay loop src={bgAud} />
      <div className="w-full">
        
      </div>
    </div>
  );
};

export default Transition(About);
