
import './header.css'
import Search from './search'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <header id='cabecalho'>

            <Link className='logo' to="/">PrimeFlix</Link>
           

            <Search/>
            <nav>

                <Link to='/'>Início</Link>
                <Link className='favoritos' to='/favoritos'>Meus filmes</Link>

            </nav>

        </header>
    )
}
export default Header;