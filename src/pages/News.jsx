import "./News.css";
import NewsCard from '../components/ui/Cards/NewsCard';
import img from '../assets/images/news1.jpg';
import Button from '../components/ui/Button/Button';

function News() {
  return (
    <section className="news">
        <div className="container">
            <div className="container__news">
                <h1>Vijesti</h1>
                <div className="news__list">
                    <NewsCard 
                        title="Novi koncert orkestra"
                        date="12.03.2026"
                        image={img}/>
                    <NewsCard 
                        title="Novi koncert orkestra"
                        date="12.03.2026"
                        image={img}/>
                    <NewsCard 
                        title="Novi koncert orkestra"
                        date="12.03.2026"
                        image={img}/>
                </div>
                <Button variant="primary">Arhiva vijesti</Button>
            </div>
        </div>
    </section>
  )
}

export default News;