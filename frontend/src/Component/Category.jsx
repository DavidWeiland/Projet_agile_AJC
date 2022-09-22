//import { useState } from "react"
import "../Styles/category.css"

export const Category = ({cat, action})=>{

return(
    <div className='selector' onClick={action}>
        {cat}
    </div>
)
}