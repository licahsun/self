import "../scss/_Character.scss"
import { useState } from 'react'

// 背景圖片
import charaBg01 from "../assets/images/charaBg01.avif"
import charaBg02 from "../assets/images/charaBg02.avif"

// 角色圖片
import chara01 from "../assets/images/charaItem03.avif"
import chara02 from "../assets/images/charaItem04.avif"

// 角色頭像
import CharaIcon01 from "../assets/images/CharaIcon01.avif"
import CharaIcon02 from "../assets/images/CharaIcon02.avif"

//裝飾
import charaItem from "../assets/images/charaItem01.avif"
import charaItem02 from "../assets/images/charaItem02.avif"

const Character = () => {
    // 當前選中的角色 (0: Sharo, 1: Rin)
    const [selectedCharacter, setSelectedCharacter] = useState(0);

    // 角色數據
    const charactersData = [
        {
            name: "Sharo",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat quaerat amet. Impedit architecto, laudantium totam et beatae at, sint dicta velit maiores ullam vitae ad nisi debitis? Eveniet fuga fugiat iste fugit aliquam omnis eius dolorem ducimus, vero aut numquam rerum dolor tenetur a exercitationem eos temporibus iure placeat illum. Labore doloremque magnam culpa dicta perspiciatis suscipit temporibus iusto?",
            charaBgImage: charaBg01,
            charaImage: chara01,
            charaIcon: CharaIcon01
        },
        {
            name: "Rin",
            description: "Rin 是一位神秘的角色，擁有強大的戰鬥能力和獨特的個性。她在戰場上展現出驚人的技巧，同時也有著溫柔的一面。她的故事充滿了冒險與挑戰，是團隊中不可或缺的重要成員。無論面對什麼困難，她總是能夠找到解決的方法，並且始終保持著堅定的信念。",
            charaBgImage: charaBg02,
            charaImage: chara02,
            charaIcon: CharaIcon02
        }
    ];

    // 切換角色函數
    const handleCharacterChange = (index) => {
        setSelectedCharacter(index);
    };

    // 當前選中的角色數據
    const currentCharacter = charactersData[selectedCharacter];

    return (
        <section>
            <div className="charaBg" style={{backgroundImage: `url(${currentCharacter.charaBgImage})`}}>
                <h2>CHARACTER</h2>
                <div className="Characters">
                    <div className="Chara">
                        <img className="charaItem02" src={charaItem02} alt="" />
                        <img className="Chara01" src={currentCharacter.charaImage} alt={currentCharacter.name} />
                    </div>
                    

                    <div className="Character">
                        <div className="Ch1">
                            <h3>{currentCharacter.name}</h3>
                            <img className="charaItem01" src={charaItem} alt="" />
                            <p>{currentCharacter.description}</p>
                        </div>

                        <div className="CharaIcon">
                            <img 
                                src={CharaIcon01} 
                                alt="Sharo"
                                className={selectedCharacter === 0 ? 'active' : ''}
                                onClick={() => handleCharacterChange(0)}
                                style={{ cursor: 'pointer' }}
                            />
                            <img 
                                src={CharaIcon02} 
                                alt="Rin"
                                className={selectedCharacter === 1 ? 'active' : ''}
                                onClick={() => handleCharacterChange(1)}
                                style={{ cursor: 'pointer' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Character


// import "../scss/_Character.scss"
// import charaItem from "../assets/images/charaItem01.avif"
// import CharaIcon01 from "../assets/images/CharaIcon01.avif"
// import CharaIcon02 from "../assets/images/CharaIcon02.avif"
// import charaItem02 from "../assets/images/charaItem02.avif"
// import chara01 from "../assets/images/charaItem03.avif"
// import chara02 from "../assets/images/charaItem04.avif"

// const Character = () => {
//     return (
//         <div className="chara">
//             <div className="charaBg">
//                 <h2>CHARACTER</h2>
//                 <div className="Characters">
//                     <div className="Chara">
//                         <img className="Chara01" src={chara01} alt="" />
//                         <img src={charaItem02} alt="" />
//                     </div>

//                     <div className="Character">
//                         <div className="Ch1">
//                             <h3>Sharo</h3>
//                             <img className="charaItem01" src={charaItem} alt="" />
//                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat quaerat amet. Impedit architecto, laudantium totam et beatae at, sint dicta velit maiores ullam vitae ad nisi debitis? Eveniet fuga fugiat iste fugit aliquam omnis eius dolorem ducimus, vero aut numquam rerum dolor tenetur a exercitationem eos temporibus iure placeat illum. Labore doloremque magnam culpa dicta perspiciatis suscipit temporibus iusto?</p>
//                         </div>

//                         <div className="CharaIcon">
//                             <img src={CharaIcon01} alt="" />
//                             <img src={CharaIcon02} alt="" />
//                         </div>
//                         {/* <div className="Ch2">
//                         <h3>Rin</h3>
//                         <img className="charaItem01" src={charaItem} alt="" />
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat quaerat amet. Impedit architecto, laudantium totam et beatae at, sint dicta velit maiores ullam vitae ad nisi debitis? Eveniet fuga fugiat iste fugit aliquam omnis eius dolorem ducimus, vero aut numquam rerum dolor tenetur a exercitationem eos temporibus iure placeat illum. Labore doloremque magnam culpa dicta perspiciatis suscipit temporibus iusto?</p>
//                     </div> */}

//                     </div>
//                 </div>
//             </div>
            
//         </div>
//     )
// }

// export default Character