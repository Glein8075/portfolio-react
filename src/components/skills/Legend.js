function Legend(){
    return(
        
        <table className="legend">
            <tbody>
                <tr>
                    <td className="absolue"></td>
                    <td>maitrise absolue</td>
                </tr>
                <tr>
                    <td className="acquis"></td>
                    <td>Acquis</td>
                </tr>
                <tr>
                    <td className="en-cours"></td>
                    <td>En cous d'acquisition</td>
                </tr>
                <tr>
                    <td className="base"></td>
                    <td>connaissance de base</td>
                </tr>
                <tr>
                    <td className="pas-eval"></td>
                    <td>Pas évalué</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Legend