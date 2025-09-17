// components/ScrollToTop.jsx (圖片版本)
import React, { useState, useEffect } from 'react';
// import './ScrollToTop.scss';
import topArrowIcon from '../../public/images/ToTheTop.avif'; 

const ScrollToTop = () => {
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
        <div
            className={`scroll-to-top-with-image ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    scrollToTop();
                }
            }}
            aria-label="回到頂部"
        >
            <img src={topArrowIcon} alt="回到頂部" />
        </div>
    );
};

export default ScrollToTop;