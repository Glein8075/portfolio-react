
function Card({title,link,desc,language}){
    return(
        <div className="slideContent">
            <img src={link} id="picture" alt={title}/>
            <div className="slideContentInner">
                <h2 className="slideTitle">{title}</h2>
                <h3 className="slideSubtitle">{language}</h3>
                <p className="slideDescription">{desc}</p>
            </div>
        </div>
    )
}

export default Card