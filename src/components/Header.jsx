import React from 'react';
import logo from '../img/logo.png';
import { useNavigate } from 'react-router-dom';
import './Header.css'; // 스타일을 여기에 작성하거나 외부 파일로 관리

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="header">
            <img src={logo} className="logoImg" onClick={()=>navigate('/')} />
            <nav className="navigation">
                <ul>
                    <li onClick={() => navigate('/manual')}>직장생활매뉴얼</li>
                    <li onClick={() => navigate('/dictionary')}>직장어사전</li>
                    <li onClick={() => navigate('/memo')}>업무메모</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
