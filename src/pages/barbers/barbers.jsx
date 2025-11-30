import React from "react";
import "../../style/barber.css";
import Neymar from "../../assets/neymar.webp";
import Olise from "../../assets/olise.webp";
import Henry from "../../assets/Henry.webp";
import Yamal from "../../assets/yamal.webp";
import Kounde from "../../assets/kounde.webp";
import Navigation from "../../component/navbar/Navigation";

const Barbers = () => {
  return (
    <>
      <Navigation></Navigation>
      <div>
        <div>
          <div className="header-barber">
            <h1>Meet Our Barbers</h1>
            <p>Craftsmanship. Style. Personality.</p>
          </div>

          <div class="barber-grid">
            <ol>
              <li>
                <img src={Henry} alt="logo" />
                <h3>Kiel</h3>
                <p>Classic & Executive Cuts Specialist</p>
              </li>
              <li>
                <img src={Kounde} alt="logo" />
                <h3>Ojan</h3>
                <p>Fade & Pompadour Expert</p>
              </li>
              <li>
                <img src={Yamal} alt="logo" />
                <h3>Wildy</h3>
                <p>Beard Styling & Hot Towel Shave</p>
              </li>
              <li>
                <img src={Neymar} alt="logo" />
                <h3>Fadlan</h3>
                <p>Hair Spa & Scalp Treatment</p>
              </li>
              <li>
                <img src={Olise} alt="logo" />
                <h3>Madio</h3>
                <p>Buzz Cut & Undercut Master</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Barbers;
