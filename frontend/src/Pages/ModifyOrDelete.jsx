import '../Styles/ListeProduits.css'
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'

import { url } from '../data/services';

export const ModifyOrDelete=()=>{
    const {id} = useParams();

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    /* const [imageUrl, setImageUrl] = useState() */
    const [category, setCategory] = useState("")
    
    useEffect(() => {
        getOneProduct(id)
    }, [id])
    
    const getOneProduct=(id)=>{
        fetch(`${url}/${id}`)
        .then(res=>res.json())
        .then (json=>{
            setTitle(json.title)
            setPrice(json.price)
            setDescription(json.description)
            setImage(json.image)
            setCategory(json.category)
        })
    }

    /* const imageReader = (e)=>{
        e.stopPropagation()
        e.preventDefault()
        const file = e.target.files[0]
        setImageUrl(file)
        const fileReader = new FileReader()
        fileReader.onload = function(progressEvent){
            const url = fileReader.result
            setImage(url)
        }
        fileReader.readAsDataURL(file)
    } */

    const modifyItem = ()=>{
        fetch(`${url}/${id}`,{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: title,
                    price: price,
                    description: description,
                    image: image,
                    category: category
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    }

    const deleteItem = ()=>{
        fetch(`${url}/${id}`,{
            method:"DELETE",
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    }

    return(
        <div className="createBody">
            <div className="form">
                <div className="title">Editer le produit</div>
                <div className="input-container ic1">
                    <input id="title" className="input" type="text" placeholder=" " value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    <div className="cut"></div>
                    <label htmlFor="title" className="placeholder">Titre</label>
                </div>
                <div className="input-container ic2">
                    <input id="prix" className="input" type="text" placeholder=" " value={price} onChange={(e)=>setPrice(e.target.value)} />
                    <div className="cut"></div>
                    <label htmlFor="prix" className="placeholder">Prix en €</label>
                </div>
                <div className="input-container ic2">
                    <input id="description" className="input" type="text" placeholder=" " value={description} onChange={(e)=>setDescription(e.target.value)}/>
                    <div className="cut cut-short"></div>
                    <label htmlFor="description" className="placeholder">Description</label>
                </div>
                <div className="input-container ic2">
                    <input id="categorie" className="input" type="text" placeholder=" " value={category} onChange={(e)=>setCategory(e.target.value)}/>
                    <div className="cut cut-short"></div>
                    <label htmlFor="categorie" className="placeholder">Catégorie</label>
                </div>
                <div className="input-container ic2">
                    <input id="image" className="input" type="text" placeholder=" " value={image} onChange={(e)=>setImage(e.target.value)}/>
                    <div className="cut cut-short"></div>
                    <label htmlFor="image" className="placeholder">ImageUrl</label>
                    {/* <img src={image} alt='' className="input" style={{objectFit:"cover"}}/>
                    <input type="file" className="input2" name="imgfile" accept='image/png, image/jpg, image/jpeg' onChange={(e)=>imageReader(e)}/> */}
                </div>
                <button type="text" className="submit" onClick={()=>modifyItem()}>Modifier le produit</button>
                <button type="text" className="btn btn-danger submit" onClick={()=>deleteItem()}>Supprimer le produit</button>
            </div>
        </div>
    )
}