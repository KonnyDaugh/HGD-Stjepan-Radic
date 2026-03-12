import "./News.css";
import NewsCard from '../components/ui/Cards/NewsCard';
import Button from '../components/ui/Button/Button';
import { news } from "../data/news";

function News() {
  return (
    <section className="news">
        <div className="container">
            <div className="container__news">
                <h1>Vijesti</h1>
                <div className="news__list">
                    {news.map(item => (
                        <NewsCard key={item.id} news={item} />
                    ))}

                    {/* <NewsCard 
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
                        image={img}/> */}
                </div>
                <Button variant="primary">Arhiva vijesti</Button>
            </div>
        </div>
    </section>
  )
}

export default News;