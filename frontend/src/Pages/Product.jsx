import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

function App() {
    const [data, setData] = useState()
    const {id} = useParams();
    
    useEffect(() => {
        onclickfunction(id)
    }, [id])
    
    const onclickfunction=(id)=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then (json=>setData(json))
    }
    
    return (
        <div className="App">
                <h1>{data?.title}</h1>
                <p>{data?.category}</p>
                <p>{data?.description}</p>
                <img src={data?.image} alt=""/>
                <p>{data?.price} €</p>
        </div>
    );
}

export default App;
