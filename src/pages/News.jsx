import "./News.css";
import NewsCard from '../components/ui/Cards/NewsCard';
import Button from '../components/ui/Button/Button';
import { news } from "../data/news";

function News() {
  return (
    <section className="news">
        <div className="container">
            <div className="news__inner">
                <h1 className="news__title" >Vijesti</h1>
                <div className="news__list">
                    {news.map(item => (
                        <NewsCard key={item.id} news={item} />
                    ))}
                </div>
                <Button className="button" variant="primary">Arhiva vijesti</Button>
            </div>
        </div>
    </section>
  )
}

export default News;