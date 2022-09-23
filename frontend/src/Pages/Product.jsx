import {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const fakeItem = {id:1, title: "fleur",
price: 100,
description: "description",
image: "image",
category: "category"}

function App() {
    const {id} = useParams();
    const [data, setData] = useState(fakeItem)
    const navigate=useNavigate()
    
    useEffect(() => {
        onclickfunction(id)
    }, [id])
    
    const onclickfunction=(id)=>{
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
