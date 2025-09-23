import "../scss/_Character.scss"
import charaItem from "../assets/images/charaItem01.avif"
import CharaIcon01 from "../assets/images/CharaIcon01.avif"
import CharaIcon02 from "../assets/images/CharaIcon02.avif"
import charaItem02 from "../assets/images/charaItem02.avif"
import chara01 from "../assets/images/charaItem03.avif"

const Character = () => {
    return (
        <div className="chara">
            <div className="charaBg">
                <h2>CHARACTER</h2>
                <div className="Characters">
                    <div className="Chara">
                        <img className="Chara01" src={chara01} alt="" />
                        <img src={charaItem02} alt="" />
                    </div>

                    <div className="Character">
                        <div className="Ch1">
                            <h3>Sharo</h3>
                            <img className="charaItem01" src={charaItem} alt="" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat quaerat amet. Impedit architecto, laudantium totam et beatae at, sint dicta velit maiores ullam vitae ad nisi debitis? Eveniet fuga fugiat iste fugit aliquam omnis eius dolorem ducimus, vero aut numquam rerum dolor tenetur a exercitationem eos temporibus iure placeat illum. Labore doloremque magnam culpa dicta perspiciatis suscipit temporibus iusto?</p>
                        </div>

                        <div className="CharaIcon">
                            <img src={CharaIcon01} alt="" />
                            <img src={CharaIcon02} alt="" />
                        </div>
                        {/* <div className="Ch2">
                        <div className="ch_swiper"></div>
                        <h3>Rin</h3>
                        <img className="charaItem01" src={charaItem} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat quaerat amet. Impedit architecto, laudantium totam et beatae at, sint dicta velit maiores ullam vitae ad nisi debitis? Eveniet fuga fugiat iste fugit aliquam omnis eius dolorem ducimus, vero aut numquam rerum dolor tenetur a exercitationem eos temporibus iure placeat illum. Labore doloremque magnam culpa dicta perspiciatis suscipit temporibus iusto?</p>
                    </div> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Character