import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Contato from './pages/Contato'
import Sobre from './pages/Sobre'

import Header from "./Components/Header";


function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                    <Route path='/' element={ <Home/> }/>
                    <Route path='/Contato' element={ <Contato/> }/>
                    <Route path='/Sobre' element={ <Sobre/> }/>
            </Routes>
        </BrowserRouter>

    )
}

export default RoutesApp