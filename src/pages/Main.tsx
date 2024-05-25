import React from "react";
import "../style/MainPage.css";
import articles from "../data/articles.tsx";
import Article from "../components/Article.tsx";
import Statistics from "../components/Statistics.tsx";

const Main: React.FC = () => {
  return (
    <main>
      <h1 className="mainTitle">Статьи</h1>
      <div className="articlesBlock">
        {articles.map((article, index) => (
          <Article
            key={index}
            id={article.id}
            title={article.title}
            description={article.description}
            content={article.content}
            imgLink={article.img}
          />
        ))}
        <Statistics articles={articles} />
      </div>
    </main>
  );
};

export default Main;
