import {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function App() {
    const {id} = useParams();
    const [data, setData] = useState()
    const navigate=useNavigate()
    
    useEffect(() => {
        getOneProduct(id)
    }, [id])
    
    const getOneProduct=(id)=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then (json=>setData(json))
    }

    const gotoEdit=()=>{
        navigate(`/editItem/${id}`)
    }
    
    return (
        <div className="App">
                <h1>{data?.title}</h1>
                <p>{data?.category}</p>
                <p>{data?.description}</p>
                <img src={data?.image} alt=""/>
                <p>{data?.price} €</p>
                <button onClick={()=>gotoEdit()}>Edit</button>
        </div>
    );
}

export default App;
