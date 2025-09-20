import "../scss/_ScrollToTop2.scss"
import React, { useState, useEffect } from 'react';
import "../scss/_ScrollToTop2.scss"

const ScrollToTop2 = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            <button 
                className={`back-to-top ${isVisible ? 'visible' : ''}`}
                onClick={scrollToTop}
                style={{
                    opacity: isVisible ? '1' : '0.7',
                    pointerEvents: 'auto'
                }}
            >
                <div className="button-container">
                    {/* 三個軌道圓圈 */}
                    <div className="orbit orbit-1">
                        <div className="sDot sDot-1"></div>
                    </div>
                    <div className="orbit orbit-2">
                        <div className="sDot sDot-2"></div>
                    </div>
                    <div className="orbit orbit-3">
                        <div className="sDot sDot-3"></div>
                    </div>

                    {/* 中央箭頭 */}
                    <div className="arrow"></div>
                </div>
            </button>
        </div>
    )
}

export default ScrollToTop2