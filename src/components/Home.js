import "../style/Home.css"
import Navlink from "./elements/Navlink"

function Home(){
    return(
        <section className="content contentHome">
            <div className="bg-image"></div>
            <div className="presentation">
                <div className="subtitle">Je suis Valentin SEGALLA</div>
                <h1 className="main">
                    ETUDIANT EN BACHELOR UNIVERSITAIRE DE TECHNOLOGIE INFORMATIQUE
                </h1>
                <p className="desc">
                    Etudiant en 2nd année de Bachelor Universitaire de Technologie (BUT) Informatique, en développement d'application web et mobile, à l'IUT Lyon1 laDoua de Villeurbanne.
                </p>
                <Navlink id="buttonHome" href="#about" name="En découvrir plus"/>
            </div>
        </section>
    )
}

export default Home