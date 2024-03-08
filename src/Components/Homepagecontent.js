import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "../App.css";
import "./Homepagecontent.css";

export default function 
(){

    let [productsData, setproductsData] = useState();



 useEffect(() => {
    let getAPI = () => {
      fetch('https://dummyjson.com/products?limit=20')
        .then((response) => response.json())
        .then((json) => {
          setproductsData(json);
        });
    };
    getAPI();
  }, []);

    return(


        <div className='container-fluid'>

            <h1 className='poppins-semibold'>Trending Products</h1>

{console.log(productsData)}

            <div className='card-container'>





{productsData != undefined &&
  productsData.products.map((product, index) => {
    return (
        <div className="card"  key={product.id}>

            <div className='img-container'>


              <Link to={"/react-shoppi/product/"+product.id}>
              
              
              
              <img src={product.images[0]} className="card-img-top product-image" alt="..."/>

              </Link>
              
              </div>
        <div className="card-body">

        <div className="card-title poppins-light f-14">{product.category}</div>
          <div className="card-title poppins-bold f-20">{product.title}</div>

        <div className='product-card-flex'>

            <div className='left'> <div className="card-title poppins-light f-16"><span className="badge rounded-pill bg-danger">{product.rating}</span> </div>

<div className="card-title poppins-light f-14"><del >${product.price}</del> </div>



  </div>


            <div className='right'>
            <a href="#" className="btn btn-warning my-2">Add to Cart</a>
                 
                 
                 </div>

        </div>

        <div className='product-card-flex'>
<div className="card-title poppins-light f-16 text-primary"><span className='anta-regular'>${Math.round(product.price-((product.discountPercentage/100)*product.price))}</span> </div>


<div className="card-title poppins-light f-16 "><span className='anta-regular'>{product.discountPercentage}% Discount</span> </div>
 </div>
         

          
        </div>
      </div>
    );
  })}



            </div>
        </div>
    )

}



