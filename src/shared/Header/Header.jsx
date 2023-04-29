import React from "react";
import logo from "../../assets/logo.png";
import moment from 'moment';

const Header = () => {
  return (
    <div>
      <div className="text-center">
        <img src={logo} alt="" />
        <h4>Journalism Without Fear or Favour</h4>
        <p>{moment().format("dddd, MMMM D YYYY, ")}</p>
      </div>
    </div>
  );
};

export default Header;
