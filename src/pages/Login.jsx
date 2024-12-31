import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from '../img/logo.png';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); 
    if (username === 'user' && password === '1234') {
      alert('로그인이 완료되었습니다!');
      navigate('/home'); 
    } else {
      alert('아이디 또는 비밀번호가 잘못되었습니다.');
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="login-container">
        <div className="logo">
          <img src={logo} className="logoImg" alt="로고" />
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">아이디</label>
            <input
              type="text"
              id="username"
              placeholder="아이디를 입력하세요"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group checkbox-group">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">로그인 유지</label>
          </div>
          <button type="submit" className="login-button">로그인</button>
        </form>
        <div className="signup-link">
          <a href="/signup">회원가입</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
