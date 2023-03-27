import Year1 from "./Year1"
import Year2 from "./Year2"
import Year3 from "./Year3"
import Legend from "./Legend"
import {useEffect, useState} from "react"
import ButtonTable from "../elements/ButtonTable"
import {motion,useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

const boxVariant = {
    visible: {opacity:1, transition: { duration: 2 }},
    hidden:{opacity: 0},
}

function Skills(){
    let [table, setTable] = useState(<Year1/>)
    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(()=>{
        if(inView){
            control.start("visible")
        }
    },[inView])
    return(
        <section className="skillcontent" id="skills">
            <h1>COMPÉTENCES</h1>
            <div className="years">
                <ButtonTable name={"Année 1"} state={setTable} table={<Year1/>}/>
                <ButtonTable name={"Année 2"} state={setTable} table={<Year2/>}/>
                <ButtonTable name={"Année 3"} state={setTable} table={<Year3/>}/>
            </div>
            <motion.div
                variants={boxVariant}
                ref={ref}
                initial={"hidden"}
                animate={control}
                className="board">
                <Legend/>
                {table}
            </motion.div>
        </section>
    )
}



export default Skills