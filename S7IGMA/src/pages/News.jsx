import NewsItems from "../components/NewsItems"
import "../scss/_News.scss"

const News = () => {
    return (
        <>
            <section className="news">
                {/* <!-- 左側裝飾區域 --> */}
                <div class="left-decoration">
                    <div class="news-vertical">NEWS</div>
                    <div class="circular-decoration"></div>
                    <div class="bottom-dots">
                        <div class="dot active"></div>
                        <div class="dot"></div>
                    </div>
                </div>
                <NewsItems />
            </section>
        </>
    )
}

export default News