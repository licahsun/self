import "../scss/_Top.scss"
import Logo from '../assets/images/s7igma.svg'
import React, { useRef } from 'react';

const Top = ({ sectionRefs }) => {
    const scrollToSection = (elementRef, offset = 0) => {
        if (elementRef.current) {
            const elementPosition = elementRef.current.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };
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
                        <li><a onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(sectionRefs.introRef);
                        }}
                            href="#introduction">INTRODUCTION</a></li>
                        <li><a onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(sectionRefs.systemRef);
                        }}
                            href="#system">SYSTEM</a></li>
                        <li><a onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(sectionRefs.characterRef);
                        }}
                            href="#character">CHARACTER</a></li>
                        <li><a onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(sectionRefs.musicRef);
                        }}
                            href="#music">MUSIC</a></li>
                        <li><a onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(sectionRefs.newsRef);
                        }}
                            href="#news">NEWS</a></li>
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