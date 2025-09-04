import './App.scss'
import Logo from '../public/images/s7igma.svg'

function App() {

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

        <section className='introduction'>
          <div className='introTitle'>
            <h2 className='introH2'>WORLD</h2>
          </div>
          <div className='introP'>
            <p>歡迎來到『同步作戰單元』</p>
            <p>在這裡，我們的戰術不是依賴本能，而是數據。<br /><br />
              你所配備的作戰系統，能即時將環境中的音波數據，轉化為武器的最佳射擊節奏。</p>
            <p>精準命中節拍，不僅能將後座力降至為零，更能觸發特殊彈藥的裝填或超載能力。<br />
              你需要在混亂的戰場中，找出隱藏的音樂流，並將其轉化為你的戰術優勢。</p><br />
            <p>準備好，<br />
              將你的反應力與戰術思維提升至全新的境界。</p>
          </div>
        </section>

        <section>
          <p>LOG IN TO COMBAT SYSTEM  LOG IN TO COMBAT SYSTEM</p>
        </section>

        <section>
          <h2>SYSTEM</h2>
          <p>
            每一次點擊與滑動，都將隨著節拍點亮整個都市。<br /><br />
            玩家將透過霓虹閃耀的介面設計、流暢的判定線特效 與 沉浸式角色互動畫面，體驗前所未有的音樂節奏冒險。<br /><br />
            不論是挑戰高速曲目的快感，還是解鎖角色專屬劇情的細膩情感，遊戲畫面都將引領你一步步深入這座未來都市的律動核心。
          </p>
        </section>

        <section>
          <h2>CHARACTER</h2>
          <h3>角色名</h3>
          <p>角色介紹</p>
        </section>

        <section>
          <h2>MUSIC</h2>
        </section>

        <section>
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
