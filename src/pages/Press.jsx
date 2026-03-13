import './Press.css';
import PressCard from '../components/ui/Cards/PressCard';
import {press} from '../data/press';

function Press() {
  return (
    <section className='press' >
        <div className="container">
            <div className="container__press">
                <h1>Mediji o nama</h1>
                <div className="press__list">
                    {press.map(item => (
                        <PressCard 
                            key={item.id}
                            title={item.title}
                            press={item.pressName}
                            text={item.text}
                            image={item.img}
                            url={item.url}
                        />
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Press;