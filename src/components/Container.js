import React, { Component } from "react";


import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

// import Home from "./pages/home";
// import Classification from "./pages/classification";
// import Habitat from "./pages/habitat";
// import Formation from "./pages/formation";
// import Diet from "./pages/diet";
// import Reproduction from "./pages/reproduction";
// import LifeSpan from "./pages/lifespan";
// import FunFacts from "./pages/funfacts";
// import EconImp from "./pages/econimp";


import icon1 from "./img/icons/tropical-1.png";
import icon2 from "./img/icons/tropical-2.png";
import icon3 from "./img/icons/tropical-3.png";
import icon4 from "./img/icons/tropical-4.png";
import icon5 from "./img/icons/tropical-5.png";
import icon6 from "./img/icons/tropical-6.png";

export default function Container() {
    // const [currentPage, setCurrentPage] = useState("Home");

  
    // const renderPage = () => {
    //   if (currentPage === "Home") {
    //     return <Home />;
    //   }
    //   if (currentPage === "Classification") {
    //     return <Classification />;
    //   }
    //   if (currentPage === "Formation") {
    //     return <Formation />;
    //   }
    //   if (currentPage === "Habitat") {
    //     return <Habitat />;
    //   }
    //   if (currentPage === "Diet") {
    //     return <Diet />;
    //   }
    //   if (currentPage === "Reproduction") {
    //     return <Reproduction />;
    //   }
    //   if (currentPage === "LifeSpan") {
    //     return <LifeSpan />;
    //   }
    //   if (currentPage === "FunFacts") {
    //     return <FunFacts />;
    //   }
    //   if (currentPage === "EconImp") {
    //     return <EconImp />;
    //   }

    // };
  
    // const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="row">
      <span className="lpanel"></span>
      <figure>
        <figcaption className="heading">
          <span>
            <span>BEN</span>
            <span>GAL</span>
            <br />
            <span>TIG</span>
            <span>ER</span>
          </span>
        </figcaption>

        <span className="square">
          <figcaption className="names">
            <span>Katelyn</span> <span>King</span> <br />
            <span>Jhanvi</span> <span>Patel</span>
          </figcaption>

          <figcaption className="bio">
            <span>Biology</span> <span>II</span>
            <br />
            <span>Professor</span> <span>Manar</span> <span>Soliman</span>
          </figcaption>
        </span>

        <span className="rectangle">
          <span className="spacing">
            <span className="centered grow">
              <a href="#classification">
                <img src={icon1} className="icons"></img>
                <span className="titles">CLASSIFICATION</span>
              </a>
            </span>

            <span className="centered grow">
              <a href="#">
                <img src={icon2} className="icons"></img>
                <span className="titles">FORMATION</span>
              </a>
            </span>

            <span className="centered grow">
              <a href="#">
                <img src={icon3} className="icons"></img>
                <span className="titles">HABITAT</span>
              </a>
            </span>

            <span className="centered grow">
              <a href="#">
                <img src={icon4} className="icons"></img>
                <span className="titles">DIET</span>
              </a>
            </span>

            <span className="centered grow">
              <a href="#">
                <img src={icon5} className="icons"></img>
                <span className="titles">REPRODUCTION</span>
              </a>
            </span>

            <span className="centered grow">
              <a href="#">
                <img src={icon6} className="icons"></img>
                <span className="titles">LIFE SPAN</span>
              </a>
            </span>



          </span>
        </span>
      </figure>
    </div>
  );
}

