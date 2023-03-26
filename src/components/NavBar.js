import "../style/NavBar.css"
import Navlink from "./elements/Navlink"

function NavBar(){
    return (
        <section className="nav-bar">
        <div className="nav-content">
            <Navlink className="link" name="Mes réalisations" href="#project"/>
            <Navlink className="link" name="Mes compétences" href="#skills"/>
            <div className="aboutlink">
                <span>A propos de moi</span>
                <div className="dropdown-about">
                    <Navlink name="Bio" href="#about"/>
                    <Navlink name="Expériences" href="#timeline"/>
                </div>
            </div>
        </div>
    </section>
    )
}

export default NavBar