import { Link } from "react-router-dom"

function Erro(){
    return(
        <div>
            <h1>Ops, essa pagina não existe!</h1>
            <span>Encontramos essas paginas aqui:</span> <br/>
            <Link to='/'>Home</Link> <br/>
            <Link to='/contato'>Contato</Link> <br/>
            <Link to='/Sobre'>Sobre</Link>
        </div>
    )
}

export default Erro