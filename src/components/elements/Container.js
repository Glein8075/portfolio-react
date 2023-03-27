import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";

const boxVariantLeft = {
    visible: {opacity: 1,transition: { duration: 0.5 }, x:0 },
    hidden:  {opacity: 0, x:-100}
}

const boxVariantRight = {
    visible: { opacity: 1,transition: { duration: 0.5 }, x:0 },
    hidden: { opacity: 0, x:100}
}

function Container({position,year,desc,plus}){

    const control = useAnimation()
    const [ref,inView] = useInView()

    useEffect(()=>{
        if(inView){
            control.start("visible").then(r => {})
        }
    },[control,inView])

    return(
        <motion.div
            variants={position === "left"?boxVariantLeft : boxVariantRight}
            ref={ref}
            initial={"hidden"}
            animate={control}
            className={`container ${position}`}>
            <div className="timeline-content">
                <h2>{year}</h2>
                <p className="main">{desc}</p>
                <p>{plus}</p>
            </div>
        </motion.div>
    )
}

export default Container