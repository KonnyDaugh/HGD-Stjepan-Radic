import divider from '../../../assets/decorations/divider.webp';
import './NewsCard.css';

function NewsCard({ title, date, image }) {
  return (
    <article className="news-card">
      <img src={image} alt={title} className="news-card__image" />

      <div className="news-card__content">
        <h3 className="news-card__title">{title}</h3>
        <div className="news-card__date">
            <img src={divider} alt="divider" className="divider"/>
            <p>{date}</p>
        </div>
        
      </div>
    </article>
  );
}

export default NewsCard;