import { Link } from 'react-router-dom';
import Button from '../common/Button';
import Theme from '../common/theme';
import Logo from '../common/Logo';
import Navbar from '../Navbar/Navbar';


export default function Header(){
    return (
        <header className="flex items-center justify-between p-2 mx-4">
            <Logo/>

            <Navbar/>

            <Theme/>

            <Link to="https://chat.whatsapp.com/ElygZKByOGl8MP7ZFVgzdm" target="_blank" rel="noopener noreferrer">
                <Button variant="primary">Vem com a gente!</Button>
            </Link>

        </header>
    );
}