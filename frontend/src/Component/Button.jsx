import { useState } from "react"

export const Button = ()=>{
    const [title, setTitle] = useState("test product")
    const [price, setPrice] = useState(13.5)
    const [description, setDescription] = useState("lorem ipsum set")
    const [image, setImage] = useState("https://i.pravatar.cc")
    const [category, setCategory] = useState("electronic")

    const action = ()=>{
        fetch('https://fakestoreapi.com/products',{
            method:"POST",
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
return(
    <div>
        <form>
            {/*ici le formulaire html*/}
        </form>

        <div onClick={action}>submit</div>
    </div>
)
}