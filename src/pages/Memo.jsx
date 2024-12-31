import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import './Memo.css'; 

const Memo = () => {
    return (
    <div className="container">
    <Header />
      <div className="main">
      <div className="main-title">
        <h1>업무메모</h1>
      </div>
      <div className="memo">
        <div className="memo-list">
        </div>
        <div className="memo-input">
          <div className="priority-selector">
            <label>
              <input
                type="radio"
                name="priority"
                value="urgent"
              />
              <span className="urgent">긴급</span>
            </label>
            <label>
              <input
                type="radio"
                name="priority"
                value="important"
              />
              <span className="important">중요</span>
            </label>
            <label>
              <input
                type="radio"
                name="priority"
                value="task"
              />
              <span className="task">업무</span>
            </label>
          </div>
          <textarea
            placeholder="메모를 입력하세요"
            className="textarea"
          />
          <button className="register-button">
            등록
          </button>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Memo;