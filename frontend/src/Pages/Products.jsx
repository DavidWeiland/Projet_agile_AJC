import {useState, useEffect} from 'react';
import { Row } from '../Component/Row';

function Products() {
    const [data, setData] = useState()

    useEffect(() => {
        onclickfunction()
    }, [])

    const onclickfunction=()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then (json=>setData(json))
    }

    return (
        <div className="container bg-white p-5 mt-5">
            <table className="table table-image">
                <thead className="thead-dark">
                    <tr className="text-center">
                    <th>Photo</th>
                    <th>Nom</th>
                    <th>Prix</th>
                    <th>Actions</th>
                    </tr>
                </thead>
            
                <tbody id="productList">
                {data?.map(({id, title, price, image})=>
                <Row
                    key={`${id}-${title}`}
                    id={id}
                    title={title}
                    price={price}
                    image={image}
                />)}
                </tbody>
            </table>    
        </div>
    );
}

export default Products;
