import './Home.css';
import { Link } from "react-router-dom";
import EventCard from '../components/ui/Cards/EventCard';

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
          <h2>Predstojeći nastup</h2>

          <EventCard />
        </div>
      </section>
    </>
  )
}

export default Home; 