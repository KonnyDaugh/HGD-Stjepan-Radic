import './Home.css';
import { Link } from "react-router-dom";
import EventCard from '../components/ui/Cards/EventCard';
import { events } from '../data/events';

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <h1 className='hero__title'>LIMENA GLAZBA ŽRNOVNICA</h1>
          <p className='hero__text'>Osnovana davne 1911. godine, žrnovska limena glazba predstavlja izuzetno vrijednu kulturnu baštinu šireg splitskog područja.</p>
          <Link to="/o-nama" className='button button__primary'>Saznaj više</Link>
        </div>
      </section>

      <section className="events">
        <div className="container">
          <h2 className='events__title'>Predstojeći nastup</h2>

          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home; 