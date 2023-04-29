import React from "react";
import "./QZone.css";
import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";
import banner from "../../assets/bg.png";

const QZone = () => {
  return (
    <div>
      <div className="Q-Zone mt-4">
        <h4 className="Q-zone">Q-Zone</h4>
        <img src={qZone1} alt="qZone1" />
        <img src={qZone2} alt="qZone2" />
        <img src={qZone3} alt="qZone3" />
      </div>

      <div className="banner">
        <img src={banner} alt="" />

        <div className="banner-text">
          <h4>
            Create an <br /> Amazing <br /> Newspaper
          </h4>
          <p>
            Discover thousands of <br /> options, easy to <br /> customize
            layouts, one- <br /> click to import demo and much more.
          </p>
          <button className="btn-learn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default QZone;
