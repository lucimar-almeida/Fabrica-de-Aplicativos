import { Link } from "react-router-dom";

function Contato() {
    return (
      <div>
        <h1>Contate a empresa</h1>
        <span>Tel: 45 19 36946728</span><br/>
        <Link to='/'>Home</Link> <br/>
        <Link to='/Sobre'>Sobre</Link> <br/>
      </div>
    );
  }
  
  export default Contato;