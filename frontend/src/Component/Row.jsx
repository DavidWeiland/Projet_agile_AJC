import {useNavigate} from 'react-router-dom';

export const Row = ({id, title, image, price})=>{
    const navigate=useNavigate()
    
    const gotoOne=()=>{
        navigate(`/product/${id}`)
    }
    
    return(
        <tr className="text-center">
            <td>
                <img src={image} className="img-fluid img-thumbnail w-50" alt=""/>
            </td>
            <td className="w-25 align-middle">{title}</td>
            <td className="w-25 align-middle">{price} €</td>
            <td className="w-25 align-middle">
                <button className="btn btn-info" onClick={()=>gotoOne()}>Voir</button>
            </td>
        </tr>
    )
}
