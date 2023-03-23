import "../../style/AboutMe.css"
import Biography from "./Biography"
import Present from "./Present"
import Timeline from "./Timeline"

function AboutMe(){
    return(
    <section className="content aboutcontent" id="about">
        <h1 className="title">A PROPOS</h1>
        <div className="about">
            <Present/>
            <Biography/>
        </div>
        <div id="timeline">
            <h1 className="title">ETUDE ET EXPERIENCE</h1>
            <Timeline/>
        </div>
    </section>
    )
}


export default AboutMe