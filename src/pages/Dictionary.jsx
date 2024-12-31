import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './Dictionary.css'

const Dictionary = () => {
  return(
    <div className="Dictionary">
      <Header />
      <div className="body">
      <div className="main-title">
        <h1>직장어사전</h1>
      </div>
      <div className="search-container">
          <input
            type="text"
            placeholder="궁금한 직장어를 검색하세요! "
            className="search-bar"
          />
          <button className="search-button" >
            검색
          </button>
        </div>
      <div className="main-box">
        <div className="menu-tabs">
            <button>영어</button>
            <button>ㄱ~ㅁ</button>
            <button>ㅂ~ㅈ</button>
            <button>ㅊ~ㅎ</button>
          </div>
          <div class="output-box" id="chatgpt-output">
            여기에 결과가 표시됩니다.
          </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Dictionary;