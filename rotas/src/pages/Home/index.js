import { Link } from "react-router-dom"


function Home(){
    return(
        <div>
            <h1>Seja bem vindo a pagina HOME da empresa!</h1> <br/>
             <Link to={"../Contato"}>Contato</Link>  <br/>
             <Link to={"../Sobre"}>Sobre</Link>
        </div>
    )
}

export default Home