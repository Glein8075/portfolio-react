import "../style/Home.css"
import NavLink from "./elements/Navlink"
import {motion} from "framer-motion";


const boxVariant = {
    visible: {opacity: 1,transition: { duration: 1 }},
    hidden: {opacity: 0},
}

function Home(){
    return(
        <section className="content contentHome">
            <div className="bg-image"></div>
            <motion.div variants={boxVariant}
                        initial="hidden"
                        animate="visible"
                        className="presentation">
                <div className="subtitle">Je suis Valentin SEGALLA</div>
                <motion.h1 variants={boxVariant}
                           initial="hidden"
                           animate="visible"
                           className="main">
                    ETUDIANT EN BACHELOR UNIVERSITAIRE DE TECHNOLOGIE INFORMATIQUE
                </motion.h1>
                <motion.p
                    variants={boxVariant}
                    initial="hidden"
                    animate="visible"
                    className="desc">
                    Etudiant en 2nd année de Bachelor Universitaire de Technologie (BUT) Informatique, en développement d'application web et mobile, à l'IUT Lyon1 laDoua de Villeurbanne.
                </motion.p>
                <NavLink id="buttonHome" href="#about" name="En découvrir plus"/>
            </motion.div>
        </section>
    )
}

export default Home