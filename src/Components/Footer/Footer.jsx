import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Telegram from "@iconscout/react-unicons/icons/uil-telegram";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <a href="mailto:mehmonaliyevijodbek@gmail.com">
          <span>MehmonaliyevIjodbek@gmail.com</span>
        </a>

        <div className="f-icons">
          <a href="https://www.instagram.com/_zokhidovich_i/" target='_blank'>
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="tg:mekhmonaliev_i" target='_blank'> <Telegram color="white" size={"3rem"} /></a>

          <a href="github:https://github.com/MehmonalievIjodbek" target='_blank'> <Gitub color="white" size={"3rem"} /></a>

        </div>
      </div>
    </div>
  );
};

export default Footer;