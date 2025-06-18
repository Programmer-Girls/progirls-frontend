import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Comunidade from "./pages/Comunidade/Comunidade";
import Sobre from "./pages/Sobre/Sobre";
import Voluntariado from "./pages/Voluntariado/Voluntariado";
import Contato from "./pages/Contato/Contato";


export default function App() {
  return(
   <>
    <Header/>

    <Routes>
      <Route path='/comunidade' element={<Comunidade/>}></Route>
      <Route path='/sobre' element={<Sobre/>}></Route>
      <Route path='/voluntariado' element={<Voluntariado/>}></Route>
      <Route path='/contato' element={<Contato/>}></Route>
    </Routes>
   </>
  )
}
