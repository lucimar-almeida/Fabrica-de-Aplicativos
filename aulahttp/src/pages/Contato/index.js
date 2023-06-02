
import { Link } from 'react-router-dom'
 
function Contato(){
      return(
            <div>
                  <h1>Essa é a pagina de contato da empresa</h1>
                  <Link to="/">Home</Link> <br/>
                  <Link to="/Sobre">Sobre</Link>
            </div>
            
      )
}

export default Contato