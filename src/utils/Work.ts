import im1 from "../img/togetheater.png";
import im2 from "../img/mern_homeScreen.png";
import im3 from "../img/single_page_ecommerce.png";
import im4 from "../img/magicPolls.png";

const data = [
  {
    title: "Togetheater",
    description: `Movies application made with React, Node, Express & MondoDB. This app fetch data from TMDB API, showing movies that are: Trending, Popular & Top Rated`,
    shortDescription:
      "Movies application made with React, Node, Express & MondoDB.",
    img: im1,
    repo: "https://github.com/danielrs95/togetheater",
  },
  {
    title: "E-Commerce",
    description: `eCommerce application made with React, Redux, Node, Express & MondoDB. Some of the build in functionality are:

    Full featured shopping cart with PayPal & credit/debit payments
    Product rating & review system
    Product search, carousel, pagination & more
    Admin interface for product, user & order management`,
    shortDescription:
      "E-Commerce application made with React, Redux, Node, Express & MondoDB",
    img: im2,
    repo: "https://github.com/danielrs95/MERN_ECOMMERCE",
  },
  {
    title: "SPA E-Commerce",
    description: `Basic but powerful single page app made with React and Redux, with shopping cart functionality and persistent `,
    shortDescription:
      "Basic E-Commerce Single Page App made with React & Redux",
    img: im3,
    repo: "https://github.com/danielrs95/SPA_ECommerce",
  },
  {
    title: "Polls",
    description: `Polls application made with Express & MongoDB, to make basic polls, no registration needed for vote`,
    shortDescription: "Polls application made with Express & MongoDB",
    img: im4,
    repo: "https://github.com/danielrs95/Magic_Polls",
  },
];

export default data;
