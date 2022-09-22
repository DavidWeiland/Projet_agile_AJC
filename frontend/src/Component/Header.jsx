import '../Styles/ListeProduitsTab.css'

function Header(){
    return(
        <ul>
            <li><a href="#home">Accueil</a></li>
            <li><a href="#news">Liste produits</a></li>
            <li><a href="#contact">Création produits</a></li>
            <li style={{float:"right"}}><a className="active" href="#about">A propos</a></li>
        </ul>
    )
}

export default Header