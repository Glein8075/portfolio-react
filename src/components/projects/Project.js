import "../../style/Project.css"
import {useEffect, useReducer} from "react"
import Slide from "./Carousel"
import { projectList } from "../../utils/projectList"
import {motion,useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

const initialState = {
    slideIndex: 0
}

const boxVariant = {
    visible: {opacity:1, transition: { duration: 2 }},
    hidden:{opacity: 0},
}

const slidesReducer = (state, event) => {
    if (event.type === "NEXT") {
        return {
        ...state,
        slideIndex: (state.slideIndex + 1) % projectList.length
        };
    }
    if (event.type === "PREV") {
        return {
        ...state,
        slideIndex:
            state.slideIndex === 0 ? projectList.length - 1 : state.slideIndex - 1
        };
    }
}

function Project(){
    const [state, dispatch] = useReducer(slidesReducer, initialState);

    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(()=>{
        if(inView){
            control.start("visible")
        }
    },[inView])

    return(
        <section className="content projectcontent"
            id="project">
            <h1 className="title">RÉALISATIONS</h1>
            <motion.div
                variants={boxVariant}
                ref={ref}
                initial={"hidden"}
                animate={control}
                className="caroussel">
                <div className="slides">
                    <button onClick={() => dispatch({ type: "NEXT" })}>‹</button>
                    {[...projectList, ...projectList,...projectList].map((slide, i) => {
                        let offset = projectList.length + (state.slideIndex - i)
                        return <Slide slide={slide} offset={offset} key={i} />
                    })}
                    <button onClick={() => dispatch({ type: "PREV" })}>›</button>
                </div>
            </motion.div>
            <p>Retrouvez l'intégralité de ces projets ainsi que d'autres sur  
                <a href="https://github.com/Glein8075">GitHub 
                    <img id="gitLogo" src={require("../../assets/github_logo.png")} alt={"GitHub"}/>
                </a>
            </p>
        </section>
    )
}

export default Project