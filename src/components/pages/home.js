import React from "react";

import icon1 from "../img/icons/tropical-1.png";
import icon2 from "../img/icons/tropical-2.png";
import icon3 from "../img/icons/tropical-3.png";
import icon4 from "../img/icons/tropical-4.png";
import icon5 from "../img/icons/tropical-5.png";
import icon6 from "../img/icons/tropical-6.png";

export default function Home() {
  return (
    <section id="home">
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
                <a href="#formation">
                  <img src={icon2} className="icons"></img>
                  <span className="titles">FORMATION</span>
                </a>
              </span>

              <span className="centered grow">
                <a href="#habitat">
                  <img src={icon3} className="icons"></img>
                  <span className="titles">HABITAT</span>
                </a>
              </span>

              <span className="centered grow">
                <a href="#diet">
                  <img src={icon4} className="icons"></img>
                  <span className="titles">DIET</span>
                </a>
              </span>

              <span className="centered grow">
                <a href="#reprod">
                  <img src={icon5} className="icons"></img>
                  <span className="titles">REPRODUCTION</span>
                </a>
              </span>

              <span className="centered grow">
                <a href="#lifespan">
                  <img src={icon6} className="icons"></img>
                  <span className="titles">LIFE SPAN</span>
                </a>
              </span>
            </span>
          </span>
        </figure>
      </div>
    </section>
  );
}
