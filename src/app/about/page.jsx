import React from 'react'

const About = () => {
  return (
    <>
    <div className=''>
    <div class="container mt-4 p-4">
        <div class="d-flex flex-column flex-md-row align-items-center">
        <div class="col-0 container-fluid p-4 text-container ml-md-3">
                <h1 className='fw-5 col-10 ml-5 p-2'>Discover a world where education meets excitement</h1>
                <p className='col-8 p-2'>Our Islamic app for kids is designed to inspire and teach in the most enjoyable way. Our app is not just educational; it's an adventure in faith</p>
            </div>
            <div class="image-container mb-3 mb-md-0 justify-content-center">
                <img src="image 54.png" alt="Placeholder Image" width={400}/>
            </div>
        </div>
    </div>
      {/* <div className='container d-flex p-5 col-12'>
        <div className='col-6 container-fluid p-4'>
          <h1 className='fw-5 col-12 ml-5'>Discover a world where education meets excitement</h1> <br />
          <p className='col-8'>Our Islamic app for kids is designed to inspire and teach in the most enjoyable way. Our app is not just educational; it's an adventure in faith</p>
          </div>
          <div>
            <img className='d-sm' src="image 54.png" alt="" />
          </div>
      </div> */}

        <div className='card-container'>
          <h2 className='text-center text-dark p-5'>Why Choose Us</h2>
          <div className="container row row-col-6 g-4 ms-5 text-center justify-content-center flex-column flex-md-row">
            <div className="col">
              <div className="card bg-primary text-white">
                <img src="image 54.png" alt="..." width={130} height={80} className='ms-5 mt-5'/>
                <div className="card-body">
                  <p className="card-text">Our app contains the fundamental teaching of Islam for Kids</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-info text-white">
                <img src="image 234.png" alt="..." width={150} height={50} className='ms-5 mt-5'/>
                <div className="card-body">
                  <p className="card-text">We make it interesting by including the the Stories of the Prophets and his Companions </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-danger text-white">
                <img src="image 220.png" alt="..." width={150} height={70} className='ms-5 mt-5'/>
                <div className="card-body">
                  <p className="card-text">As we all know that Du’a is an essential part of our life as a Muslim. Du’a is also included in our app</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-warning text-white">
                <img src="image 236.png" alt="..." width={150} height={100} className='ms-5 mt-5'/>
                <div className="card-body">
                  <p className="card-text">Our app contains the 99 Names of Allah</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container p-5'>
          <h1 className='text-center p-3'>Our Teachings</h1>
          <div className='col-md-12 row row-cols-5 p-5 gap-4 justify-content-center'>
            <div className='btn btn-outline-info p-5'>pillar of islam</div>
            <div className='btn btn-outline-warning p-5'>Article of Faith</div>
            <div className='btn btn-outline-danger p-5'>Stories Of the Prophets</div>
            <div className='btn btn-outline-primary p-5'>Stories Of the Companion</div>

          </div>
          <div className='col-m-1 row row-cols-5 mb-2 mt-0 gap-4 justify-content-center'>
          <div className='btn btn-primary text-center'>View All </div>
         </div>
        </div>
        

        <div className='d-flex bg-danger p-5 flex-column flex-md-row align-items-center'>
          <div className=''>
          <h1 className='p-5'>The Prophet (S.A.W) said “Seeking knowledge is an obligation upon every Muslim”</h1>
          <button className='btn btn-light ms-5'>Get started with us</button>
          </div>
          <img src="image 237.png" alt="" width={350} />
        </div>
      </div>
    </>
  )
}

export default About