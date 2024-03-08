import Menu from './menu';
import Logo from '../assets/logo.svg'
import '../styles/header.css';
function Header(){
    return(
        <header> 
        <img src={Logo} alt='logo SportSee'/>
        <Menu />
        </header>
        
    )
}

export default Header