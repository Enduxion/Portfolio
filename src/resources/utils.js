// Video
import bga from "../assets/videos/bga.mp4";
import bgp from "../assets/videos/bgp.mp4";
import bg from "../assets/videos/bg.mp4";
// Audio
import bgAud from "../assets/audio/bga.mp3";
// Images
import pfpImg from "../assets/images/pfp.png";

// project images

import codingtechImg from "../assets/images/codingtech.png";
import enduxImg from "../assets/images/endux.png";
import chessImg from "../assets/images/chess.jpg";
import oldEnduxImg from "../assets/images/oldEndux.png";
import vinvasImg from "../assets/images/vinvas.png";

// data
const skillsData = [
  { name: "HTML5", icon: "fab fa-html5", to: "https://www.w3.org/TR/html5/" },
  {
    name: "Javascript",
    icon: "fab fa-js",
    to: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "CSS3",
    icon: "fab fa-css3-alt",
    to: "https://www.w3.org/Style/CSS/",
  },
  { name: "React", icon: "fab fa-react", to: "https://reactjs.org/" },
  { name: "Express", icon: "fab fa-node-js", to: "https://expressjs.com/" },
  { name: "Python", icon: "fab fa-python", to: "https://www.python.org" },
  { name: "C++", icon: "fab fa-cuttlefish", to: "http://www.cplusplus.com/" },
];
const socialArr = [
  {
    name: "Github",
    link: "https://www.github.com/Enduxion/",
    icon: "fab fa-github",
  },
  {
    name: "Instagsram",
    link: "https://www.instagsram.com/enduxion/",
    icon: "fab fa-instagsram",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/enduxion/",
    icon: "fab fa-facebook",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/pawan-gurung/",
    icon: "fab fa-linkedin",
  },
];

const projectArr = [
  {
    name: "Coding Technology",
    group: "Website",
    link: "https://codingtechnology.netlify.app",
    img: codingtechImg,
    desc: "Developed for an educational institute offering IT training, specifically tailored for the MERN stack curriculum.",
    tags: ["React", "Express", "MongoDB", "Node", "Framer Motion"]
  },
  {
    name: "Endux",
    group: "Website",
    link: "https://pawangrg.netlify.app",
    img: enduxImg,
    desc: "This is the current website you are viewing, serving as my personal portfolio.",
    tags: ["React", "GSAP", "Framer Motion"]
  },
  {
    name: "Chess",
    group: "Game",
    link: "https://www.github.com/Enduxion/Chess.git",
    img: chessImg,
    desc: "A game of chess developed in C++.",
    tags: ["C++", "SFML"]
  },
  {
    name: "Old Endux",
    group: "Website",
    link: "https://old-endux.netlify.app/html/index",
    img: oldEnduxImg,
    desc: "My previous portfolio website, containing additional information about me.",
    tags: ["HTML", "CSS", "Javascript"]
  },
  {
    name: "VVS School",
    group: "Website",
    link: "https://vinvas.netlify.app",
    img: vinvasImg,
    desc: "A website for Vindhyavasini Secondary School, featuring detailed information about the institution.",
    tags: ["HTML", "CSS", "Javascript", "React"]
  }
];

export { bg, bga, bgp, bgAud, pfpImg, skillsData, socialArr, projectArr };
