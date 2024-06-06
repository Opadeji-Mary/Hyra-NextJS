import React from 'react'

const About = () => {
  return (
    <>
        <div className='container d-flex p-5'>
          <div className='col-6 container-fluid p-4'>
          <h1 className='fw-5 col-12'>Discover a world where education meets excitement</h1> <br />
          <p className='col-8'>Our Islamic app for kids is designed to inspire and teach in the most enjoyable way. Our app is not just educational; it's an adventure in faith</p>
          </div>
          <div>
            <img src="image 54.png" alt="" />
          </div>
        </div>

        <div>
          <h2 className='text-center text-dark'>Why Choose Us</h2>
          <div class="row row-cols-1 g-4 ms-5 p-5 text-center">
            <div class="col">
              <div class="card bg-primary text-white">
                <img src="image 54.png" class="card-img-top" alt="..."/>
                <div class="card-body">
                  <p class="card-text">Our app contains the fundamental teaching of Islam for Kids</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-info text-white">
                <img src="image 234.png" class="card-img-top" alt="..."/>
                <div class="card-body">
                  <p class="card-text">We make it interesting by including the the Stories of the Prophets and his Companions </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-danger text-white">
                <img src="image 220.png" class="card-img-top" alt="..."/>
                <div class="card-body">
                  <p class="card-text">As we all know that Du’a is an essential part of our life as a Muslim. Du’a is also included in our app</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-warning text-white">
                <img src="image 236.png" className='card-img-top'  alt="..."/>
                <div class="card-body">
                  <p class="card-text">Our app contains the 99 Names of Allah</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-3 g-4"></div>
    </>
  )
}

export default About