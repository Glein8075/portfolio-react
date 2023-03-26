import "../../style/Project.css"
import { useReducer } from "react"
import Slide from "./Carousel"
import { projectList } from "../../utils/projectList"

const initialState = {
    slideIndex: 0
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

    return(
        <section className="content projectcontent" id="project">
            <h1 className="title">RÉALISATIONS</h1>
            <div className="caroussel">
                <div className="slides">
                    <button onClick={() => dispatch({ type: "NEXT" })}>‹</button>
                    {[...projectList, ...projectList,...projectList].map((slide, i) => {
                        let offset = projectList.length + (state.slideIndex - i)
                        return <Slide slide={slide} offset={offset} key={i} />
                    })}
                    <button onClick={() => dispatch({ type: "PREV" })}>›</button>
                </div>
            </div>
            <p>Retrouvez l'intégralité de ces projets ainsi que d'autres sur  
                <a href="https://github.com/Glein8075">GitHub 
                    <img id="gitLogo" src={require("../../assets/github_logo.png")} alt={"GitHub"}/>
                </a>
            </p>
        </section>
    )
}

export default Project