import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css'; 

const Header: React.FC = () => {
    return (
        <header className="blog-header">
            <div className="logo">
                <Link to="/">МойБлог</Link> 
            </div>
            <nav className="main-nav">
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/about">О нас</Link></li>
                    <li><Link to="/contact">Контакты</Link></li>
                </ul>
            </nav>
            <div className="search-bar">
                <input type="text" placeholder="Поиск..." />
            </div>
            <div className="user-login">
                <Link to="/login">Войти</Link>
            </div>
        </header>
    );
}

export default Header;