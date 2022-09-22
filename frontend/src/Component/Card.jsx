import {Link} from 'react-router-dom';

export const Card = ({id, title, category, description, image, price})=>{
    return(
        <Link to="/element">
            <div className="card">
                <p>{id}</p>
                <h1>{title}</h1>
                <p>{category}</p>
                <p>{description}</p>
                <img src={image} alt=""/>
                <p>{price} €</p>
            </div>
        </Link>
    )
}