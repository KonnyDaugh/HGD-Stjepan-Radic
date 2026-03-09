import './Home.css';
import Button from '../components/ui/Button/Button';

function Home() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className='hero__title'>LIMENA GLAZBA ŽRNOVNICA</h1>
        <p>Osnovana davne 1911. godine, žrnovska limena glazba predstavlja izuzetno vrijednu kulturnu baštinu šireg splitskog područja.</p>
        <Button variant="primary">Saznaj više</Button>
      </div>
    </section>
  )
}

export default Home