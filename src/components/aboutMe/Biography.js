import photoCV from "../../assets/photo_CV.jpg"

function Biography(){
    return(
        <div className="biography">
            <div className="picture">
                <img src={photoCV} alt="ma_photo"/>
            </div>
            <ul>
                <li>
                    <p className="entitled">Nom : </p>
                    Valentin SEGALLA
                </li>
                <li>
                    <p className="entitled">Date de Naissance </p>
                    20 mai 2003
                </li>
                <li>
                    <p className="entitled">Nationnalité : </p>
                    France
                </li>
                <li>
                    <p className="entitled">Téléphone : </p>
                    07 82 ** ** **
                </li>
                <li>
                    <p className="entitled">Email : </p>
                    valentin.segalla@gmail.com
                </li>
            </ul>
        </div>
    )
}

export default Biography