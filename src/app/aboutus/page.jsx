import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.css'


const page = () => {
  return (
    <>
    <Nav/>
    <div>
      <div className=''>
        <div class="mt-4 p-4">
            <div class="d-flex flex-column flex-md-row align-items-center">
            <div class="col-0 container-fluid p-4 text-container ml-md-3">
                    <h1 className='fw-5 col-10 ml-5 p-2'>Hyra Islamic Stories for Kids</h1>
                    <p className='col-8 p-2'>Hyra Islamic Stories for Kids is an engaging and interactive Educational app designed to introduce Islamic teachings to children.</p>
                </div>
                <div class="image-container mb-3 mb-md-0 justify-content-center">
                    <img src="image 53.png" alt="Placeholder Image" width={400}/>
                </div>
            </div>
        </div>

        <div class="mt-4 p-5 d-flex bg-primary flex-column flex-md-row">
             <div class="image-container mb-3 mb-md-0 justify-content-center">
                 <img src="image 241.png" alt="Placeholder Image" width={400}/>
             </div>
            <div class="d-flex flex-column flex-md-row align-items-center">
            <div class="col-0 container-fluid p-4 text-container ml-md-3">
                    <p className='col-8 ms-5'>It has been observed that some children lack proper fundamentals of Islamic teachings. Hyra is introduced to help kids know about the Islamic Teachings..</p>
                </div> 
            </div>
        </div>

        <div class="mt-4 p-4">
            <div class="d-flex flex-column flex-md-row align-items-center">
            <div class="col-0 container-fluid p-4 text-container ml-md-3">
                    <p className='col-8 p-2'>The target audience for this app is kids between the ages of 7-12</p>
                </div>
                <div class="image-container mb-3 mb-md-0 justify-content-center">
                    <img src="image 242.png" alt="Placeholder Image" width={400}/>
                </div>
            </div>
        </div>

        <div class="mt-4 p-4 d-flex bg-info col-12 flex-column flex-md-row">
             <div class="image-container mb-3 mb-md-0 justify-content-center">
                 <img src="image 243.png" alt="Placeholder Image" width={400}/>
             </div>
            <div class="d-flex flex-column flex-md-row align-items-center">
            <div class="col-0 container-fluid p-4 text-container ml-md-3">
                    {/* <h1 className='fw-5 col-10 ml-5 p-2'>Hyra Islamic Stories for Kids</h1> */}
                    <p className='col-8 ms-5'>It has been observed that some children lack proper fundamentals of Islamic teachings. Hyra is introduced to help kids know about the Islamic Teachings..</p>
                </div> 
            </div>
        </div>
        </div>

        <div className='row row-cols-6 justify-content-center p-5'>
            <img className='justify-center' src="image 261.png" alt="" />
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default page