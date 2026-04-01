import { useParams } from "react-router-dom";
import { news } from "../data/news";
import { Link } from "react-router-dom";
import './NewsArticle.css';
import divider from '../assets/decorations/divider.webp';

function NewsArticle() {

  const { slug } = useParams()

  const article = news.find(item => item.slug === slug)

  if (!article) {
    return <h2>News not found</h2>
  }

  return (
    <section className="news__item">
      <div className="container">
        <div className="news__item-inner">
            <h1>{article.title}</h1>
            <p>{article.date}</p>

            <img className="news__item-img" src={article.image} alt={article.title} />

            <p>{article.text}</p>
            <img className="divider" src={divider} alt="divider" />
            <Link className="button button__primary" to="/vijesti">Nazad na vijesti</Link>
        </div>
      </div>

    </section>

    
  )
}

export default NewsArticle;