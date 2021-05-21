import stock from '../img/projects/stock.webp';
import dir from '../img/projects/dir.webp';
import rgb from '../img/projects/rgb.webp';
import req from '../img/projects/req.webp';

export const projects = [
  {
    id: 1,
    image: stock,
    title: "Stock Tracker and Visualizer",
    description:
      "A web application to track stocks, manage portfolios and visualize stock data; research the stock market (most active, most gainer, most loser,..) and set price alerts",
    tech: "Nodejs Express MongoDB Mongoose RESTful Routing MVC OAuth2 EJS JQuery Chart.js Bootstrap4 HTML/CSS/JS Heroku",
    github: "",
    demo: "",
  },
  {
    id: 2,
    image: rgb,
    title: "RGB Color Guessing Game",
    description:
      "A RESTful gaming website for players to guess correct color that matches given RGB code, earn points and advances to next level.",
    tech: "REST APIs React Redux JWT Node.js Express MongoDB Socket.io",
    github: "",
    demo: "",
  },
  {
    id: 3,
    image: req,
    title: "Truman Override Request Tracking System",
    description:
      "A web-based system to aid administrators of Truman Computer Science, Mathematics and Statistics departments with class override requests.",
    tech: "Nodejs Express MySQL Sequelize RESTful routing MVC OAuth2EJS Bootstrap4 jQuery Heroku HTML/CSS/JS",
    github: "",
    demo: "",
  },
  {
    id: 4,
    image: dir,
    title: "Directory Synchronization Tool",
    description:
      " desktop application to synchronize directories between two computers, used as a backup tool.",
    tech: "Java TCP OOP Client Server Multithreading",
    github: "",
    demo: "",
  },
];