import './EventCard.css';
import eventImg from '../../../assets/images/event-img.jpg';


function EventCard() {
  return ( 
    <div className="event-card">
    
        <div className="event-card__date">
            <span className="event-card__day">24</span>
            <span className="event-card__month">SVIBNJA</span>
            <span className="event-card__year">2025</span>
        </div>

        <div className="event-card__content">
            <p className="event-card__type">KONCERT</p>

            <h3 className="event-card__title">
            Proljetni koncert Gradske glazbe
            </h3>

            <div className="event-card__meta">
                <p className="event-card__location">
                    HNK Split
                </p>

                <p className="event-card__time">
                    20:00
                </p>
            </div>

            <p className="event-card__description">
            Pozivamo vas na tradicionalni proljetni koncert...
            </p>

            <div className="event-card__actions">
                <button className="button button__primary">
                    Kupi ulaznice
                </button>

                <button className="button">
                    Saznaj više
                </button>
            </div>
        </div>

        <div className="event-card__image" >
            <img src={eventImg} alt="event" />
        </div>

    </div>
    );
}

export default EventCard; 