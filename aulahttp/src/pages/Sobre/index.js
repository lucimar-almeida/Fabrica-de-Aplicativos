
import { Link } from "react-router-dom"

function Sobre(){
      return(
            <div>
                  <h1>Essa é a pagina sobre a empresa</h1>
                  <Link to="/">Home</Link> <br/>
                  <Link to="/Contato">Contato</Link>
            </div>
      )
}

export default Sobre