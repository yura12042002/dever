import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../app/rootReducer";
import '../style/ArticlePage.css'; 

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const article = useSelector(
    (state: RootState) => state.article.currentArticle
  );

  if (!article || article.id.toString() !== id) {
    return <p className="not-found">Статья не найдена!</p>;
  }

  return (
    <div className="article-page">
      <h1 className="article-title">{article.title}</h1>
      <p className="article-content">{article.content}</p>
    </div>
  );
};

export default ArticlePage;