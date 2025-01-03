import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './Manual.css';
import OpenAI from "openai"; 

const Manual = () => {
  const [phoneOutput, setPhoneOutput] = useState(''); 
  const [emailOutput, setEmailOutput] = useState(''); 

  const client = new OpenAI({
    apiKey: process.env['REACT_APP_API_KEY'],
    dangerouslyAllowBrowser: true
  });

  const callOpenAI = async (prompt, setOutput) => {
      const chatCompletion = await client.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        model: 'gpt-4o'
      });
      const response = chatCompletion.choices[0].message.content;
      console.log(response);
      setOutput(response); 
  };

  return (
    <div className="Home">
      <Header />
      <div className="body"> 
        <div className="main-title">
          <h1>직장생활매뉴얼</h1>
        </div>
        <div className="main-box1">
          <h2 className="menu-title1">전화 받기 매뉴얼</h2>
          <div className="menu-tabs1">
            <button onClick={() => callOpenAI('직장 생활 중 전화가 잘 못 걸려왔을 때 매뉴얼 10문장으로 작성하고 숫자로 정리해서 알려줘. 다른 말 없이 번호로만 정리되도록 하고 ~합니다.로 끝나게 해줘', setPhoneOutput)}>전화가 잘못 걸려왔을 때</button>
            <button onClick={() => callOpenAI('직장 생활 중 전화가 걸려왔을 때 매뉴얼을 10문장으로 작성하고 숫자로 정리해서 알려줘. 다른 말 없이 번호로만 정리되도록 하고 ~합니다.로 끝나게 해줘', setPhoneOutput)}>전화가 왔을 때</button>
            <button onClick={() => callOpenAI('직장 생활 중 전화를 전달해야 할 때 매뉴얼을 10문장으로 작성하고 숫자로 정리해서 알려줘. 다른 말 없이 번호로만 정리되도록 하고 ~합니다.로 끝나게 해줘', setPhoneOutput)}>전화를 전달해야 할 때</button>
            <button onClick={() => callOpenAI('부재중 전화를 받을 수 없을 때 매뉴얼을 10문장으로 작성하고 숫자로 정리해서 알려줘. 다른 말 없이 번호로만 정리되도록 하고 ~합니다.로 끝나게 해줘', setPhoneOutput)}>부재중 전화가 있을 때</button>
          </div>
          <div className="output-box" id="phone-output">
            {phoneOutput || "버튼을 눌러 전화 받기 매뉴얼을 확인하세요."}
          </div>
        </div>
        <div className="main-box2">
          <h2 className="menu-title2">메일 작성 매뉴얼</h2>
          <div className="menu-tabs2">
            <button onClick={() => callOpenAI('직장 생활 중 메일 제목 작성 시 매뉴얼을 10문장으로 작성하고 숫자로 정리해서 알려줘. 다른 말 없이 번호로만 정리되도록 하고 ~합니다.로 끝나게 해줘', setEmailOutput)}>제목</button>
            <button onClick={() => callOpenAI('직장 생활 중 메일 본문 작성 시 매뉴얼을 10문장으로 작성하고 숫자로 정리해서 알려줘. 다른 말 없이 번호로만 정리되도록 하고 ~합니다.로 끝나게 해줘', setEmailOutput)}>본문</button>
            <button onClick={() => callOpenAI('직장 생활 중 메일 답장 시 매뉴얼을 10문장으로 작성하고 숫자로 정리해서 알려줘. 다른 말 없이 번호로만 정리되도록 하고 ~합니다.로 끝나게 해줘', setEmailOutput)}>답장</button>
            <button onClick={() => callOpenAI('직장 생활 중 메일 참조 시 매뉴얼을 10문장으로 작성하고 숫자로 정리해서 알려줘. 다른 말 없이 번호로만 정리되도록 하고 ~합니다.로 끝나게 해줘', setEmailOutput)}>참조</button>
            <button onClick={() => callOpenAI('직장 생활 중 메일 발송 시 매뉴얼을 10문장으로 작성하고 숫자로 정리해서 알려줘. 다른 말 없이 번호로만 정리되도록 하고 ~합니다.로 끝나게 해줘', setEmailOutput)}>확인</button>
          </div>
          <div className="output-box" id="email-output">
            {emailOutput || "버튼을 눌러 메일 작성 매뉴얼을 확인하세요."}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Manual;
