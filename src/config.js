// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";
// Projects Images (add your images to the src/images directory and import below)
import AIForBlind from "./images/blind-app.png";
import AMEX from "./images/amex.png";
import PortfolioSite from "./images/portfolio-site.png";
import FMC from "./images/fmcw.png";
import StockTrading from "./images/trading.png";
import Hangman from "./images/hangman.png";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "Atul625-py";

// Navbar Logo image
export const navLogo = null;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I'm a junior undergraduate at IIT (BHU) Varanasi pursuing Computer Science and Engineering. I enjoy building impactful systems—from AI-powered apps to algorithmic trading platforms—and working at the intersection of machine learning, systems, and finance. My core interests include deep learning, reinforcement learning, and quantitative modeling. This site was built using React, React Bootstrap, and GitHub Pages to showcase my projects and research interests.";
/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  // Programming Languages
  {
    id: 1,
    skill: <Icon icon="mdi:language-c" className="display-4" />,
    name: "C",
  },
  {
    id: 2,
    skill: <Icon icon="mdi:language-cpp" className="display-4" />,
    name: "C++",
  },
  {
    id: 3,
    skill: <Icon icon="mdi:language-python" className="display-4" />,
    name: "Python",
  },
  {
    id: 4,
    skill: <Icon icon="mdi:language-r" className="display-4" />,
    name: "R",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:language-javascript" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 6,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 7,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },

  // Core ML Libraries
  {
    id: 8,
    skill: <Icon icon="simple-icons:tensorflow" className="display-4" />,
    name: "TensorFlow",
  },
  {
    id: 9,
    skill: <Icon icon="simple-icons:keras" className="display-4" />,
    name: "Keras",
  },
  {
    id: 10,
    skill: <Icon icon="simple-icons:scikitlearn" className="display-4" />,
    name: "Scikit-learn",
  },
  {
    id: 11,
    skill: <Icon icon="simple-icons:numpy" className="display-4" />,
    name: "NumPy",
  },
  {
    id: 12,
    skill: <Icon icon="simple-icons:pandas" className="display-4" />,
    name: "Pandas",
  },
  {
    id: 13,
    skill: <Icon icon="simple-icons:opencv" className="display-4" />,
    name: "OpenCV",
  },

  // Web & Dev Tools
  {
    id: 14,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 15,
    skill: <Icon icon="simple-icons:django" className="display-4" />,
    name: "Django",
  },
  {
    id: 16,
    skill: <Icon icon="simple-icons:flask" className="display-4" />,
    name: "Flask",
  },
  {
    id: 17,
    skill: <Icon icon="mdi:docker" className="display-4" />,
    name: "Docker",
  },
  {
    id: 18,
    skill: <Icon icon="mdi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 19,
    skill: <Icon icon="devicon:mysql" className="display-4" />,
    name: "MySQL",
  },
];

// Resume link (string - "https://YourResumeUrl")
export const resume = "https://drive.google.com/your-resume-link-here";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = [
  "AIForBlindApp",
  "AMEX-Hackathon",
  "Atul625-py.github.io",
  "fmc-24-nextjs",
  "Stock_Trading_Portfolio",
  "Trexquant_Hangman",
];
// Replace the default GitHub image for matching repos below (images imported above - line 8)
export const projectCardImages = [
  {
    name: "AIForBlindApp",
    image: AIForBlind,
  },
  {
    name: "AMEX-Hackathon",
    image: AMEX,
  },
  {
    name: "Atul625-py.github.io",
    image: PortfolioSite,
  },
  {
    name: "fmc-24-nextjs",
    image: FMC,
  },
  {
    name: "Stock_Trading_Portfolio",
    image: StockTrading,
  },
  {
    name: "Trexquant_Hangman",
    image: Hangman,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xgvybdqo";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
