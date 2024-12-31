import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import './Memo.css'; 

const Memo = () => {
    return (
      <div className="Memo">
      <Header />
      <div className="body">
      <div className="main-title">
        <h1>업무메모</h1>
      </div>
      <div className="memo-input-section">
          <div className="priority-selector">
          <input
                type="radio"
                name="priority"
                value="중요"
          />
          <span className="important">중요</span>
          <input
                type="radio"
                name="priority"
                value="긴급"
          />
          <span className="urgent">긴급</span>
          <input
                type="radio"
                name="priority"
                value="업무"
          />
          <span className="task">업무</span>
          </div>
          <input type='text' className="textmemo" placeholder="메모를 입력하세요..."></input>
          <button className="register-button">등록</button>
        </div>
    </div>
    <Footer />
    </div>
  );
};

export default Memo;