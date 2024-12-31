import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './Manual.css'

const Manual = () => {
  return(
    <div className="Home">
      <Header />
      <div className="body">
      <div className="main-title">
        <h1>직장생활매뉴얼</h1>
      </div>
      <div className="main-box1">
        <h2 className="menu-title1">전화 받기 매뉴얼</h2>
        <div className="menu-tabs1">
            <button>전화가 걸려왔을 때</button>
            <button>전화가 잘 못 왔을 때</button>
            <button>전화 전달이 필요할 때</button>
            <button>부재중일 때</button>
          </div>
          <div class="output-box" id="chatgpt-output">
            여기에 결과가 표시됩니다.
          </div>
      </div>
      <div className="main-box2">
        <h2 className="menu-title2">메일 작성 매뉴얼</h2>
        <div className="menu-tabs2">
            <button>제목</button>
            <button>본문</button>
            <button>답장</button>
            <button>참조</button>
            <button>확인</button>
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

export default Manual;