import { useState, useEffect } from 'react';
import "../App.css";
import "./Products.css";


export default function Product() {
  let [productsData, setproductsData] = useState();
  let [productsData2, setproductsData2] = useState();

  let category = [];

  let [categorytype, setCategorytype] = useState();

  let [acendingsort, setAcendingsort ]=useState(1);
  let [decendingsort, setDecendingsort ]=useState(1);
  let productDataforsort={};

  useEffect(() => {
    let getAPI = () => {
      fetch('https://dummyjson.com/products?limit=100')
        .then((response) => response.json())
        .then((json) => {
          setproductsData(json);
          setproductsData2(json);

console.log("working");

        });


    };
    getAPI();

  }, []);
  productsData != undefined && productsData.products.forEach(element => {
    if (category.indexOf(element.category) === -1) {
      category.push(element.category);
    }


  });

  productsData != undefined&& ( productDataforsort = [...productsData.products,]    );



  let changeCategory = (e) => {

    let categoryTotalData = document.getElementsByClassName('categorydata');

    document.getElementById("mySidebar").style.width = "0";

    for (let data of categoryTotalData) {

      data.style.color = "white";

    }



    setCategorytype(e.target.id);

    e.target.style.color = "blue";
  }


  let defaultsort=()=>{
    setAcendingsort(1);
    setDecendingsort(1);
  }

  let acendingsorting=()=>{

    setAcendingsort(1);
    setDecendingsort(-1);

  }

  let decendingsorting=()=>{
    setAcendingsort(-1);
    setDecendingsort(1);
  }

let openNav=()=> {
  document.getElementById("mySidebar").style.width = "250px";
}

let closeNav=()=> {
  document.getElementById("mySidebar").style.width = "0";
}

  return (

    <div>
      <div className='container-fluid content' id='content'>

      <div className=''>
            



<div id="mySidebar" className="sidebar">
  <a href="javascript:void(0)" className="closebtn"onClick={closeNav}>×</a>

  <h2 className='poppins-semibold f-20'>Category</h2>

<div>
  {category != undefined && category.map((product2, index) => {

    return (

      <div key={index} className='poppins-light f-14 categorydata' onClick={changeCategory} id={product2}>


        {product2}

      </div>
    )
  })}




</div>

</div>

          </div>
        <div className='row'>
       

          <div className='col'>

            <div className='brudcrum d-flex d-flex d-flex justify-content-between'>

            <button className="openbtn" onClick={openNav}>☰ Category</button>  


              <div>

                <span className='f-20 poppins-regular'>Products</span> &gt; <span className='f-20 poppins-semibold'>{categorytype ? categorytype : "all"}</span>


              </div>



              <div>



<div className="dropdown">
  <a className="btn btn-secondary dropdown-toggle"  role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a>

  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a className="dropdown-item"onClick={defaultsort}>Default</a></li>
    <li><a className="dropdown-item" onClick={acendingsorting}>Price (Low to High)</a></li>
    <li><a className="dropdown-item" onClick={decendingsorting} >Price (High to Low)</a></li>
  </ul>
</div>

              </div>

            </div>


            <div className='card-container'>





              {

                categorytype ? productsData != undefined && 
                

                
               (
               

                
                productDataforsort.sort((a, b) => a.price > b.price? acendingsort:decendingsort).map((product, index) => {

                  console.log(acendingsort);
                  console.log(decendingsort);


                  if (categorytype == product.category) {
                    return (

                      <div className="card" key={product.id}>

                        <div className='img-container'><img src={product.images[0]} className="card-img-top product-image" alt="..." /></div>
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
                            <div className="card-title poppins-light f-16 text-primary"><span className='anta-regular'>${Math.round(product.price - ((product.discountPercentage / 100) * product.price))}</span> </div>


                            <div className="card-title poppins-light f-16 "><span className='anta-regular'>{product.discountPercentage}% Discount</span> </div>
                          </div>



                        </div>
                      </div>
                    );

                  }

                })




  )
                
                
                : productsData != undefined && productsData.products.map((product, index) => {

                

                    return (
                      <div className="card" key={product.id}>

                        <div className='img-container'><img src={product.images[0]} className="card-img-top product-image" alt="..." /></div>
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
                            <div className="card-title poppins-light f-16 text-primary"><span className='anta-regular'>${Math.round(product.price - ((product.discountPercentage / 100) * product.price))}</span> </div>


                            <div className="card-title poppins-light f-16 "><span className='anta-regular'>{product.discountPercentage}% Discount</span> </div>
                          </div>



                        </div>
                      </div>
                    );
                  })}



            </div>

          </div>



        </div>
      </div>
    </div>
  )
}

