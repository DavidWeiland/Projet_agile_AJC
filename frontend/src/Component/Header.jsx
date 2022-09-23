import '../Styles/ListeProduitsTab.css'
import {Link} from 'react-router-dom';

function Header(){
    return(
        <ul className="headerUl">
            <li className="headerLi"><a href="#home">Accueil</a></li>
            <li className="headerLi"><Link to="/">Liste produits</Link></li>
            <li className="headerLi"><Link to="/createNewItem">Création produits</Link></li>
            <li className="headerLi" style={{float:"right"}}><a className="active" href="#about">A propos</a></li>
        </ul>
    )
}

export default Header