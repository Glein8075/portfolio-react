import download from "../../assets/logo-download.png" 
import CV from "../../assets/CV_Valentin_SEGALLA.pdf"

function Present(){
    return (
        <div className="present">
            <h2 className ="sudtitle">OBJECTIFS</h2>
            <p>
                Étant étudiant en BUT Informatique, ce site vous permet d'en découvrir un peu plus sur mon profil.
                De plus, il illustre pleinement mon intérêt pour le développement web ainsi que le développement d'application.
            </p>
            <h2 className ="sudtitle">QUELQUES INFORMATIONS</h2>
            <p>
                Sociable, je suis capable de travailler en équipe autant qu’en autonomie et
                par-dessus tout, j’ai la volonté d’apprendre de nouvelles choses afin de me
                perfectionner dans le domaine de l’informatique. Étant rigoureux dans mon
                travail, je sais prendre du recul pour corriger mes erreurs et je suis à l’écoute
                de tous pour tout type de conseil afin de m'améliorer et me perfectionner.
            </p>
            <a id="downloadbtn" href={CV} download="CV.pdf">
                <img src={download} alt="download"/>TELECHARGER MON CV</a>
        </div>
    )
}

export default Present