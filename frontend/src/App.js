import './App.css';
import {useState, useEffect} from 'react';
import { Card } from './Component/Card';
import {Button} from './Component/Button';

function App() {
  const [data, setData] = useState()

useEffect(() => {
  onclickfunction()
}, [])

const onclickfunction=()=>{
  fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then (json=>setData(json))
}

const action=()=>{
  console.log("coucou")
}

  return (
    <div className="App">
      <Button action={()=>action()} text="click"/>
      {data?.map(({id, title, category, description, price, image})=>
        <Card
          key={`${id}-${title}`}
          id={id}
          title = {title}
          category={category}
          description={description}
          price={price}
          image = {image}
        />
      )}
    </div>
  );
}

export default App;
