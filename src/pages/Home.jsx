import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import icon from '../img/men.png';
import './Home.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return(
    <div className="Home">
      <Header />
      <div className="box">
      <img src={icon} className="iconImg" onClick={()=>navigate('/')} />
      <div className="title">
        <div className="stitle">
        <p>더 넓은 세상을 위한 첫걸음,</p>
        <p> 사회초년생의 센스있는 직장생활을 위한</p>
        </div>
        <div className="btitle">
        <p>도약</p>
        </div>
        <div className="button">
            <button onClick={() => navigate("/manual")}>직장매뉴얼</button>
            <button onClick={() => navigate("/dictionary")}>직장어사전</button>
            <button onClick={() => navigate("/memo")}>업무메모</button>
          </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home;