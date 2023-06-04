import { Link } from "react-router-dom"


function Sobre(){
    return(
        <div>
            <h1>Esta é a pagina SOBRE a empresa!</h1> <br/>
            <Link to={"../Home"}>Home</Link>  <br/>
            <Link to={"../Contato"}>Contato</Link>
        </div>
    )

}

export default Sobre