import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

import "../App.css";
import "./Product.css";

export default function Product(){

    const id = useParams();

    const [product, setproduct] = useState();

    useEffect(() => {
        let getAPI = () => {
          fetch('https://dummyjson.com/products/'+id.id)
            .then((response) => response.json())
            .then((json) => {
                setproduct(json);
    
    console.log(json);
    
            });
    
    
        };
        getAPI();
    
      }, []);

    return(
        <div className='top-margin'>



            <div className='container-fluid'>

                <div className='row'>

                    <div className='col-xl-4 col-md-6'>

                        {
                            product !=undefined &&

                            <img src={product.thumbnail} className="card-img-top product-image" alt="..." />

                        }


                    </div>
                    <div className='col-xl-4 col-md-6'>
                    {
                            product !=undefined &&

                            <img src={product.thumbnail} className="card-img-top product-image" alt="..." />

                        }
                    </div>

                    <div className='col-xl-4 col-md-6'>
                    {
                            product !=undefined &&

                            <img src={product.thumbnail} className="card-img-top product-image" alt="..." />

                        }
                    </div>


                </div>


            </div>


            




        </div>
    )
}
