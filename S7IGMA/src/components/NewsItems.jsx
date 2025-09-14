import "../scss/_NewsItems.scss"

const News = () => {
    const newsContent = [
        {
            id: 1,
            date: '2025/08/09',
            eventDateF: '2025/09/10',
            eventDateT: '2025/09/12',
            title: '【遊戲內活動】限時關卡〈Neon Pulse Challenge〉開放！'
        },
        {
            id: 2,
            date: '2025/08/09',
            eventDateF: '2025/09/10',
            eventDateT:'2025/09/12',
            title: '【遊戲內活動】限時關卡〈Neon Pulse Challenge〉開放！'
        },
        {
            id: 3,
            date: '2025/08/09',
            eventDateF: '2025/09/10',
            eventDateT:'2025/09/12',
            title: '【遊戲內活動】限時關卡〈Neon Pulse Challenge〉開放！'
        },
        {
            id: 4,
            date: '2025/08/09',
            eventDateF: '2025/09/10',
            eventDateT: '2025/09/12',
            title: '【遊戲內活動】限時關卡〈Neon Pulse Challenge〉開放！'
        },
        {
            id: 5,
            date: '2025/08/09',
            eventDateF: '2025/09/10',
            eventDateT:'2025/09/12',
            title: '【遊戲內活動】限時關卡〈Neon Pulse Challenge〉開放！'
        },
    ];

    const sortedNews = newsContent.sort((a, b) => new Date(b.date) - new Date(a.date));
    return (
        <div className="newsContainer">
            {sortedNews.map((news, index) => (
                <NewsItem
                    key={news.id}
                    news={news}
                    isLatest={index === 0} // 標記最新的消息
                />
            ))}
        </div>
    );
}

function NewsItem({ news, isLatest }) {
    return (
        <div className={`newsItem ${isLatest ? 'latest' : ''}`}>
            <div className="newsHeader">
                <span className="newsDate">{news.date}</span>
                {isLatest && <span className="newBadge">&nbsp;&nbsp;&nbsp;NEW!</span>}
            </div>
            <div className="eventDate">{news.eventDateF}<br />-<br />{news.eventDateT}</div>
            <h3 className="newsTitle">{news.title}</h3>
        </div>
    );
}

export default News