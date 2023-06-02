
import { Link } from 'react-router-dom'

function Home(){
      return(
            <div>

                  <h1>Bem vindo a pagina inicial do projeto</h1>
                  <Link to="/Sobre">Sobre</Link> <br/>
                  <Link to="/Contato">Contato</Link>
            </div>
      )

}

export default Home