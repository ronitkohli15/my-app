import jacket from'../images/jacket.jpg';
import jeans from'../images/jeans.jpg';
import denim from'../images/denim.jpg';
import top from'../images/top.jpg';
import shirt from'../images/shirt.jpg';
import cshirt from'../images/cshirt.jpg';
import hoodie from'../images/hoodie.jpg';
import pent from'../images/pent.jpg';
function Card(){
    return(

      <div class="bg">
      <b><h1 class ='text-center'>New Arrivals</h1></b><br>
      </br>
      <br></br>
        <div class="container">
          <div class="row justify-content-between">

            <div class="col-3">
            <div class="card text-center">
        <img src={jacket} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Oversized T-shirt</h5>
          
          <br></br>
          <p class="card-text"></p>
          
          <a href="/" class="btn btn-primary"> INR 2699/-</a>
        </div>
      </div>
            </div>

            <div class="col-3">
            <div class="card text-center">
        <img src={jeans} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Baggy jeans</h5>
          
          <br></br>
          <p class="card-text"></p>
          
          <a href="/" class="btn btn-primary"> INR 2699/-</a>
        </div>
      </div>
            </div>

            <div class="col-3">
            <div class="card text-center">
        <img src={denim} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Oversized T-shirt</h5>
          
          <br></br>
          <p class="card-text"></p>
          
          <a href="/" class="btn btn-primary"> INR 2699/-</a>
        </div>
      </div>
            </div>
            <div class="col-3">
            <div class="card text-center">
        <img src={top} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Oversized T-shirt</h5>
          
          <br></br>
          <p class="card-text"></p>
          
          <a href="/" class="btn btn-primary"> INR 2699/-</a>
        </div>
      </div>
            </div>
            
            <div class="col-3">
            <div class="card text-center">
        <img src={hoodie} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Oversized T-shirt</h5>
          
          <br></br>
          <p class="card-text"></p>
          
          <a href="/" class="btn btn-primary"> INR 2699/-</a>
        </div>
      </div>
            </div>
            <div class="col-3">
            <div class="card text-center">
        <img src={shirt} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Oversized T-shirt</h5>
          
          <br></br>
          <p class="card-text"></p>
          
          <a href="/" class="btn btn-primary"> INR 2699/-</a>
        </div>
      </div>
            </div>
            <div class="col-3">
            <div class="card text-center">
        <img src={cshirt} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Oversized T-shirt</h5>
          
          <br></br>
          <p class="card-text"></p>
          
          <a href="/" class="btn btn-primary"> INR 2699/-</a>
        </div>
      </div>
            </div>
            <div class="col-3">
            <div class="card text-center">
        <img src={pent} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Oversized T-shirt</h5>
          
          <br></br>
          <p class="card-text"></p>
          
          <a href="/" class="btn btn-primary"> INR 2699/-</a>
        </div>
      </div>
            </div>
           
           

           
</div>
        </div>
      </div>
)
};
   export default Card;