import NewsItems from "../components/NewsItems"
import "../scss/_News.scss"

const News = () => {
    return (
        <>
            <section className="news">
                {/* <!-- 左側裝飾區域 --> */}
                <div className="left-decoration">
                    <div className="news-vertical">NEWS</div>
                    <div className="circular-decoration"></div>
                    <div className="bottom-dots">
                        <div className="dot active"></div>
                        <div className="dot"></div>
                    </div>
                </div>
                <NewsItems />
            </section>
        </>
    )
}

export default News