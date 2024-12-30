import React from "react";
import './Footer.css'
import logo from '../img/logo_w.png';

const Footer = () => {
  return(
    <div className="Footer">
      <div className="mainText">
        <img src={logo} className="logoImg" />
        <p>회사소개  |  문의하기  | 이용약관</p>
      </div>
      <div className="subText">
        <p>예비취업맞춤반 권가령 개인프로젝트</p>
        <p>Copyright © 도약. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer;