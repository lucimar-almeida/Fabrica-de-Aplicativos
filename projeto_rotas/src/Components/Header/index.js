import { Link } from "react-router-dom"

function Header(){
    return(
        <header>
            <h2>Sujeito dev</h2>
            <div className="menu">
                <Link to='/'>Home</Link>
                <Link to='/contato'>Contato</Link>
                <Link to='/Sobre'>Sobre</Link>
            </div>
        </header>
    )
}

export default Header