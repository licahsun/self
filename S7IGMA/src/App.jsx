import { useState, useEffect, useRef } from 'react';
import './App.scss'
import Top from "../src/pages/Top"
import Introduction from "../src/pages/Introduction"
import System from "../src/pages/System"
import Character from "./pages/Character"
import Music from "./pages/Music"
import News from "./pages/News"


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
        <section>
          <Top />
        </section>

        <section
          ref={introRef}
          className={`introduction ${isIntroVisible ? 'visible' : ''}`}
        >
          <Introduction />
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
          <System />
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
          <Music />
        </section>

        <section
          ref={newsRef}
          className={`news-section ${isNewsVisible ? 'visible' : ''}`}
        >
        <News/>
        </section>
      </main>

      <footer>
        <h2>S7IGMA</h2>
      </footer>
    </>
  )
}

export default App