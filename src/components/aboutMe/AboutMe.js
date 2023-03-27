import "../../style/AboutMe.css"
import Biography from "./Biography"
import Present from "./Present"
import Timeline from "./Timeline"
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";

const boxVariant = {
    visible: {opacity:1, transition: { duration: 2 }},
    hidden:{opacity: 0},
}


function AboutMe(){

    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(()=>{
        if(inView){
            control.start("visible")
        }
    },[inView])

    return(
    <section className="content aboutcontent" id="about">
        <h1 className="title">À PROPOS</h1>
        <motion.div
            variants={boxVariant}
            ref={ref}
            initial={"hidden"}
            animate={control}
            className="about">
            <Present/>
            <Biography/>
        </motion.div>
        <div id="timeline">
            <h1 className="title">ÉTUDE ET EXPÉRIENCE</h1>
            <Timeline/>
        </div>
    </section>
    )
}


export default AboutMe