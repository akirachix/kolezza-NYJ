import './index.css';
import new_tiktok from '../Images/new_tiktok.png';

const HowThingsWork = () =>{
    return(
        <>
        <div>
            <h1>H<span className="letter_o">o</span>w things<br></br> w<span className="letter_o">o</span>rk-TikTok</h1>
        </div>

        <div className="howthingswork">
            <div className="tiktok_picture">
                <img src={new_tiktok} alt ='tiktok'/>
            </div>
            <div class="text">
                <div className="main-text">
                <p >TikTok, the addictive social media platform,<br></br> has taken the world by storm with its endless <br></br>
                stream of entertaining short-form videos.<br></br> 
                    Users can create, share, and discover content <br>
                    </br>ranging from lip-syncing and dancing to comedy <br>
                    </br>skits and educational tutorials.<br></br><br></br>
                    Click the buttons below to learn more.
                    </p>
                 </div>
                <div className="btn-videos">
                <div className= "video-section-one">
                <button className="btn-watchvideo"><a href="https://www.loom.com/share/f81782c50b5a4a978d38b7602e307a8b?sid=ddc16a9f-38bd-44ea-a750-b8d29d9cd6c0" className="links">Intro to TikTok</a></button>
                <button className="btn-watchvideo"><a href="https://www.loom.com/share/cd66c0bb5d8746bd8bd93ebdff888e81"  className="links">How it generates income</a></button>
                <button className="btn-watchvideo"><a href="https://www.loom.com/share/b25b4780c5544bf3baa81f61eab7b687"  className="links">Use Cases</a></button>
                </div>
                <div className = "video-section-two">
                <button className="btn-watchvideo"><a href="https://www.loom.com/share/418b4c485a06475da99f31bcec72dbc6"  className="links">Pros and Cons</a></button>
                <button className="btn-watchvideo"><a href="https://www.loom.com/share/bedf6d1460644d5eab0e8682b123f1da?sid=8627627d-e085-47dd-946a-3bd10e63aa0b
"  className="links">User Experience</a></button>
                <button className="btn-watchvideo"><a href="https://www.loom.com/share/98162b4179384142b8937d71989bb4f2?sid=7ccc8abe-0a7b-4e37-aa52-0869efeeaaf1"  className="links">Architecture</a> </button>
                </div>
                </div>



            </div>
        </div>
        </>
    )
}
export default HowThingsWork;