import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Footer from '../components/Footer'
import Navbar2 from '../components/Navbar2'
import Link from 'next/link'


const page = () => {
  return (
    <>
    <Navbar2/>
    <div className='card-container'>
       <div className='container row g-4 p-5 ms-5 justify-content-center flex-column flex-md-row'>
        <div className='d-flex col-md-12 row row-col-6'>
        <div className='col p-5' width={20}>
            <div className="card bg-primary text-white">
               <img src="image 26.png" class="card-img-top p-5" width={18} alt="..."/>
               <div className="card-body row-5 ms-4">
                 <h5 className="card-title">Pillars of Islam: </h5>
                 <p className="card-text">The Pillars of Islam are essentials and must know for all Muslims</p>
               </div>
               
               <div className="card-body col-5 ms-4 mb-5">
                <Link href="/Pillar" class="card-link text-white">See more</Link>
               </div>
            </div>
           </div>

           <div className='col p-5' width={20}>
            <div className="card bg-danger text-white">
               <img src="image 28.png" class="card-img-top p-5" width={20} alt="..."/>
               <div className="card-body row-5 ms-4">
                 <h5 className="card-title">Articles of Faith:</h5>
                 <p className="card-text">The Articles of faith are important part of Islamic Teachings</p>
               </div>
               
               <div className="card-body col-5 ms-4 mb-5">
                 <a href="#" class="card-link text-white">See more</a>
               </div>
            </div>
           </div>
        </div>

        <div className='d-flex col-md-12 row row-col-6'>
        <div className='col p-5' width={20}>
            <div className="card bg-primary text-white">
               <img src="image 244.png" class="card-img-top p-5" width={18} alt="..."/>
               <div className="card-body row-5 ms-4">
                 <h5 className="card-title">Stories of the Prophet:</h5>
                 <p className="card-text">Allah sent the prophets to guide mankind, each prophet as his own followers. The stories of the Prophets teaches us some moral values to add to our daily lives</p>
               </div>
               
               <div className="card-body col-5 ms-4 mb-5">
                 <a href="#" class="card-link text-white">See more</a>
               </div>
            </div>
           </div>

           <div className='col p-5' width={20}>
            <div className="card bg-warning text-white">
               <img src="image 237.png" class="card-img-top p-5" width={20} alt="..."/>
               <div className="card-body row-5 ms-4">
                 <h5 className="card-title">Stories of the Companions:</h5>
                 <p className="card-text">The stories of the companions of Prophet Muhammad (SAW)  let us know the followers of the Prophet Muhammad (SAW) and those that ruled after the death of Prophet Muhammad(SAW)</p>
               </div>
               
               <div className="card-body col-5 ms-4 mb-5">
                 <a href="#" class="card-link text-white">See more</a>
               </div>
            </div>
           </div>
        </div>


        <div className='d-flex col-md-12 row row-col-6'>
        <div className='col p-5' width={20}>
            <div className="card bg-primary text-white">
               <img src="image 221.png" class="card-img-top p-5" width={18} alt="..."/>
               <div className="card-body row-5 ms-4">
                 <h5 className="card-title">Du’a:</h5>
                 <p className="card-text">Du’a is an essential part of the daily lives of every Muslims</p>
               </div>
               
               <div className="card-body col-5 ms-4 mb-5">
                 <a href="#" class="card-link text-white">See more</a>
               </div>
            </div>
           </div>

           <div className='col p-5' width={20}>
            <div className="card bg-danger text-white">
               <img src="image 349.png" class="card-img-top p-5" width={18} alt="..."/>
               <div className="card-body row-5 ms-4">
                 <h5 className="card-title">99 Names of Allah:</h5>
                 <p className="card-text">It is good to call upon Allah using His names</p>
               </div>
               
               <div className="card-body col-5 ms-4 mb-5">
                 <a href="#" class="card-link text-white">See more</a>
               </div>
            </div>
           </div>
        </div>

       </div>
    </div>
    <Footer/>
    </>
  )
}

export default page