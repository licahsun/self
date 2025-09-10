import "../scss/_Character.scss"
import charaItem from "../../public/images/charaItem01.avif"

const Character = () => {
    return (
        <div className="Characters">
        <div className="Character">
            <h2>CHARACTER</h2>

            <div className="Ch1">
            <div className="ch_swiper"></div>
                <h3>Sharo</h3>
                <img className="charaItem01" src={charaItem} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat quaerat amet. Impedit architecto, laudantium totam et beatae at, sint dicta velit maiores ullam vitae ad nisi debitis? Eveniet fuga fugiat iste fugit aliquam omnis eius dolorem ducimus, vero aut numquam rerum dolor tenetur a exercitationem eos temporibus iure placeat illum. Labore doloremque magnam culpa dicta perspiciatis suscipit temporibus iusto?</p>
            </div>
            
            <div className="charaBg"></div>
        </div>
        </div>
    )
}

export default Character