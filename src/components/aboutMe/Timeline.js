import "../../style/Timeline.css"
import Container from "../elements/Container";

function Timeline(){
    return(
        <div className="timeline">
            <Container year={"2021-2024"}
                       desc={`Étude en Bachelor Universitaire de Technologie (B.U.T.) Informatique
                Développement d'applications (en 3 ans)`}
                       plus={"IUT Lyon1 La Doua, Université Claude Bernard"}
                       position={"left"}/>
            <Container year={"2021"}
                       desc={`Obtention du Baccalauréat option Mathématiques et Numérique et Sciences Informatiques`}
                       plus={"au Lycée Philibert Delorme"}
                       position={"right"}/>
            <Container year={"3 au 7 août 2020"}
                       desc={`Contribution au Chantier Jeune`}
                       plus={"dans le secteur du CCAS de l'Isle d'Abeau"}
                       position={"left"}/>
            <Container year={"Novembre 2020"}
                       desc={`Participation au concours de programmation BattleDev`}
                       position={"right"}/>
            <Container year={"2018"}
                       desc={`Stage de découverte en ingénieurie automobile`}
                       plus={"dans l’entreprise MCE-5"}
                       position={"left"}/>
            <Container year={"2016-2018"}
                       desc={`Membre du Conseil Municipal Enfant Jeunesse (CMEJ)`}
                       plus={"à la Mairie de l'Isle d'Abeau"}
                       position={"right"}/>
        </div>
    )
}

export default Timeline