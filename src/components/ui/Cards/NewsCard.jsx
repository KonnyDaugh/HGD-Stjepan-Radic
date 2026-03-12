import { Link } from "react-router-dom";

import divider from '../../../assets/decorations/divider.webp';
import './NewsCard.css';

function NewsCard({news}) {
  return (
    <Link to={`/vijesti/${news.slug}`}>
        <article className="news-card">
            <img src={news.image} alt={news.title} className="news-card__image" />

            <div className="news-card__content">
                <h3 className="news-card__title">{news.title}</h3>
                <div className="news-card__date">
                    <img src={divider} alt="divider" className="divider"/>
                    <p>{news.date}</p>
                </div>      
            </div>
        </article>
    </Link>
  );
}

export default NewsCard;