function ButtonTable({name,state,table}){
    return(
        <button onClick={()=>state(table)}>{name}</button>
    )
}

export default ButtonTable