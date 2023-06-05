import { Link } from 'react-router-dom'
import Contato from '../../pages/Contato/index'
import Sobre from '//rotas/src/pages/Sobre'


function Header(){
    return(
        <div className='container'>
            <h2>LAS Programação</h2>

            <div className='rotas'>
                <Link to={"/"}>Home</Link>
                <Link to={Contato}>Contato</Link>
                <Link to={Sobre}>Sobre</Link>
            </div>

        </div>
    )
}

export default Header