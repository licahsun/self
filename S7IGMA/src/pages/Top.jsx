import "../scss/_Top.scss"
import Logo from '../../public/images/s7igma.svg'

const Top = () => {
    return (
        <>
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
        </>
    )
}

export default Top