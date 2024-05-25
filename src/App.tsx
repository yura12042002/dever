import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Main from './pages/Main.tsx';
import ArticlePage from './pages/ArticlePage.tsx';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/article/:id" element={<ArticlePage />} />
                    <Route path="*" element={<Main />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;