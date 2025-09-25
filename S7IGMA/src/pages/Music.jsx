import "../scss/_Music.scss"
//img
import album01 from "../assets/images/album01.avif"
import album02 from "../assets/images/album02.avif"
import album03 from "../assets/images/album03.avif"
import album04 from "../assets/images/album04.avif"
import album05 from "../assets/images/album05.avif"
import AlbumCarousel from "../components/AlbumCarousel"

import { useState, useEffect, useRef } from 'react';

const Music = () => {
    const [musicIsPlaying, setMusicIsPlaying] = useState(false);
    const [musicCurrentIndex, setMusicCurrentIndex] = useState(0);
    const [musicIsMuted, setMusicIsMuted] = useState(false);
    const musicAudioRef = useRef(null);
    const musicCarouselRef = useRef(null);


    // 音樂數據
    const musicTracks = [
        {
            id: 1,
            musicTitle: 'Neon Pulse',
            musicArtist: 'Digital Dreams',
            musicCover: album01,
            musicSrc: '', 
            musicDuration: 180 
        },
        {
            id: 2,
            musicTitle: 'Cyber Symphony',
            musicArtist: 'Future Bass',
            musicCover: album02,
            musicSrc: '',
            musicDuration: 210
        },
        {
            id: 3,
            musicTitle: 'Electric Horizon',
            musicArtist: 'Synth Wave',
            musicCover: album03,
            musicSrc: '',
            musicDuration: 195
        },
        {
            id: 4,
            musicTitle: 'Digital Rain',
            musicArtist: 'Ambient Pulse',
            musicCover: album04,
            musicSrc: '',
            musicDuration: 240
        },
        {
            id: 5,
            musicTitle: 'Quantum Beat',
            musicArtist: 'Tech House',
            musicCover: album05,
            musicSrc: '',
            musicDuration: 225
        }
    ];

    const musicCurrentTrack = musicTracks[musicCurrentIndex];

    // 播放/暫停控制
    const musicTogglePlay = () => {
        if (musicIsPlaying) {
            setMusicIsPlaying(false);
            if (musicAudioRef.current) {
                musicAudioRef.current.pause();
            }
        } else {
            setMusicIsPlaying(true);
            if (musicAudioRef.current) {
                musicAudioRef.current.play();
            }
        }
    };

    // 靜音控制
    const musicToggleMute = () => {
        setMusicIsMuted(!musicIsMuted);
        if (musicAudioRef.current) {
            musicAudioRef.current.muted = !musicIsMuted;
        }
    };

    // 下一首歌
    const musicNextTrack = () => {
        setMusicCurrentIndex((prevIndex) =>
            (prevIndex + 1) % musicTracks.length
        );
    };

    // 上一首歌
    const musicPrevTrack = () => {
        setMusicCurrentIndex((prevIndex) =>
            prevIndex === 0 ? musicTracks.length - 1 : prevIndex - 1
        );
    };

    // 選擇特定歌曲
    const musicSelectTrack = (index) => {
        setMusicCurrentIndex(index);
    };

    // 音樂播放完畢自動下一首
    const musicHandleEnded = () => {
        musicNextTrack();
    };

    // 更新輪播位置 - 讓選中的項目在絕對中央
    useEffect(() => {
        if (musicCarouselRef.current) {
            const musicItemWidth = 320; // 項目寬度 + gap

            // 直接將選中項目移動到中央位置
            // 中央項目的索引應該對應 translateX 為 0
            const musicCenterIndex = 2; // 5個項目中，第3個（索引2）為中央
            const musicOffset = (musicCurrentIndex - musicCenterIndex) * musicItemWidth;

            musicCarouselRef.current.style.transform = `translateX(-${musicOffset}px)`;
        }
    }, [musicCurrentIndex]);

    // 自動播放新曲目
    useEffect(() => {
        if (musicIsPlaying && musicAudioRef.current) {
            musicAudioRef.current.play();
        }
    }, [musicCurrentIndex]);

    return (
        <div className="musicSection">
            {/* MUSIC 標題 */}
            <div className="musicTitle">
                <h2>MUSIC</h2>
            </div>

            {/* 上方播放控制區 */}
            <div className="musicControls">
                <div className="musicPlayButton" onClick={musicTogglePlay}>
                    <div className="musicPlayCircle">
                        <div className="musicPlayIcon">
                            {musicIsPlaying ? '⏸' : '▶'}
                        </div>
                    </div>
                </div>

            </div>

            {/* 輪播區域 */}
            <div className="albumCarousel">
                {/* <div className="musicCarouselContainer"> */}
                <AlbumCarousel />
            </div>

            {/* 當前播放訊息 */}
            <div className="musicCurrentTrack">
                <div className="musicCurrentInfo">
                    <h2 className="musicCurrentTitle">{musicCurrentTrack.musicTitle}</h2>
                    <p className="musicCurrentArtist">{musicCurrentTrack.musicArtist}</p>
                </div>
            </div>

            {/* 音頻元素 */}
            <audio
                ref={musicAudioRef}
                src={musicCurrentTrack.musicSrc}
                onEnded={musicHandleEnded}
                muted={musicIsMuted}
            />

            {/* 裝飾性圓形 */}
            <div className="musicDecoCircle musicTopCircle"></div>
            <div className="musicDecoCircle musicBottomCircle"></div>

            {/* 背景線條 */}
            <div className="musicBackground">
                {Array.from({ length: 20 }, (_, i) => (
                    <div
                        key={i}
                        className="musicLine"
                        style={{
                            top: `${(i + 1) * 5}%`,
                            animationDelay: `${(i + 1) * 0.2}s`
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};
export default Music;