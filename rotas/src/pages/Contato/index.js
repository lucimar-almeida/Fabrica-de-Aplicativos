import { Link } from "react-router-dom"

function Contato(){
    return(
        <div>
            <h1>Essa é a pagina de CONTATO da empresa</h1> <br/>
            <Link to="../Sobre">Sobre</Link> <br/>
            <Link to="/">Home</Link>
        </div>
    )
}

export default Contato