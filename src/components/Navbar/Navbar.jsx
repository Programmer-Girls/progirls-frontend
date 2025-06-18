import { Link } from 'react-router-dom';

export default function Navbar() {

return(
            <nav>
                <ul className="flex justify-between items-center gap-4">
                    <li className="hover:bg-purple-600/40 rounded-md">
                        <Link to="/comunidade">Comunidade</Link>
                    </li>
                    <li className="hover:bg-purple-600/40 rounded-md">
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li className="hover:bg-purple-600/40 rounded-md">
                        <Link to="/voluntariado">Voluntariado</Link>
                    </li>
                    <li className="hover:bg-purple-600/40 rounded-md">
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul>
            </nav>       

            

)

}