import { useState, useEffect, useRef } from 'react';
import './App.scss'
import Character from "./pages/Character"
import Logo from '../public/images/s7igma.svg'
import introCircle from '../public/images/introCircle.avif'
import introItem from '../public/images/introItem.webp'
import introItem3 from '../public/images/introItem03.svg'
import introItem4 from '../public/images/introItem04.svg'
import systemItem from '../public/images/systemItem.avif'

function App() {
  // 為每個區塊建立獨立的狀態
  const [isIntroVisible, setIsIntroVisible] = useState(false);
  const [isSystemVisible, setIsSystemVisible] = useState(false);
  const [isCharacterVisible, setIsCharacterVisible] = useState(false);
  const [isMusicVisible, setIsMusicVisible] = useState(false);
  const [isNewsVisible, setIsNewsVisible] = useState(false);

  // 為每個區塊建立獨立的 ref
  const introRef = useRef(null);
  const systemRef = useRef(null);
  const characterRef = useRef(null);
  const musicRef = useRef(null);
  const newsRef = useRef(null);

  // 建立通用的 Intersection Observer 函數
  const createObserver = (setVisible) => {
    return new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.3, // 當 30% 的區域進入視窗時觸發
        rootMargin: '-50px 0px' // 提前 50px 觸發
      }
    );
  };

  useEffect(() => {
    // 為每個區塊建立 observer
    const introObserver = createObserver(setIsIntroVisible);
    const systemObserver = createObserver(setIsSystemVisible);
    const characterObserver = createObserver(setIsCharacterVisible);
    const musicObserver = createObserver(setIsMusicVisible);
    const newsObserver = createObserver(setIsNewsVisible);

    // 開始觀察各個區塊
    if (introRef.current) introObserver.observe(introRef.current);
    if (systemRef.current) systemObserver.observe(systemRef.current);
    if (characterRef.current) characterObserver.observe(characterRef.current);
    if (musicRef.current) musicObserver.observe(musicRef.current);
    if (newsRef.current) newsObserver.observe(newsRef.current);

    // 清理函數
    return () => {
      if (introRef.current) introObserver.unobserve(introRef.current);
      if (systemRef.current) systemObserver.unobserve(systemRef.current);
      if (characterRef.current) characterObserver.unobserve(characterRef.current);
      if (musicRef.current) musicObserver.unobserve(musicRef.current);
      if (newsRef.current) newsObserver.unobserve(newsRef.current);
    };
  }, []);

  return (
    <>
      <main>
        <div className="top">
          <header className='topBg'></header>
          <div>
            <div className='menu_logo'>
              <img src={Logo} alt="" />
              <span>The Pulse That Guides the Streets</span>
            </div>

            <ul className="menu">
              <img src={Logo} alt="" />
              <li><a href="#">INTRODUCTION</a></li>
              <li><a href="#">SYSTEM</a></li>
              <li><a href="#">CHARACTER</a></li>
              <li><a href="#">MUSIC</a></li>
              <li><a href="#">NEWS</a></li>
            </ul>
            <div className='menu_p'>
              <p>無聲之城，暗潮湧動</p>
            </div>
          </div>
          <button>事前登入，即獲得UR角色</button>
        </div>

        <section
          ref={introRef}
          className={`introduction ${isIntroVisible ? 'visible' : ''}`}
        >
          <div className='introCircle'><img src={introCircle} alt="" /></div>
          <div className="introItem1"><img src={introItem} alt="" /></div>
          <div className="introItem2"><img src={introItem} alt="" /></div>
          <div className="introItem3"><img src={introItem3} alt="" /></div>
          <div className="introItem4"><img src={introItem4} alt="" /></div>

          <div className='introTitle'>
            {/* <h2 className='introH2'>WORLD</h2> */}
          </div>

          <div className="introWords">
            <div className='introPWord'><p>歡迎來到『同步作戰單元』</p></div><br />
            <div className='introPWord'><p>在這裡，我們的戰術不是依賴本能，而是數據。<br />
              你所配備的作戰系統，能即時將環境中的音波數據，轉化為武器的最佳射擊節奏。</p></div><br />
            <div className='introPWord'><p>精準命中節拍，不僅能將後座力降至為零，更能觸發特殊彈藥的裝填或超載能力。<br />
              你需要在混亂的戰場中，找出隱藏的音樂流，並將其轉化為你的戰術優勢。</p></div><br />
            <div className='introPWord'><p>準備好，<br />
              將你的反應力與戰術思維提升至全新的境界。</p></div>
          </div>
        </section>

        <section className='marqueeSec'>
          <div className="marquee">
            <div className="track">
              <div className="content">&nbsp;LOG IN TO COMBAT SYSTEM  LOG IN TO COMBAT SYSTEM  LOG IN TO COMBAT SYSTEM  LOG IN TO COMBAT SYSTEM  LOG IN TO COMBAT SYSTEM  LOG IN TO COMBAT SYSTEM</div>
            </div>
          </div>
        </section>

        <section
          ref={systemRef}
          className={`system ${isSystemVisible ? 'visible' : ''}`}>

          <div className="video"></div>
          <h2>SYSTEM</h2>
          <p>
            每一次點擊與滑動，都將隨著節拍點亮整個都市。<br /><br />
            玩家將透過霓虹閃耀的介面設計、流暢的判定線特效 與 沉浸式角色互動畫面，體驗前所未有的音樂節奏冒險。<br /><br />
            不論是挑戰高速曲目的快感，還是解鎖角色專屬劇情的細膩情感，遊戲畫面都將引領你一步步深入這座未來都市的律動核心。
          </p>
          <img src={systemItem} alt="" />
        </section>

        <section
          ref={characterRef}
          className={`character-section ${isCharacterVisible ? 'visible' : ''}`}
        >
          <Character />
        </section>

        <section
          ref={musicRef}
          className={`music-section ${isMusicVisible ? 'visible' : ''}`}
        >
          <h2>MUSIC</h2>
        </section>

        <section
          ref={newsRef}
          className={`news-section ${isNewsVisible ? 'visible' : ''}`}
        >
          <h2>NEWS</h2>
        </section>
      </main>

      <footer>
        <h2>S7IGMA</h2>
      </footer>
    </>
  )
}

export default App