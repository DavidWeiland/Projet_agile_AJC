import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import '../Styles/AfficherProduit.css'
import {url} from '../data/services'

function App() {
    const {id} = useParams();
    const [data, setData] = useState()
    
    useEffect(() => {
        getOneProduct(id)
    }, [id])
    
    const getOneProduct=(id)=>{
        fetch(`${url}/${id}`)
        .then(res=>res.json())
        .then (json=>setData(json))
    }
    
    return (
        <div>
            <div id="bloc1" className="container">
                <div id="bloc2" className="container">
                    <h1>{data?.title}</h1>
                </div>

                <div id="bloc3" className="container">
                    <h5>{data?.category}</h5>
                </div>

                <div id="bloc4" className="container">
                    <div id="bloc5">
                        <img src={data?.image} alt='' width="350" height="350"/>
                    </div>

                    <div id="bloc6">
                        <p align="justify">{data?.description}.
                        </p>
                    </div>

                    <div id="bloc7">
                        <p id="taille">{data?.price} €</p>
                        <form className="qte">
                            <select name="qte" size="1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>+10</option>
                            </select>
                        </form>
                        <button id="button" type="button" className="btn btn-primary">Ajouter au panier</button>
                        <p id="taille2">En stock</p>
                    </div>
                </div> 
            </div>
            <div id="taille3" className="container" >   
                <ul id="nav1" className="nav nav-tabs">  
                    <li className="col active"><a data-toggle="tab" href="#home">Description</a></li>  
                    <li className="col"><a data-toggle="tab" href="#menu1">Fiche Technique</a></li>  
                    <li className="col"><a data-toggle="tab" href="#menu2">Avis Client</a></li>
                    <li className="col"><Link to={`/editItem/${id}`}>Edit</Link></li>  
                </ul>  
                
                <div className="tab-content">  
                    <div id="home" className="tab-pane fade in active">  
                        <h3>Description détaillée</h3>  
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra risus ut iaculis viverra. Donec pellentesque, lacus ut lobortis rutrum, 
                            nunc lectus sollicitudin felis, quis iaculis ligula enim eget sem. Etiam malesuada justo ut elit ornare malesuada. Praesent dictum lacinia mauris, 
                            a mollis erat euismod nec. Ut viverra vehicula lobortis. Sed nulla nulla, sodales quis maximus ac, consequat at quam. Pellentesque vel mi enim. 
                            Curabitur vel mollis ligula, quis elementum eros.
                            <br/>
                            <br/>
                            Morbi quis enim leo. Sed feugiat dui ante, at lobortis nibh auctor ac. Vivamus efficitur est urna, et facilisis augue ultrices at. 
                            Phasellus non nulla hendrerit, tincidunt nunc elementum, convallis enim. In porttitor, tortor quis ornare egestas, sem dui ornare nulla, 
                            a placerat quam lacus a tellus. Nullam dignissim, nulla sed tincidunt sollicitudin, urna nulla eleifend tellus, efficitur tempor dolor erat sed nibh. 
                            Curabitur et consectetur metus. Phasellus eget tortor turpis. Morbi et erat eget tortor mattis bibendum quis quis lectus. Nunc ac risus aliquam, 
                            pulvinar ante scelerisque, sodales magna. Praesent eu pretium orci. Mauris vel nisi in lectus fringilla sodales vitae et nulla.
                        </p>  
                    </div>  
                    <div id="menu1" className="tab-pane fade">  
                        <h3>Fiche technique</h3>  
                        <p> In hac habitasse platea dictumst. In faucibus lectus quis purus faucibus, sed venenatis nibh porttitor. Donec sagittis, enim vel ultrices elementum, 
                            libero ligula tincidunt nisi, nec tristique est odio quis libero. Curabitur viverra ligula et enim gravida bibendum. Maecenas fringilla rutrum libero. 
                            Ut non nibh a quam gravida eleifend id eu enim. Ut eleifend imperdiet consectetur. Pellentesque blandit aliquet aliquam. Vestibulum dictum odio ultrices 
                            dolor volutpat, eget vehicula sem maximus. Nunc fringilla purus nec aliquam tristique. Etiam nec posuere dui. Nulla suscipit dictum lectus quis fringilla. 
                            Integer non nisl id dolor semper dapibus quis vel dui. Aliquam erat volutpat.
                            <br/>
                            <br/>
                            Mauris vestibulum nisl nec est iaculis, sit amet volutpat massa pharetra. Vestibulum finibus turpis quis venenatis bibendum. In hac habitasse platea dictumst. 
                            Praesent eu viverra massa. Phasellus finibus, nisi eget aliquet molestie, lacus nisi venenatis leo, in varius felis nisi vitae justo. Nunc ultricies elit non 
                            dignissim blandit. Nulla auctor est nisl, sit amet fermentum nulla convallis vestibulum. Curabitur augue diam, accumsan a purus consectetur, hendrerit commodo est. 
                            Vivamus sollicitudin vestibulum justo, in dignissim est vestibulum quis. Aliquam vel fermentum massa, in mattis enim. Vivamus pulvinar maximus turpis lobortis ornare. 
                            Etiam lobortis nunc felis, in lobortis diam gravida eget.
                        </p>  
                    </div>  
                    <div id="menu2" className="tab-pane fade">  
                        <h3>Avis client</h3>  
                        <p>Cras varius bibendum elit, at malesuada purus eleifend et. Donec a imperdiet est. Morbi vehicula lacinia dui, in accumsan elit consectetur egestas. 
                            Vivamus condimentum nibh id neque sollicitudin bibendum. Nulla eu iaculis sem. Aliquam erat volutpat. Proin rhoncus ex augue, quis convallis lectus cursus eget. 
                            Nunc ut nisl at nunc tempus lacinia. Vivamus pretium ac lectus at luctus. Integer blandit non augue vel ornare. In hac habitasse platea dictumst. Mauris vestibulum 
                            dolor vitae commodo finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean gravida nibh eu sem convallis, nec tempus 
                            ante bibendum.
                        </p>  
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

