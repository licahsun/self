import "../scss/_Footer.scss"
import Logo from "../assets/images/s7igma.svg"
import ScrollToTop2 from "../components/ScrollToTop2"


const footer = () => {
    return (
        <>
            <section className="footer1">
                <div className="footer">
                    <div className="footerContents">
                        <div className="logo"><img src={Logo} alt="" /></div>
                        <div>
                            <div className="contents"><h3>CONTENTS</h3></div>
                            <a href="">Introduction</a>
                            <a href="">System</a>
                            <a href="">Character</a>
                            <a href="">Music</a>
                            <a href="">News</a>
                        </div>
                        <div>
                            <div className="connect"><h3>CONNECT</h3></div>
                            <a href="">X</a>
                            <a href="">Instagram</a>
                            <a href="">YouTube</a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default footer