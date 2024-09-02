import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
    <Nav/>
    <div>
    <div class="container">
    <div class="row">
        <div class="col-md-6 order-md-1">
            <p>1 Your text goes here...</p>
        </div>
        <div class="col-md-6 order-md-2">
            <img src="image 265.png" class="img-fluid" alt="Image"/>
        </div>
    </div>
   </div>

   <div class="container">
    <div class="row">
        <div class="col-md-6 order-md-2">
            <img src="image 265.png" class="img-fluid" alt="Image"/>
        </div>
        <div class="col-md-6 order-md-1">
            <p> 2 Your text goes here...</p>
        </div>
    </div>
</div>

<div class="container">
    <div class="row">
        <div class="col-md-6 order-md-2">
            <img src="image 265.png" class="img-fluid" alt="Image"/>
        </div>
        <div class="col-md-6 order-md-1">
            <p> 3 Your text goes here...</p>
        </div>
    </div>
    <div class="row">
        <div class="col-12 d-block d-md-none">
            <img src="image 265.png" class="img-fluid" alt="Image"/>
        </div>
    </div>
</div>



<div class="container">
    <div class="row">
        <div class="col-md-6 order-md-1">
            <img src="image 265.png" class="img-fluid mb-3 mb-md-0" alt="Image"/>
        </div>
        <div class="col-md-6 order-md-2">
            <p>2 1 Your text goes here...</p>
        </div>
    </div>
</div>


<div class="container">
    <div class="row">
        <div class="col-md-6 order-md-1">
            <img src="image 265.png" class="img-fluid mb-3 mb-md-0" alt="Image"/>
        </div>
        <div class="col-md-6 order-md-2">
            <p>Your text goes here...</p>
        </div>
    </div>
    <div class="row">
        <div class="col-12 d-block d-md-none">
            <img src="image 265.png" class="img-fluid mb-3 mb-md-0" alt="Image"/>
        </div>
        <div class="col-12 d-block d-md-none">
            <p> 2 2 Your text goes here...</p>
        </div>
    </div>
</div>


    </div>
    <Footer/>
</>
  )
}

export default page