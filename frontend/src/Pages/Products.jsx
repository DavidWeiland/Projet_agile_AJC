import {useState, useEffect} from 'react';
import { Category } from '../Component/Category';
import { Row } from '../Component/Row';
import "../Styles/category.css"
import {url} from '../data/services'

function Products() {
    const [data, setData] = useState()
    const [categories, setCategories] = useState()

    useEffect(() => {
        getCategories()
        getProducts()
    }, [])

    const getCategories=()=>{
        fetch(`${url}/categories`)
            .then(res=>res.json())
            .then(json=>setCategories(json))
    }

    const getProducts=()=>{
        fetch(`${url}`)
            .then(res=>res.json())
            .then (json=>setData(json))
    }

    const getProductsBetweenCat=(cat)=>{
        fetch(`${url}/category/${cat}`)
            .then(res=>res.json())
            .then(json=>setData(json))
    }


    return (
        <div>
            <div className='selectContainer'>
                <Category cat="all" action={()=>getProducts()}/>
                {categories?.map(cat=>
                    <Category
                        key={`k-${cat}`}
                        cat={cat}
                        action={()=>getProductsBetweenCat(cat)}
                    />)}
            </div>    
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
        </div>
    );
}

export default Products;
