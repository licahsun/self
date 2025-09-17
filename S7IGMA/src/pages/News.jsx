import NewsItems from "../components/NewsItems"
import "../scss/_News.scss"

const News = () => {
    return (
        <>
            <section className="news">
                <div className="newsH2"><h2>NEWS</h2></div>
                <div className="newsContent">
                    <div className="dateTitle">
                        <div className="date">DATE</div>
                        <div className="title">TITLE</div>
                    </div>
                    <NewsItems />
                </div>
            </section>
        </>
    )
}

export default News