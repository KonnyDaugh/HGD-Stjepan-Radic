import './EventCard.css';
import eventImg from '../../../assets/images/event-img.webp';
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";


function EventCard({event}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setIsVisible(true);
            }
        },
      {
        threshold: 0.2, // когда 20% видно
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);


  return ( 
    <div ref={ref} className={`event-card ${isVisible ? 'event-card__visible' : ''}`}>

        <div className="event-card__bg">
            <img src={eventImg} alt="event" />
        </div>
    
        <div className="event-card__date">
            <svg className="event-card__date-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path fill="#c6a45c" d="M224 64C241.7 64 256 78.3 256 96L256 128L384 128L384 96C384 78.3 398.3 64 416 64C433.7 64 448 78.3 448 96L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 96C192 78.3 206.3 64 224 64zM160 304L160 336C160 344.8 167.2 352 176 352L208 352C216.8 352 224 344.8 224 336L224 304C224 295.2 216.8 288 208 288L176 288C167.2 288 160 295.2 160 304zM288 304L288 336C288 344.8 295.2 352 304 352L336 352C344.8 352 352 344.8 352 336L352 304C352 295.2 344.8 288 336 288L304 288C295.2 288 288 295.2 288 304zM432 288C423.2 288 416 295.2 416 304L416 336C416 344.8 423.2 352 432 352L464 352C472.8 352 480 344.8 480 336L480 304C480 295.2 472.8 288 464 288L432 288zM160 432L160 464C160 472.8 167.2 480 176 480L208 480C216.8 480 224 472.8 224 464L224 432C224 423.2 216.8 416 208 416L176 416C167.2 416 160 423.2 160 432zM304 416C295.2 416 288 423.2 288 432L288 464C288 472.8 295.2 480 304 480L336 480C344.8 480 352 472.8 352 464L352 432C352 423.2 344.8 416 336 416L304 416zM416 432L416 464C416 472.8 423.2 480 432 480L464 480C472.8 480 480 472.8 480 464L480 432C480 423.2 472.8 416 464 416L432 416C423.2 416 416 423.2 416 432z"/>
            </svg>
            <span className="event-card__day">{event.day}</span>
            <span className="event-card__month">{event.month}</span>
            <span className="event-card__year">{event.year}</span>
        </div>

        <div className="event-card__content">
            <p className="event-card__type">{event.type}</p>

            <h3 className="event-card__title">
            {event.title}
            </h3>

            <span className='line'></span>

            <div className="event-card__meta">
                <svg className='event-card__location-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path fill="#c6a45c" d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"/>
                </svg>

                <p className="event-card__location">
                    {event.location}
                </p>
            </div>

            <div className="event-card__meta">
                <svg className='event-card__location-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path fill="#c6a45c" d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/>
                </svg>
                <p className="event-card__time">
                    {event.time}    
                </p>
            </div>

            <p className="event-card__description">
            {event.description}
            </p>

            <div className="event-card__actions">
                <button className="button button__primary">
                    <svg className='button-ticket-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M96 128C60.7 128 32 156.7 32 192L32 256C32 264.8 39.4 271.7 47.7 274.6C66.5 281.1 80 299 80 320C80 341 66.5 358.9 47.7 365.4C39.4 368.3 32 375.2 32 384L32 448C32 483.3 60.7 512 96 512L544 512C579.3 512 608 483.3 608 448L608 384C608 375.2 600.6 368.3 592.3 365.4C573.5 358.9 560 341 560 320C560 299 573.5 281.1 592.3 274.6C600.6 271.7 608 264.8 608 256L608 192C608 156.7 579.3 128 544 128L96 128zM448 400L448 240L192 240L192 400L448 400zM144 224C144 206.3 158.3 192 176 192L464 192C481.7 192 496 206.3 496 224L496 416C496 433.7 481.7 448 464 448L176 448C158.3 448 144 433.7 144 416L144 224z"/></svg>
                    <span>Kupi ulaznice</span>
                    
                </button>

                <button className="button button__secondary">
                    Saznaj više &rarr;
                </button>
            </div>
        </div>
    </div>
    );
}
EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    title: PropTypes.string,
    day: PropTypes.string,
    month: PropTypes.string,
    year: PropTypes.string,
    image: PropTypes.string,
    location: PropTypes.string,
    time: PropTypes.string,
    description: PropTypes.string
  }).isRequired
};

export default EventCard; 