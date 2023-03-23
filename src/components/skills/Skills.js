import Year1 from "./Year1"
import Year2 from "./Year2"
import Year3 from "./Year3"
import Legend from "./Legend"
import { useState } from "react"
import ButtonTable from "../elements/ButtonTable"

function Skills(){
    let [table, setTable] = useState(<Year1/>)
    return(
        <section className="skillcontent" id="skills">
            <h1>COMPÉTENCES</h1>
            <div className="years">
                <ButtonTable name={"Année 1"} state={setTable} table={<Year1/>}/>
                <ButtonTable name={"Année 2"} state={setTable} table={<Year2/>}/>
                <ButtonTable name={"Année 3"} state={setTable} table={<Year3/>}/>
            </div>
            <div className="board">
                <Legend/>
                {table}
            </div>
        </section>
    )
}



export default Skills