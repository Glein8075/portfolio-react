function Navlink({name,href,className,id}){
    return(
        <a id={id} className={className} href={href}>{name}</a>
    )
}

export default Navlink