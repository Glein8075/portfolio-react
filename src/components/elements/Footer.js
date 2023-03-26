import "../../style/Footer.css"
function Footer(){
    return(
        <section className={"footer"}>
            <div className={"coordonnees"}>
                <h3>Me contacter :</h3>
                <a href="mailto:valentin.segalla@gmail.com">valentin.segalla@gmail.com</a>
                <p>07 82 ** ** **</p>
            </div>
            <div className={"footerlink"}>
                <h3>Liens utiles : </h3>
                <div>
                    <a href={"https://github.com/Glein8075"}>
                        <img src={require("../../assets/github_logo.png")} alt={"GitHub"}/>
                    </a>
                    <a href={"https://www.linkedin.com/in/valentin-segalla-78a20a222/"}>
                        <img src={require("../../assets/linkedin_logo.png")} alt={"Linkedin"}/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Footer