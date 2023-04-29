import React from "react";
import "./RightNav.css";
import { FaGoogle, FaGithub,FaFacebookF, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { ListGroup } from "react-bootstrap";
import QZone from "../QZone/QZone";

const RightNav = () => {
  return (
    <div>
      <h4 className="login-title">Login With</h4>
      <button className="btn-google">
        {" "}
        <FaGoogle /> Login with Google
      </button>
      <br />
      <button className="btn-github">
        {" "}
        <FaGithub /> Login with Github
      </button>

      <div>
        <h4 className="find-text">Find Us On</h4>

        <ListGroup>
          <ListGroup.Item className="text"> <FaFacebook></FaFacebook> Facebook</ListGroup.Item>
          <ListGroup.Item> <FaTwitter></FaTwitter>Twitter</ListGroup.Item>
          <ListGroup.Item> <FaInstagram></FaInstagram>Instagram</ListGroup.Item>
   
        </ListGroup>

        <QZone></QZone>
      </div>
    </div>
  );
};

export default RightNav;
