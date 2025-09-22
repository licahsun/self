import "../scss/_NewsItems.scss"


import { useState } from 'react';

const News = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 4;

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
            date: '2025/08/08',
            eventDateF: '2025/09/08',
            eventDateT: '2025/09/10',
            title: '【線下活動】Neo City Live 音樂祭 × 玩家見面會'
        },
        {
            id: 3,
            date: '2025/08/07',
            eventDateF: '2025/09/05',
            eventDateT: '2025/09/07',
            title: '【線下活動】S7igma 官方快閃店 × 原創週邊販售'
        },
        {
            id: 4,
            date: '2025/08/06',
            eventDateF: '2025/09/03',
            eventDateT: '2025/09/05',
            title: '【遊戲內活動】公會對戰賽〈Neon Clash〉報名開放！'
        },
        {
            id: 5,
            date: '2025/08/05',
            eventDateF: '2025/09/01',
            eventDateT: '2025/09/03',
            title: '【系統更新】新角色「Aurora」即將登場！'
        },
        {
            id: 6,
            date: '2025/08/04',
            eventDateF: '2025/08/28',
            eventDateT: '2025/08/30',
            title: '【維護公告】伺服器例行維護通知'
        },
        {
            id: 7,
            date: '2025/08/03',
            eventDateF: '2025/08/25',
            eventDateT: '2025/08/27',
            title: '【雙倍獎勵】週末特別活動開跑'
        },
        {
            id: 8,
            date: '2025/08/02',
            eventDateF: '2025/08/22',
            eventDateT: '2025/08/24',
            title: '【新功能】公會系統正式上線！'
        },
    ];

    const sortedNews = newsContent.sort((a, b) => new Date(b.date) - new Date(a.date));

    // 計算總頁數
    const totalPages = Math.ceil(sortedNews.length / ITEMS_PER_PAGE);

    // 取得當前頁面要顯示的資料
    const currentItems = sortedNews.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    // 處理頁面變更
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    // 生成分頁按鈕
    const renderPaginationButtons = () => {
        const buttons = [];

        // 第一頁和上一頁按鈕
        buttons.push(
            <button
                key="first"
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
            >
                ‹
            </button>
        );

        buttons.push(
            <button
                key="prev"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                ‹
            </button>
        );

        // 頁碼按鈕
        for (let i = 1; i <= totalPages; i++) {
            buttons.push(
                <button
                    key={i}
                    className={currentPage === i ? 'active' : ''}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </button>
            );
        }

        // 下一頁和最後頁按鈕
        buttons.push(
            <button
                key="next"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                ›
            </button>
        );

        buttons.push(
            <button
                key="last"
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
            >
                ›
            </button>
        );

        return buttons;
    };

    return (
        <div className="news-section">
            <div className="content-area">
                <div className="top-decoration"></div>

                <div className="table-header">
                    <div className="header-date">DATE</div>
                    <div className="header-title">TITLE</div>
                </div>

                <div className="news-list">
                    {currentItems.map((news, index) => {
                        // 計算在整個排序後陣列中的實際索引
                        const actualIndex = (currentPage - 1) * ITEMS_PER_PAGE + index;
                        return (
                            <div key={news.id} className="news-item">
                                <div className="date-column">
                                    <div className="publish-date">
                                        {news.date}
                                        {actualIndex === 0 && <span className="new-badge">&nbsp;&nbsp;NEW!</span>}
                                    </div>
                                    <div className="event-dates">
                                        <div>{news.eventDateF}</div>
                                        <div className="separator">—</div>
                                        <div>{news.eventDateT}</div>
                                    </div>
                                </div>
                                <div className="title-column">
                                    <div className="news-title">{news.title}</div>
                                </div>
                                
                                <a href="#" className="RM">Read More</a>
                            </div>
                        );
                    })}
                </div>

                <div className="pagination">
                    {renderPaginationButtons()}
                </div>

                <div className="bottom-decoration"></div>
            </div>
        </div>
    );
}


export default News