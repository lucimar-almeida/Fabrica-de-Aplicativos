import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import  Contato from './pages/Contato'
import Sobre from  './pages/Sobre'

function RoutesApp(){
      return(
            <BrowserRouter>
                  <Routes>
                        <Route path="/" element={ <Home/> }/>
                        <Route path="/pages/Contato" element={ <Contato/> }/>
                        <Route path="/pages/Sobre" element={ <Sobre/> }/>
                  </Routes>
            </BrowserRouter>

      )
}

export default RoutesApp