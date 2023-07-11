import { Link } from "react-router-dom";

function Home() {
    return (
      <div>
        <h1>bem vindo a Pagina Home</h1>
        <span>Las Programação</span> <br/><br/>
        <Link to='/Contato'>Contato</Link><br/>
        <Link to='/Sobre'>Sobre</Link>
      </div>
    );
  }
  
  export default Home;