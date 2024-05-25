import React from 'react';
import '../style/Footer.css'; 

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2024 My Blog. Все права защищены.</p>
                <div className="social-links">
                    <a href="#1" rel="noreferrer">vk</a>
                    <a href="#1" rel="noreferrer">Telegram</a>
                    <a href="#1" rel="noreferrer">Ok</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;