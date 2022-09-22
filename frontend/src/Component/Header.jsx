import '../Styles/ListeProduitsTab.css'
import {Link} from 'react-router-dom';

function Header(){
    return(
        <ul>
            <li><a href="#home">Accueil</a></li>
            <li><Link to="/">Liste produits</Link></li>
            <li><Link to="/createNewItem">Création produits</Link></li>
            <li style={{float:"right"}}><a className="active" href="#about">A propos</a></li>
        </ul>
    )
}

export default Header