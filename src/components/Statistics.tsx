import React from 'react';
import { Article } from '../types';
import '../style/Statistics.css'

interface StatisticsProps {
  articles: Article[];
}

const Statistics: React.FC<StatisticsProps> = ({ articles }) => {
  const totalArticles = articles.length;
  const totalCharacters = articles.reduce((acc, article) => acc + article.content.length, 0);

  return (
    <div className="statistics">
      <h4>Статистика блога</h4>
      <table>
        <tbody>
          <tr>
            <th>Количество статей</th>
            <td>{totalArticles}</td>
          </tr>
          <tr>
            <th>Общее количество символов в статьях</th>
            <td>{totalCharacters}</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
