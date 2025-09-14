import NewsItems from "../components/NewsItems"
import "../scss/_News.scss"

const News = () => {
    return (
        <>
        <section className="news">
        <div className="h2"><h2>NEWS</h2></div>
        <NewsItems/>
        </section>
        </>
    )
}

export default News