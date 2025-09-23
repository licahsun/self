import "../scss/_System.scss"
import systemItem from '../assets/images/systemItem.avif'
import systemVideo from '../assets/images/systemVideo.avif'

const System = () => {
    return (
        <>
            <section className="system">
                <div className="video"></div>
                <div className="systemVideo">
                    <img src={systemVideo} alt="" />
                </div>
                <h2>SYSTEM</h2>
                <p>
                    每一次點擊與滑動，都將隨著節拍點亮整個都市。<br /><br />
                    玩家將透過霓虹閃耀的介面設計、流暢的判定線特效 與 沉浸式角色互動畫面，體驗前所未有的音樂節奏冒險。<br /><br />
                    不論是挑戰高速曲目的快感，還是解鎖角色專屬劇情的細膩情感，遊戲畫面都將引領你一步步深入這座未來都市的律動核心。
                </p>
                <img className="systemItem" src={systemItem} alt="" />
            </section>
        </>
    )
}

export default System