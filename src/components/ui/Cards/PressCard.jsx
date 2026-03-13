import divider from '../../../assets/decorations/divider.webp';
import './PressCard.css';

function PressCard({ title, press, text, image, url }) {
  return (
    <a href={url} 
        className="press-card"
        target="_blank"
        rel="noopener noreferrer">
      <img src={image} alt={title} className="press-card__image" />

      <div className="press-card__content">
        <h3 className="press-card__title">{title}</h3>
        <p className='press-card__text'>{text}</p>
        <img src={divider} alt="divider" className="divider"/>
        <p className='press-card__press-name' >{press}</p>      
      </div>
    </a>
  );
}

export default PressCard;