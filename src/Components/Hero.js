import "../App.css";
import "./Hero.css";


export default function Hero(){

    return(
        <div className="container-fluid top-margin ">


<div className="row align-items-center hero-bg-color py-4">

    <div className="col-md px-5 d-flex align-items-center justify-content-center">

<div>
        <div className="poppins-light my-2">
        Starting At $999
        </div>

        <div className="poppins-bold f-50 heroheadline my-2">

        The best notebook <br/> collection 2024
        </div>

        <div className="poppins-regular my-2">Exclusive offer <span className="c-red">-10%</span> off this week</div>


        <button className="hero-button poppins-semibold my-2">Shop Now</button>
        </div>
    </div>
    <div className="col-md px-5 d-flex align-items-center justify-content-center">
    <img src="https://shopify-xrh7.onrender.com/hero.png" className="img-fluid"/>

    </div>
 
  </div>

  <div className="row py-3">

    <div className="col">




            <div className="container">

                <div className="row">

<div className="col-md">
<div className="card grey-bg-color m-2" >
  <div className="card-body">
    <h5 className="card-title poppins-semibold"> Free Delivery</h5>
    <p className="card-text poppins-regular">Orders from all items</p>
  </div>
</div>
</div>
<div className="col-md ">
<div className="card grey-bg-color m-2" >
  <div className="card-body">
    <h5 className="card-title poppins-semibold"> Return & Refund</h5>
    <p className="card-text poppins-regular">Money guarantee</p>
  </div>
</div>
</div>
<div className="col-md">
<div className="card grey-bg-color m-2" >
  <div className="card-body">
    <h5 className="card-title poppins-semibold">Discount</h5>
    <p className="card-text poppins-regular">On order over $99

</p>
  </div>
</div>
</div>
<div className="col-md">
<div className="card grey-bg-color m-2" >
  <div className="card-body">
    <h5 className="card-title poppins-semibold">Support 24/7</h5>
    <p className="card-text poppins-regular">24 hours a day</p>
  </div>
</div>
</div>


                {/* <div className="col-2"><i className="fa fa-truck" aria-hidden="true"></i></div>
            <div className="col">
                <div className="poppind-mediun">Free Delivery</div>
                <div className="poppind-thin">Orders from all items</div>
            </div>              */}
            
            
               </div>

            </div>

          


    </div>




  </div>

            

            


        </div>
    )


}