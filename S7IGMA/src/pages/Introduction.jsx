import "../scss/_Introduction.scss"
import introCircle from '../../public/images/introCircle.avif'
import introItem from '../../public/images/introItem.webp'
import introItem3 from '../../public/images/introItem03.svg'
import introItem4 from '../../public/images/introItem04.svg'

const Introduction = () => {
    return (
        <>
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
        </>
    )
}

export default Introduction