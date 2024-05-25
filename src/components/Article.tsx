import React from 'react';
import '../style/Article.css'
import { useDispatch } from 'react-redux';
import { setCurrentArticle } from '../features/ArticlesSlice.ts';
import { useNavigate } from 'react-router-dom';

interface ArticleProps {
  id: number;  
  title: string;
  description: string;
  content: string;
  imgLink: string;
}

const Article: React.FC<ArticleProps> = ({ id, title, description, content, imgLink }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleReadMoreClick = () => {
    dispatch(setCurrentArticle(id));
    navigate(`/article/${id}`);
  };

  return (
    <div className="article-container" >
      <img className='article-image' src={imgLink} alt={title.split(' ')[0]}/>
      <h2 className="article-title">{title}</h2>
      <p className="article-description">{description}</p>
      <table className="article-stats-table">
        <tbody>
          <tr>
            <td>Символов:</td>
            <td>{content.length}</td>
          </tr>
          <tr>
            <td>Слов:</td>
            <td>{content.split(/\s+/).filter(Boolean).length}</td>
          </tr>
        </tbody>
      </table>
      <button className="read-more-btn" onClick={handleReadMoreClick}>Подробнее</button> 
    </div>
  );
};

export default Article;